const url = "https://sarihahope.github.io/wdd230/finalproject/data/rentals.json";
  const cards = document.querySelector('#cards');

  const getMemberData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      //console.table(data);
      displayMembers(data.members);
  }

  const displayMembers = (members) => {
    members.forEach((member) => {
      let card = document.createElement('section');
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
