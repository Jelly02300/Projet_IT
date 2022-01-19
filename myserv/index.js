import express from 'express';
import fetch from 'node-fetch';
const app = express();

app.get('/', function(req, res) {
    res.send("Hello world!")
});

app.get('/cors', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    console.log(req.query.query);
    const url = "https://api.unsplash.com/photos/random?query=" + req.query.query;
    console.log(url);
    const result = await fetch(url, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Client-ID 4vY5w61ORMSDC0pPjwOLcMTlplkHCvFaza8MyEx2WII'
        }
    })
    const data = await result.json();
    res.send({ "msg": data.urls.raw })
});

app.listen(80, function() {
    console.log("Server is listening on port 80...");
});
