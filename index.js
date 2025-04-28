// Import required modules
const express = require('express');
const axios = require('axios');
const cron = require('node-cron');
const { sendAlertEmail } = require('./emailNotification');

// Initialize Express app
const app = express();
const PORT = 5000;

// URL to send GET request to
const targetUrls = ['your urls here'];

// Function to send GET request
const sendGetRequest = async () => {
  for (const url of targetUrls) {
    try {
      const response = await axios.get(url);
      console.log(`GET request sent successfully to ${url}:`, response.data);
    } catch (error) {
      console.error(`Error sending GET request to ${url}:`, error.message);
      await sendAlertEmail(process.env.ALERT_EMAIL, url, error.message);
    }
  }
};

// Schedule the cron job
cron.schedule('*/7 * * * *', () => {
  console.log('Cron job triggered at:', new Date().toISOString());
  sendGetRequest();
});

console.log('Cron job scheduled to run every 5 minutes.');

// Add a simple GET route
app.get('/', (req, res) => {
  res.send('Cron job scheduled to run every 5 minutes running...');
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
