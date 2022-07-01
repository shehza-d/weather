let myFunction = () => {

    let cityy = document.querySelector("#city").value;
    axios.get(`https://api.weatherapi.com/v1/current.json?key=25175e31b7074cfc895204529222906&q=${cityy}`)
        .then(function (response) {
            // handle success
            const data = response.data;

            console.log(data);

            let icon = data.current.condition.icon;
            icon.replace("/file// ");
            // console.log(icon);
            document.querySelector("#weather_icon").src = icon;




            document.querySelector("#tempC").innerText = data.current.temp_c + "°C";
            document.querySelector("#tempF").innerText = "Fahrenheit : " + data.current.temp_f + "°F";


            document.querySelector("#city_name").innerText = data.location.name + ", " + data.location.region + ", " + data.location.country;
            document.querySelector("#weather_condition").innerText = data.current.condition.text;

            document.querySelector("#feels_like").innerText = "Feels Like: " + data.current.feelslike_c + "°C";
            document.querySelector("#wind_speed").innerText = "Wind Speed: " + data.current.wind_kph + "KP/H";
            document.querySelector("#humidity").innerText = "Humidity: " + data.current.humidity + "%";


            document.querySelector("#visibility").innerText = "Visibility : " + data.current.vis_km + "KM";
            document.querySelector("#weather_condition").innerText = data.current.condition.text;
            document.querySelector("#weather_condition").innerText = data.current.condition.text;
            document.querySelector("#weather_condition").innerText = data.current.condition.text;





        })


}
// getWeatherData();

    // 25175e31b7074cfc895204529222906 key
