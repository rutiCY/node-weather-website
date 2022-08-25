const request = require('request')

const forecast = (latitude,longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=456091ca64143fe1b2b1b0ff250e00dd&query='+latitude +','+longitude +'&units=m'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather service!')
        }else if(body.error){
            callback('Unable to find location')
        }else{        
            callback(undefined, body.current.weather_descriptions[0]+'. It is currently '+ body.current.temperature +' degress out. It feels like '+body.current.feelslike+ ' degress out. The humidity is ' +body.current.humidity+ '%.')
        }    
    })
}

module.exports = forecast