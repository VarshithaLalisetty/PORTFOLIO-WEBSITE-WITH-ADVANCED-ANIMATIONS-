const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // Here you would typically implement email sending logic
    // For now, we'll just console.log the data
    console.log('Contact form submission:', { name, email, message });
    
    res.json({ success: true, message: 'Message received!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});