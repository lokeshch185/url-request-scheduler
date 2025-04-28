# URL Request Scheduler

This is a URL Request Scheduler tool that allows you to schedule HTTP requests to specified URLs and notifies you via email if any service fails. This tool is useful for monitoring services, checking the availability of URLs, and ensuring uptime.

## Features
- **Scheduled Requests**: Schedule requests to multiple URLs at specified intervals.
- **Failure Notification**: Sends an email notification if a service fails (i.e., if the request returns an error or times out).
- **Customizable Intervals**: Define how often the requests are made (e.g., hourly, daily).
- **Easy Setup**: Simple configuration and quick setup to start monitoring.

## Requirements
- **Node.js**: Ensure Node.js is installed on your machine.
- **Nodemailer**: For sending email notifications.
- **Cron Jobs**: For scheduling periodic requests.
