import { useState, useEffect } from "react";
import axios from "axios";
import InputForm from "../components/InputForm";
import WeatherCard from "../components/WeatherCard";
import { WeatherResObject, DataList } from "../../types";
import toast from "react-hot-toast";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState<DataList[] | null>(null);

  const URL = `https://api.openweathermap.org/data/2.5`;
  const API_KEY = "49cc8c821cd2aff9af04c9f98c36eb74";

  useEffect(() => {
    //Runs only on the first render
    (async () => {
      try {
        //getting user current location and calling api
        navigator.geolocation.getCurrentPosition(async (success) => {
          const { latitude, longitude } = success.coords;

          const { data } = await axios.get<WeatherResObject>(
            `${URL}/forecast?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`,
          );

          console.log("data on first load ", data);

          setWeatherData([{ ...data.list[1], city: data.city.name }]);
        });
      } catch (err: any) {
        console.log("🚀 ~ file: WeatherPage.tsx:27 ~ err:", err);
        toast.error(err?.response?.data?.message || "Something went wrong");
      }
    })();
  }, []);

  const textCenter = "flex justify-center items-center h-5/6";
  return (
    <main className="mx-auto w-full">
      <InputForm setWeatherData={setWeatherData} URL={URL} API_KEY={API_KEY} />

      {weatherData === null && <div className={textCenter}>Loading...</div>}

      {!weatherData?.length && weatherData !== null && (
        <div className={textCenter}>Failed to get weather data 🙁</div>
      )}

      {weatherData?.length && (
        <div className="main_container grid grid-cols-1 lg:grid-cols-2 gap-8 m-10">
          {weatherData?.map((item, i) => <WeatherCard key={i} data={item} />)}
        </div>
      )}
    </main>
  );
}
