const weather = document.getElementById("weather");
const iconElement = document.getElementById("icon");
const getWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=20.423528&lon=-86.915490&appid=16bb89e46b01201ff5a3c64ed669cf39&units=imperial`);
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

document.querySelector(".bannerButton").addEventListener("click", function() {
    this.closest(".bannercontainer").style.display = "none";
});
 
 
if (currentTemp >= 80 && today <= 85) {
    document.querySelector(".bannercontainer").style.display = "block";
} else {
    document.querySelector(".bannercontainer").style.display = "none";
}

