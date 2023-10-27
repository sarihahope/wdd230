let text = document.lastModified;
document.getElementById("lastmodified").innerHTML = text;

document.getElementById("year").innerHTML = new Date().getFullYear();

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
