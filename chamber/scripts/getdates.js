let text = document.lastModified;
document.getElementById("lastmodified").innerHTML = text;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});




const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});





const visits = document.getElementById("visitcount");

document.addEventListener("DOMContentLoaded", e => {
    const msToDays = 84600000;
    visits.innerHTML = "";
    if (!localStorage.getItem("visit")) {
        visits.innerHTML = "Welcome! Let us know if you have any questions.";
        localStorage.setItem("visit", Date.now());
    }
    else {
        let lastVisit = localStorage.getItem("visit");
        let currentVisit = Date.now();

        if (currentVisit - Number.parseInt(lastVisit) < msToDays) {
            visits.innerHTML = "Back so soon! Awesome!";
            localStorage.setItem("visit", currentVisit);
        }
        else {
            let days = (currentVisit - lastVisit) / msToDays;
            if (days == 1) {
                visits.innerHTML = `You last visited 1 day ago`;
            }
            else {
                visits.innerHTML = `You last visited ${days} days ago`;
            }
        }
    }
});