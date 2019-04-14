const request = require('request');
const apiKey = 'gvzolu08qAdyUnNnkZAV1pzOsn65ZuYG'
const getWeather = (key, callback) => {
url=`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${key}?apikey=${apiKey}`
    request({
        url,
        json: true
    }, (error, response) => {
            
            if(!response.body.Headline){
                return callback({
                    error:'Unable to get weather details'
                }, undefined);
            }
            let resToSend={
                text:response.body.Headline.Text,
                minTemp:response.body.DailyForecasts[0].Temperature.Minimum.Value+'F',
                maxTemp:response.body.DailyForecasts[0].Temperature.Maximum.Value+'F',
            }
                // console.log(response.body[0].Key);
                callback(undefined, resToSend);
            
    })
}
module.exports=getWeather;