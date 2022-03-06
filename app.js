require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000; 

app.use(express.json());
app.use(cors());

app.use('/api', require('./routes/api'));

app.listen(port, () => {
    console.log(`App running in port ${port}`);
});
