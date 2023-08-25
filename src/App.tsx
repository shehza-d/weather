import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WeatherApp from "./pages/WeatherPage";

export default function App() {
  return (
    <div className="grid min-h-screen App grid-rows-[auto,1fr,auto]">
      <Navbar />

      <WeatherApp />

      <Footer />
    </div>
  );
}
