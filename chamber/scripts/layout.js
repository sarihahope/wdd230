
  const url = "https://sarihahope.github.io/wdd230/chamber/data/members.json";
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
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '50');
      portrait.setAttribute('height', '50');

      card.appendChild(name);
      card.appendChild(addresses);
      card.appendChild(phonenumber);
	    card.appendChild(phonenumber);
	    card.appendChild(websiteurl);
	    card.appendChild(membershiplevel);
      card.appendChild(portrait);

    });
  };
  getMemberData();

