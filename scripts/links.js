const baseURL = "https://sarihahope.github.io/wdd230/";
const linksURL = "https://sarihahope.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    // displayLinks(data);
  }
  
  getLinks();


//   const displayLinks = (lessons) => {
//     lessons.forEach((lesson) => {

  

//     }); 
//   }