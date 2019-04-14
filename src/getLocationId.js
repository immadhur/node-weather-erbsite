const request = require('request');
const apiKey = 'gvzolu08qAdyUnNnkZAV1pzOsn65ZuYG'
const getLocationId = (place, callback) => {
    url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${place}`
    request({
        url,
        json: true
    }, (error, response) => {
            if(response){
                // console.log(response.body[0].Key);
                callback(undefined, response.body[0]);
            }
            else if(error){
                callback({error:'Unable to get location ID'}, undefined);
            }
    })
}
module.exports=getLocationId;