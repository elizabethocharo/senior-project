// Array of storage details
const storageLocations = [
  {
    name: "Eastleigh Storage Solutions",
    streets: "1st Avenue",
    location: "Eastleigh",
    price: "Ksh. 120/hr",
    openUntil: "10pm",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.23721223003!2d35.077344000000004!3d0.2522562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17805d7626cb9743%3A0xc93043887737d9b7!2sUniversity%20Of%20Eastern%20Africa%20-%20Baraton%20(Main%20Campus)!5e0!3m2!1sen!2ske!4v1717399353792!5m2!1sen!2ske"
  },
  {
    name: "Kasarani Luggage Safekeeping",
    streets: "Thika Road",
    location: "Kasarani",
    price: "Ksh. 90/hr",
    openUntil: "8pm",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.23721223003!2d35.077344000000004!3d0.2522562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17805d7626cb9743%3A0xc93043887737d9b7!2sUniversity%20Of%20Eastern%20Africa%20-%20Baraton%20(Main%20Campus)!5e0!3m2!1sen!2ske!4v1717399353792!5m2!1sen!2ske"
  },
  {
    name: "Westlands Baggage Vault",
    streets: "Waiyaki Way",
    location: "Westlands",
    price: "Ksh. 150/hr",
    openUntil: "11pm",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.23721223003!2d35.077344000000004!3d0.2522562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17805d7626cb9743%3A0xc93043887737d9b7!2sUniversity%20Of%20Eastern%20Africa%20-%20Baraton%20(Main%20Campus)!5e0!3m2!1sen!2ske!4v1717399353792!5m2!1sen!2ske"
  },
  {
    name: "Ngara Storage Hub",
    streets: "Murang'a Road",
    location: "Ngara",
    price: "Ksh. 100/hr",
    openUntil: "9pm",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.23721223003!2d35.077344000000004!3d0.2522562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17805d7626cb9743%3A0xc93043887737d9b7!2sUniversity%20Of%20Eastern%20Africa%20-%20Baraton%20(Main%20Campus)!5e0!3m2!1sen!2ske!4v1717399353792!5m2!1sen!2ske"
  },
  {
    name: "Kilimani Luggage Locker",
    streets: "Kodhek Road",
    location: "Kilimani",
    price: "Ksh. 130/hr",
    openUntil: "10pm",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.23721223003!2d35.077344000000004!3d0.2522562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17805d7626cb9743%3A0xc93043887737d9b7!2sUniversity%20Of%20Eastern%20Africa%20-%20Baraton%20(Main%20Campus)!5e0!3m2!1sen!2ske!4v1717399353792!5m2!1sen!2ske"
  },
  {
    name: "Lavington Bag Storage",
    streets: "James Gichuru Road",
    location: "Lavington",
    price: "Ksh. 140/hr",
    openUntil: "11pm",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.23721223003!2d35.077344000000004!3d0.2522562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17805d7626cb9743%3A0xc93043887737d9b7!2sUniversity%20Of%20Eastern%20Africa%20-%20Baraton%20(Main%20Campus)!5e0!3m2!1sen!2ske!4v1717399353792!5m2!1sen!2ske"
  },
  {
    name: "Parklands Luggage Haven",
    streets: "Limuru Road",
    location: "Parklands",
    price: "Ksh. 110/hr",
    openUntil: "9pm",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.23721223003!2d35.077344000000004!3d0.2522562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17805d7626cb9743%3A0xc93043887737d9b7!2sUniversity%20Of%20Eastern%20Africa%20-%20Baraton%20(Main%20Campus)!5e0!3m2!1sen!2ske!4v1717399353792!5m2!1sen!2ske"
  }
];

function generateLocationOptions() {
  const selectElement = document.getElementById("locationSelect");

  // Create a Set to store unique locations
  const uniqueLocations = new Set();

  // Iterate over the storageLocations array and extract unique locations
  storageLocations.forEach(location => {
    uniqueLocations.add(location.location);
  });

  // Generate <option> elements for each unique location
  uniqueLocations.forEach(location => {
    const optionElement = document.createElement("option");
    optionElement.value = location;
    optionElement.textContent = location;
    selectElement.appendChild(optionElement);
  });
}

// Function to generate location cards dynamically
function generateLocationCards() {
  const container = document.getElementById("locationContainer");

  storageLocations.forEach(location => {
      const card = `
          <div class="location-card">
              <iframe src="${location.mapUrl}" height="120" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <div class="location-details">
                  <h2>${location.name}</h2>
                  <p class="address">
                      <span><b>Streets:</b> ${location.streets}</span>
                      <span>${location.price}</span>
                  </p>
                  <span style="font-size: 0.8rem; color: gray;">Price may vary depending on the laggage type</span>
                  <p style="color: green;"><b>Open</b> upto ${location.openUntil}</p>
                  <button><a href="/book-space/book.html" style="text-decoration: none; color: white;">Book Now</a></button>
              </div>
          </div>
      `;

      container.innerHTML += card;
  });
}

// Call the function to generate location cards
generateLocationOptions();
generateLocationCards();