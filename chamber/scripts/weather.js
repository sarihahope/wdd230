const weather = document.getElementById("weather");
const iconElement = document.getElementById("icon");
const getWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=39.36403079475423&lon=-121.69355751441586&appid=4f137aefdc89806f5d1b6fb164a2f118&units=imperial`);
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
