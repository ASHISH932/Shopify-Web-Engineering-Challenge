const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes');
const app = express();

const publicPath = path.join(__dirname, 'dist');
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log('server is up at port '+ port);
});
