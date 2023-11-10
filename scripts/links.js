const baseURL = "https://sarihahope.github.io/wdd230/";
const linksURL = "https://sarihahope.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data);
  }
  
  getLinks();


const displayLinks = (weeks) => {
    weeks.forEach((link) => {

        let card = document.createElement('section');
        let week = document.createElement('url')
        let link = document.createElement('title')

        card.appendChild(week); //fill in the blank
        card.appendChild(url);
    
        card.appendChild(card);

    }); 
  }