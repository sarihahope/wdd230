const baseURL = "https://sarihahope.github.io/wdd230/";
const linksURL = "https://sarihahope.github.io/wdd230/data/links.json";
const links = document.getElementById("links");


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data.lessons);
  }
  



  const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        console.log(week);
        let weekLinks = document.createElement("li");
        let sentence = `Week ${week.lesson}: `;
        week.links.forEach((link, index) => {

            if (index + 1 == week.links.length) {
                sentence += `<a href=${link.url}>${link.title}</a>`;
            }
        });
        weekLinks.innerHTML = sentence
        links.appendChild(weekLinks);
    });
}
getLinks();