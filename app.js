require('dotenv/config');
const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const app = express();

app.use(bodyParser.json());

// 3
app.get('/countries', async (req,res) => {
    let countries;
	await fetch('https://restcountries.eu/rest/v2/all')
		.then(res => res.json())
		.then(data => countries = data);

	res.send(200, {data : countries, status : 'success'});
});

app.listen(process.env.PORT);