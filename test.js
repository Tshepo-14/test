const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample in-memory database for storing registered users
let users = [];

// Register endpoint
app.post('/register', (req, res) => {
    const { email, password } = req.body;

    // Check if email is already registered
    if (users.some(user => user.email === email)) {
        return res.status(400).json({ error: 'Email already registered' });
    }

    // Register user
    users.push({ email, password });
    res.status(201).json({ message: 'User registered successfully' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});