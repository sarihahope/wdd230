const url = "https://sarihahope.github.io/wdd230/finalproject/data/rentals.json";
  const cards = document.querySelector('#rentalinfo');

  const getRentalData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      // console.table(data);
      displayRentals(data.rentals);
  }

  const displayRentals = (rentals) => {
    rentals.forEach((rental) => {
      let card = document.createElement('section');
      let name = document.createElement('h2'); 
      let resevation = document.createElement('h4');
      let halfday = document.createElement('p');
      let fullday = document.createElement('p');
      let walkin = document.createElement('h4');
      let halfdayw = document.createElement('p');
      let fulldayw = document.createElement('p');
      let icon = document.createElement('img');

      icon.setAttribute('src', rental.iconimage);
      icon.setAttribute('loading', 'lazy');
      icon.setAttribute('width', '100');
      icon.setAttribute('height', '100');

      name.textContent = `${rental.name}`; 
	    resevation.textContent = `${rental.resevation}`; 
	    halfday.textContent = `${rental.halfday}`; 
	    fullday.textContent = `${rental.fullday}`; 
      walkin.textContent = `${rental.walkin}`; 	
      fulldayw.textContent = `${rental.fulldayw}`; 
	    halfdayw.textContent = `${rental.halfdayw}`; 


      card.appendChild(name);
      card.appendChild(icon);
      card.appendChild(resevation);
	    card.appendChild(halfday);
	    card.appendChild(fullday);
	    card.appendChild(walkin);
      card.appendChild(halfdayw);
	    card.appendChild(fulldayw);
      cards.appendChild(card);


    });
  };
  getRentalData();
