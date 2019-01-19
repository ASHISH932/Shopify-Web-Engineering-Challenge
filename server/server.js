const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '..', 'dist');
const port = process.env.PORT || 3001;
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('*.png', (req, res) => {
    res.sendFile(path.join(__dirname, '..'));
});

app.listen(port, () => {
    console.log('server is up at port '+ port);
});
