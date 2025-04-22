                                             # PayPal Payment Integration (Node.js)

This is a Node.js project that integrates with PayPal's REST API to create and capture orders. It uses Axios for HTTP requests and dotenv for environment variable management.

## Features

- Generate OAuth2 Access Token
- Create a PayPal order
- Capture an approved order
- Basic HTML UI with a Pay Now button

## Project Structure


## Getting Started

### 1. Clone the repository


### 2. Install dependencies


### 3. Create a .env file

Create a `.env` file in the root directory and add the following:

PAYPAL_CLIENT_ID=your_paypal_client_id PAYPAL_SECRET=your_paypal_secret 
PAYPAL_BASE_URL=https://api-m.sandbox.paypal.com