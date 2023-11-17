const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url ='https://api.openweathermap.org/data/2.5/weather?lat=39.36&lon=-121.69&appid=890f6f431f217964f5bf6bdd5263d9eb&units=imperial';


async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); 
    //   displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();


function displayResults(data) {
  currentTemp.innerHTML = `${data.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${icon}.png`;
  let desc = data.weather[0].icon;
  weatherIcon.setAttribute('___', _____);
  weatherIcon.setAttribute('___', _____);
  captionDesc.textContent = `${desc}`;
}
