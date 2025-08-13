async function getWeather() {
  let city = document.getElementById("city").value;
  let weatherDiv = document.getElementById("weather");
  let loading = document.getElementById("loading");

  if (!city) {
    weatherDiv.innerHTML = "Please enter a city name!";
    return;
  }

  loading.style.display = "block";
  weatherDiv.innerHTML = "";

  setTimeout(async () => {
    try {
      let apiKey = "9e4c41b19b18453990d120724251208";
      let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

      let res = await fetch(url);
      let data = await res.json();

      if (data.error) {
        weatherDiv.innerHTML = data.error.message;
      } else {
        let icon = "https:" + data.current.condition.icon;
        weatherDiv.innerHTML = `
          <h2>${data.location.name}, ${data.location.country}</h2>
          <p>${data.current.temp_c}°C, ${data.current.condition.text}</p>
          <img src="${icon}">
        `;

        let condition = data.current.condition.text.toLowerCase();
        if (condition.includes("cloud")) document.body.style.background = "#d3d3d3";
        else if (condition.includes("rain")) document.body.style.background = "#a4b0be";
        else document.body.style.background = "#ffeaa7";
      }
    } catch (err) {
      weatherDiv.innerHTML = "Error fetching weather!";
    } finally {
      loading.style.display = "none";
    }
  }, 500);
}
