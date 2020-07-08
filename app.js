require('dotenv/config');
const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const app = express();

app.use(bodyParser.json());

//capitalize first letter of a string
function capital_letter(str) 
{

	let firstletter = str.charAt().toUpperCase();
	let restletter = str.slice(1)
	return firstletter+restletter;
	
}

// 2
app.post('/countries/filter', async (req,res) => {
    if (typeof req.body.names == "undefined" || req.body.names == null){
		res.status(422).send({message : '[names] property expected, null given', status : 'error'});
		return false;
	}
	let countries;
	let names = req.body.names;
	let matchCountry = [];
	let capitalizenames = names.map(item => capital_letter(item));
	
	if(names.length < 1){
		res.status(422).send({message : 'please provide atleast one country', status : 'error'});
		return false;
	}

	await fetch('https://restcountries.eu/rest/v2/all')
		.then(res => res.json())
		.then(data => countries = data);

	for(let name in capitalizenames){
		for(var i = 0; i < countries.length; i++){
			if(countries[i]["name"] == capitalizenames[name]){
				matchCountry.push(countries[i]);
			}
		}  
	}	
	res.status(200).send({data : matchCountry, status : 'success'});
});


app.listen(process.env.PORT);