const locationId = require('./getLocationid.js')
const weather = require('./getWeather.js')

const express = require('express');
const path = require('path');
const hbs = require('hbs');

publicDir = path.join(__dirname, '../public');
viewsDir = path.join(__dirname, '../template/views');
partialsDir = path.join(__dirname, '../template/partials');

const app = express();
app.use(express.static(publicDir));
app.set('view engine', 'hbs');
app.set('views', viewsDir);
hbs.registerPartials(partialsDir);
// let weatherRes = "";
// locationId('pune', (key) => {
//     weather(key.Key, (weather) => {
//         return weather;
//         weatherRes = weather;
//         console.log(`It is ${weather.Headline.Text}`);
//     })
// })

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Madhur Bansal'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Madhur Bansal'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Madhur Bansal'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.city) {
        return res.send({
            error: 'City was not provided'
        })
    }
    var cityTemp;
    locationId(req.query.city, ({error}={}, {Key}={}) => {
        if(error){
            return res.send({
                error
            });
        }
        weather(Key, ({error}={}, weather) => {
            if(error){
                return res.send({error});
            }
            res.send(weather);
        })
    })

});

app.get('', (req, res) => {
    res.send("weatherRes");
}) 

app.get('*', (req, res) => {
    res.render('404', {
        name: 'Madhur Bansal'
    });
})

app.listen(2123, () => {
    console.log('Server started');
})
