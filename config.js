// config.js
const dotenv = require('dotenv');
const path = require('path');

// Get the environment (default to 'dev' if not set)
const env = process.env.ENV || 'dev';

// Build the path to the appropriate .env file
const envFilePath = path.resolve(__dirname, `./env/.env.${env}`);

// Load the .env file
dotenv.config({ path: envFilePath });


console.log(`API URL: ${process.env.URL}`);