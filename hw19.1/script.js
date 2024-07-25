const apiKey = "ff7a818df3a9ab63a4dc6a718ff3a6f9";
const city = "kyiv";

async function fetchWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  const data = await response.json();

  return data;
}

function updateWeatherInfo(data) {
  const weatherInfo = document.getElementById("weather-info");
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

  weatherInfo.innerHTML = `
  <p>Temperature: ${temperature}°C</p> 
   <p>Description: ${description}</p>
   <p>Humidity: ${humidity}%</p>
   <p>Wind Speed: ${windSpeed} m/s</p>
`;
}
async function refreshWeather() {
  const data = await fetchWeather();
  updateWeatherInfo(data);
}

document.getElementById("refresh-btn").addEventListener("click", refreshWeather);

refreshWeather();

