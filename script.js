const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ae56a059ddmsh1f8b4d7e92eaf26p1d3680jsne0bb3d6a83df',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            // temp3.innerHTML = response.temp
            // feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

}

    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_pct3.innerHTML = response.cloud_pct
        temp3.innerHTML = response.temp
        humidity3.innerHTML = response.humidity
        min_temp3.innerHTML = response.min_temp
        max_temp3.innerHTML = response.max_temp
        wind_speed3.innerHTML = response.wind_speed
        wind_degrees3.innerHTML = response.wind_degrees
        sunrise3.innerHTML = response.sunrise
        sunset3.innerHTML = response.sunset
})
    .catch(err => console.error(err));


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris', options)
    .then(response => response.json())
    .then((response) => {
            console.log(response)
            cloud_pct4.innerHTML = response.cloud_pct
            temp4.innerHTML = response.temp
            humidity4.innerHTML = response.humidity
            min_temp4.innerHTML = response.min_temp
            max_temp4.innerHTML = response.max_temp
            wind_speed4.innerHTML = response.wind_speed
            wind_degrees4.innerHTML = response.wind_degrees
            sunrise4.innerHTML = response.sunrise
            sunset4.innerHTML = response.sunset
})

    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Norway', options)
    .then(response => response.json())
    .then((response) => {
            console.log(response)
            cloud_pct5.innerHTML = response.cloud_pct
            temp5.innerHTML = response.temp
            humidity5.innerHTML = response.humidity
            min_temp5.innerHTML = response.min_temp
            max_temp5.innerHTML = response.max_temp
            wind_speed5.innerHTML = response.wind_speed
            wind_degrees5.innerHTML = response.wind_degrees
            sunrise5.innerHTML = response.sunrise
            sunset5.innerHTML = response.sunset
})

    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Thailand', options)
    .then(response => response.json())
    .then((response) => {
            console.log(response)
            cloud_pct6.innerHTML = response.cloud_pct
            temp6.innerHTML = response.temp
            humidity6.innerHTML = response.humidity
            min_temp6.innerHTML = response.min_temp
            max_temp6.innerHTML = response.max_temp
            wind_speed6.innerHTML = response.wind_speed
            wind_degrees6.innerHTML = response.wind_degrees
            sunrise6.innerHTML = response.sunrise
            sunset6.innerHTML = response.sunset
})

    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london', options)
    .then(response => response.json())
    .then((response) => {
            console.log(response)
            cloud_pct7.innerHTML = response.cloud_pct
            temp7.innerHTML = response.temp
            humidity7.innerHTML = response.humidity
            min_temp7.innerHTML = response.min_temp
            max_temp7.innerHTML = response.max_temp
            wind_speed7.innerHTML = response.wind_speed
            wind_degrees7.innerHTML = response.wind_degrees
            sunrise7.innerHTML = response.sunrise
            sunset7.innerHTML = response.sunset
})

    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Malaysia', options)
    .then(response => response.json())
    .then((response) => {
            console.log(response)
            cloud_pct8.innerHTML = response.cloud_pct
            temp8.innerHTML = response.temp
            humidity8.innerHTML = response.humidity
            min_temp8.innerHTML = response.min_temp
            max_temp8.innerHTML = response.max_temp
            wind_speed8.innerHTML = response.wind_speed
            wind_degrees8.innerHTML = response.wind_degrees
            sunrise8.innerHTML = response.sunrise
            sunset8.innerHTML = response.sunset
})

    .catch(err => console.error(err));

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")