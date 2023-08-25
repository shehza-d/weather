import axios from "axios";
import { useRef } from "react";
import { DataList, WeatherResObject } from "../../types";
import type { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

export default function InputForm({
  setWeatherData,
  URL,
  API_KEY,
}: {
  setWeatherData: Dispatch<SetStateAction<DataList[] | null>>;
  URL: string;
  API_KEY: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const getWeatherData = async (event: any) => {
    event.preventDefault();
    const city = inputRef?.current?.value;
    console.log(city);

    try {
      const { data } = await axios.get<WeatherResObject>(
        `${URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`,
      );
      console.log("🚀 ~ file: InputForm.tsx:24 ~ getWeatherData ~ data:", data);

      if (inputRef.current) inputRef.current.value = "";

      setWeatherData((prev) => {
        if (prev === null) return [{ ...data.list[1], city: data.city.name }];
        else return [{ ...data.list[1], city: data.city.name }, ...prev];
      });
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong");
      console.log("🚀 ~ file: weather.tsx:36 ~ getWeatherData ~ err:", err);
    }
  };

  return (
    <form
      className="mx-auto mt-6 h-fit flex justify-center"
      onSubmit={getWeatherData}
    >
      <input
        type="text"
        ref={inputRef}
        className="cityInput p-3 ml:w-96 w-72 rounded-full bg-[rgba(0,0,0,0.5)] text-white text-center text-2xl outline-none"
        placeholder="Enter your city name"
        min="0"
        max="100"
      />
      {/* <button type="submit">Get Weather</button> */}
    </form>
  );
}
