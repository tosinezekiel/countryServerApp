require('dotenv/config');
const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const app = express();

app.use(bodyParser.json());



app.listen(process.env.PORT);