let myFunction = () =>{

    let cityy = document.querySelector("#city").value;
    axios.get(`http://api.weatherapi.com/v1/current.json?key=25175e31b7074cfc895204529222906&q=${cityy}`)
    .then(function (response) {
        // handle success
        const data = response.data;

        console.log(data);

    document.querySelector("#city_name").innerText = data.location.name + ", " + data.location.region;
    document.querySelector("#feels_like").innerText = "Feels Like "+ data.current.feelslike_c + "°C";
    document.querySelector("#weather_condition").innerText = data.current.condition.text;
    document.querySelector("#weather_icon").src = data.current.condition.icon;
    document.querySelector("#weather_condition").innerText = data.current.condition.text;
    document.querySelector("#weather_condition").innerText = data.current.condition.text;
    document.querySelector("#weather_condition").innerText = data.current.condition.text;
    document.querySelector("#weather_condition").innerText = data.current.condition.text;    
    document.querySelector("#weather_condition").innerText = data.current.condition.text;
    


      

    })


}
// getWeatherData();

    // 25175e31b7074cfc895204529222906 key
