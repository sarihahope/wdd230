const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

const baseURL = "https://sarihahope.github.io/wdd230/";
const linksURL = "https://sarihahope.github.io/wdd230/data/members.json";
const directory = document.querySelector('#directory');

const getMemberData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    // displayMembers(data.members);
}

const displayMembers = (members) => {
  members.forEach((member) => {
    let directory = document.createElement('section');
    let name = document.createElement('h2'); 
    let addresses = document.createElement('h3');
    let phonenumber = document.createElement('p');
    let websiteurl = document.createElement('p');
	let membershiplevel = document.createElement('p');
	let portrait = document.createElement('img');

    name.textContent = `${member.name}`; 
	addresses.textContent = `${member.addresses}`; 
	phonenumber.textContent = `${member.phonenumber}`; 
	websiteurl.textContent = `${member.websiteurl}`; 
	membershiplevel.textContent = `${member.membershiplevel}`; 	

    portrait.setAttribute('src', member.iconimage);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '50');
    portrait.setAttribute('height', '50');

    directory.appendChild(name);
    directory.appendChild(addresses);
    directory.appendChild(phonenumber);
	directory.appendChild(phonenumber);
	directory.appendChild(websiteurl);
	directory.appendChild(membershiplevel);
    directory.appendChild(portrait);
    directory.appendChild(directory);

  });
};

getMemberData();
