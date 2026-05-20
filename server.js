const express = require('express');
const app = express();

app.get('/config', async (req, res) => {
    const url = process.env.TARGET_URL;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
});

app.listen(process.env.PORT || 3000);