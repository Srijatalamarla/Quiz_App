const express = require('express');
const axios = require('axios');
// const cors = require('cors');

// Initialize the express app
const app = express();
// app.use(cors());

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

require('dotenv').config({ path: '../.env' });
const API_URL = process.env.API_URL;

// API route to fetch data from external API
app.get('/', async (req, res) => {
    try {

        const response = await axios.get(`${API_URL}`);
        res.json(response.data);

    } catch (error) {
        // Error handling if the request fails
        res.status(500).json({ type: 'error', message: error.message });
    }
});

// Define the port for the server to listen on
const PORT = process.env.PORT;

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));