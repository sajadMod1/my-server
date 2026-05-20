const express = require('express');
const app = express();

app.get('/config', async (req, res) => {
    try {
        const url = process.env.TARGET_URL;
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch' });
    }
});

module.exports = app;