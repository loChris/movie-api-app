const express = require('express');
const request = require('request');
const app = express();

app.set('view engine', 'ejs');

app.get('/results', (req, res) => {
	request(
		'http://omdbapi.com/?s=star&apikey=thewdb',
		(error, response, body) => {
			if (!error && response.statusCode == 200) {
				const data = JSON.parse(body);
				res.render('results', { data: data });
			}
		}
	);
});

app.listen(3000, () => {
	console.log('Movie app has started. Server is listening or port 3000...');
});
