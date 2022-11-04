import { useState, useEffect } from "react";
import axios from 'axios';

const WeatherApp = () => {
  const [city, setCity] = useState("karachi");
  const API_KEY = "49cc8c821cd2aff9af04c9f98c36eb74";
  //getting user current location and calling ap
  useEffect(() => {
    //Runs only on the first render
    (async () => {
      await navigator.geolocation.getCurrentPosition(async (success) => {
        const { latitude, longitude } = success.coords;
        await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
        )
          // .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // showWeatherData(data);
          });
      });
    })();
  }, []);

  console.log(city);

  const getWeatherData = async (e) => {
    e.preventDefault();
    console.log("first");
    await axios.get(

        //  `https://api.openweathermap.org/data/2.5/forecast?&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
        //  `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
          `https://api.weatherapi.com/v1/current.json?key=25175e31b7074cfc895204529222906&q=${city}`
      // `https://api.weatherapi.com/v1/current.json?key=25175e31b7074cfc895204529222906&q=${city}`
    )
      // .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        // document.querySelector('#userName').innerHTML = `My name is ${json?.name}`
      })
      .catch((reject) => console.log(reject));
  };
  //   (() => {
  //     await fetch(
  //       `https://api.weatherapi.com/v1/current.json?key=25175e31b7074cfc895204529222906&q=${city}`
  //     )
  //       .then((response) => response.json())
  //       .then((json) => {
  //         console.log(json);
  //         // document.querySelector('#userName').innerHTML = `My name is ${json?.name}`
  //       })
  //       .catch((reject) => console.log(reject));
  // })();

  // const showWeatherData = (data) => {
  // 	removeOldData();
  // }

  return (
    <>
      <nav className="nav-bar">
        <h1>Weather App</h1>
      </nav>
      <div className="body_padding_div">
        <form className="formm" onSubmit={getWeatherData}>
          <input
            type="text"
            id="city"
            onChange={(event) => setCity(event.target.value)}
            placeholder="Enter your city name"
          />
          <button type="submit">Get Weather</button>
        </form>
        <div className="main_container">
          <div>
            <img src="" alt="" id="weather_icon" />
          </div>
          <div id="tempC"></div>
        </div>
        <div className="flex">
          <div id="city_name"></div>
          <div id="weather_condition"></div>
        </div>

        <div className="details">
          <div className="left">
            <div id="tempF"></div>
            <br />
            <div id="feels_like"></div>
            <br />
            <div id="humidity"></div>
            <br />
          </div>
          <div className="right">
            <div id="cloud"></div>
            <div id="temp_f"></div>
            <div id="wind"></div>
            <div id="visibility"></div>
            <br />
            <div id="wind_speed"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
