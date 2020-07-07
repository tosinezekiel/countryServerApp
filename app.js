require('dotenv/config');
const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const app = express();

app.use(bodyParser.json());

// 1
app.post('/countries', async (req,res) => {
	await fetch('https://restcountries.eu/rest/v2/name/'+req.body.name)
		.then(res => res.json())
		.then(data => res.send(200, {data : data, status : 'success'}))
});


app.listen(process.env.PORT);