# URL Shortener Application

This application is a **URL shortener** built with **Supabase** and **React**, designed to simplify URLs and provide real-time analytics. It offers features like tracking URL usage location and generating QR codes for easy sharing.

## Features

- **URL Shortening**: Quickly shorten lengthy URLs to improve shareability.
- **Real-Time Analytics**: Track and analyze where (location) each URL is accessed from.
- **QR Code Generation**: Automatically generate a QR code for each shortened URL, making it easy to share and scan.

## Tech Stack

- **Frontend**: React
- **Backend**: Supabase (Database & Authentication)
- **API Integration**: Supabase provides real-time analytics and data handling

## Getting Started

### Prerequisites
- Node.js
- Supabase account

### Setup

1. Clone the repository:
   ```bash
   git clone [https://github.com/Biggerwad/shortenit.git]
   cd url-shortener-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Supabase:
   - Create a project on [Supabase](https://supabase.io).
   - Set up your database for URL storage and tracking.
   - Add your Supabase API URL and API key to the environment file.

4. Run the application:
   ```bash
   npm start
   ```
5. Status:
  - Mvp Stage


## Usage

- Enter a long URL to generate a shortened version.
- Access real-time analytics on the URL's usage and location.
- Download or share the generated QR code for each URL.

## License

This project is open-source and available under the [MIT License](LICENSE). 
