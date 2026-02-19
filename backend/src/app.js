const express = require('express');
const cors = require('cors');
const noteRoutes = require('./routes/noteRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/notes', noteRoutes);

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Notes API is running!' });
});

module.exports = app;