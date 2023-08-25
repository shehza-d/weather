import { DataList } from "../../types";

export default function WeatherCard({ data }: { data: DataList }) {
  return (
    <div className="border text-white textShadow border-gray-500/40 shadow-2xl drop-shadow-sm backdrop-blur-sm hover:backdrop-blur-0 transition-all duration- rounded-xl">
      <div className="flex justify-center items-center">
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt=""
          className="weather_icon"
        />
        <div className="tempC text-5xl">{data.main.temp}°C</div>
      </div>
      <div className="flex text-xl capitalize justify-center items-center gap-4">
        <div className="city_name">{data.city}</div>
        <div className="weather_condition">{data.weather[0].description}</div>
      </div>
      <div className="details p-4 flex justify-around">
        <div className="left">
          {/* <div className="temp_f">{data.main.temp}°F</div> */}
          <div className="feels_like">Feels like {data.main.feels_like}°C</div>
          <div className="temp_max">Temp Max {data.main.temp_max}°C</div>
          <div className="temp_min">Temp Min {data.main.temp_min}°C</div>
          <div className="humidity">Humidity {data.main.humidity}%</div>
          <div className="cloud">Cloud {data.clouds.all}%</div>
        </div>
        <div className="right">
          <div className="pressure">Pressure {data.main.pressure} hPa</div>
          <div className="wind_speed">Wind Speed {data.wind.speed} m/s</div>
          <div className="wind_deg">Wind Deg {data.wind.deg}°</div>
          <div className="wind_gust">Wind Gust {data.wind.gust} m/s</div>
          <div className="visibility">Visibility {data.visibility}</div>
        </div>
      </div>
    </div>
  );
}
