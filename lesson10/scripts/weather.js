const weather = document.getElementById("current-temp");
const iconElement = document.getElementById("weather-icon");
const getWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=49.749378325296895&lon=6.631593131401881&appid=890f6f431f217964f5bf6bdd5263d9eb&units=imperial`);
    const data = await response.json();
    console.log(data);
    displayWeather(data);
}
const displayWeather = (data) => {
    let currentWeatherDescription = data.weather[0].description;
    let currentTemp = data.main.temp;
    let icon = data.weather[0].icon;
    let formatCorrect = currentWeatherDescription[0].toUpperCase() + currentWeatherDescription.slice(1);
    iconElement.setAttribute("src", `https://openweathermap.org/img/w/${icon}.png`);
    weather.innerHTML = "";
    weather.textContent = `${currentTemp} - ${formatCorrect}`;
}
getWeather();




