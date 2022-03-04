require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080; 

app.use(express.json());

app.use('/api', require('./routes/api'));

app.listen(port, () => {
    console.log(`App running in port ${port}`);
});
