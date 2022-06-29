// let myFunction = () =>{
    // console.log("Hello World");

 function myFunction(){
    console.log("Hello World");
    let cityy = document.querySelector("#city").innerText;
    console.log(cityy);
    
    axios.get('http://api.weatherapi.com/v1/current.json?key=25175e31b7074cfc895204529222906&q=karachi')
    .then(function (response) {
        // handle success
        const data = response.data;
        console.log(data);
    })
}
// getWeatherData();

    // 25175e31b7074cfc895204529222906 key
