import { useState } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) {
      setError("Please enter a city name!");
      setWeather(null);
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      let apiKey = "9e4c41b19b18453990d120724251208";
      let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

      let res = await fetch(url);
      let data = await res.json();

      if (data.error) {
        setError(data.error.message);
      } else {
        setWeather(data);

        let condition = data.current.condition.text.toLowerCase();
        if (condition.includes("cloud")) {
          document.body.style.background = "#d3d3d3";
        } else if (condition.includes("rain")) {
          document.body.style.background = "#a4b0be";
        } else {
          document.body.style.background = "#ffeaa7";
        }
      }
    } catch (err) {
      setError("Error fetching weather!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "8px", borderRadius: "5px", marginRight: "10px" }}
      />
      <button onClick={getWeather} style={{ padding: "8px 12px" }}>
        Get Weather
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "white",
            borderRadius: "10px",
            display: "inline-block",
          }}
        >
          <h2>
            {weather.location.name}, {weather.location.country}
          </h2>
          <p>
            {weather.current.temp_c}°C, {weather.current.condition.text}
          </p>
          <img src={`https:${weather.current.condition.icon}`} alt="weather" />
        </div>
      )}
    </div>
  );
}
