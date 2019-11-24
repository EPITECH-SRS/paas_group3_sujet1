'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8000;
const HOST = '0.0.0.0';
const app = express();

const { connectPG } = require('./handlers/handlingPG');
const { connectREDIS } = require('./handlers/handlingREDIS');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', connectPG);
app.get('/status', connectREDIS);

// app.get('/', async (req, res) => {
//app.get('/status', async (req, res) => { }); ici je dois faire une connexion vers la base de données redis et retourner un autre json


app.listen(PORT, () => {
	console.log(`[+] Node server running on http://${HOST}:${PORT}`);
});
