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

];

// document.addEventListener('DOMContentLoaded', () => {
//     const navToggle = document.getElementById('nav-toggle');
//     const sideNav = document.querySelector('.side-nav');
//     const locationsBody = document.getElementById('locations-body');

  
//     navToggle.addEventListener('click', () => {
//       sideNav.classList.toggle('open');
//     });
  
  

//     // for dashboard page
//     // Example data
//     const stats = {
//       totalBookings: 120,
//       pendingBookings: 5,
//       activeLocations: 15,
//       allUsers: 500,
//     };
  
//     // Populate stats
//     document.getElementById('total-bookings').innerText = stats.totalBookings;
//     document.getElementById('pending-bookings').innerText = stats.pendingBookings;
//     document.getElementById('active-locations').innerText = stats.activeLocations;
//     document.getElementById('all-users').innerText = stats.allUsers;





//     // for manage location page
//     storageLocations.forEach(location => {
//       const row = document.createElement('tr');
  
//       row.innerHTML = `
//         <td>${location.name}</td>
//         <td>${location.streets}</td>
//         <td>${location.price}</td>
//         <td>${location.location}</td>
//         <td>${location.openUntil}</td>
//         <td>${location.status}</td>
//         <td><button>Delete</button></td>
//       `;
  
//       locationsBody.appendChild(row);
//     });

//   });
  

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const sideNav = document.querySelector('.side-nav');
  const locationsBody = document.getElementById('locations-body');

  navToggle.addEventListener('click', () => {
    sideNav.classList.toggle('open');
  });

  // Check if the page is the dashboard page
  if (document.getElementById('dashboard-stats')) {
    // Example data for dashboard page
    const stats = {
      totalBookings: 120,
      pendingBookings: 5,
      activeLocations: 15,
      allUsers: 500,
    };

    // Populate stats for dashboard page
    document.getElementById('total-bookings').innerText = stats.totalBookings;
    document.getElementById('pending-bookings').innerText = stats.pendingBookings;
    document.getElementById('active-locations').innerText = stats.activeLocations;
    document.getElementById('all-users').innerText = stats.allUsers;
  }

  // Check if the page is the manage locations page
  if (document.getElementById('manage-locations-page')) {
    const storageLocations = [
      {
        name: "Eastleigh Storage Solutions",
        streets: "1st Avenue",
        location: "Eastleigh",
        price: "Ksh. 120/hr",
        openUntil: "10pm",
        status: "Available" // Add status property
      },
      {
        name: "Kasarani Luggage Safekeeping",
        streets: "Thika Road",
        location: "Kasarani",
        price: "Ksh. 90/hr",
        openUntil: "8pm",
        status: "Unavailable" // Add status property
      }
      // Add more storage locations as needed
    ];

    // Populate storage locations for manage locations page
    storageLocations.forEach(location => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${location.name}</td>
        <td>${location.location}</td>
        <td>${location.streets}</td>
        <td>${location.price}</td>
        <td>${location.openUntil}</td>
        <td>${location.status}</td>
        <td><button>Delete</button></td>
      `;

      locationsBody.appendChild(row);
    });
  }
});
