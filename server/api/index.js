const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Add this to handle the base URL
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "MERN Stack Backend is live and running!"
    });
});

// Your existing error handler or fallback route
app.use((req, res) => {
    res.status(404).json({ success: false, message: "Route not found" });
});

module.exports = app;