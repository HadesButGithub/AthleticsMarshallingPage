// Array of users and their randomly selected sports with specific types
const users = [
    { username: 'James', selectedSport: getRandomSport('Sprint') },
    { username: 'Kevin', selectedSport: getRandomSport('Hurdles') },
    { username: 'Dale', selectedSport: getRandomSport('High Jump') },
    { username: 'Mark', selectedSport: getRandomSport('Long Jump') },
    { username: 'Willow', selectedSport: getRandomSport('Sprint') },
    { username: 'Window', selectedSport: getRandomSport('Hurdles') },
    { username: 'Peter', selectedSport: getRandomSport('High Jump') },
    { username: 'Dominic', selectedSport: getRandomSport('Long Jump') },
    { username: 'William', selectedSport: getRandomSport('Sprint') }
  ];
  
  // Function to get a random sport with a specific type from the available sports list
  function getRandomSport(sportType) {
    const sportsOptions = {
      Sprint: ['60 Meters', '100 Meters', '200 Meters', 'Baton 200 Meters'],
      Hurdles: ['110 meters hurdles', '400 meters hurdles', '60 meters hurdles (indoor)', '300 meters hurdles'],
      'Long Jump': ['Junior Long Jump', 'Masters Long Jump', 'Triple Jump', 'Standing'],
      'High Jump': ['Scissors Jump (or Straight Jump)', 'Straddle Jump', 'Rolls', 'Reverse Fosbury Flop']
    };
  
    const randomIndex = Math.floor(Math.random() * sportsOptions[sportType].length);
    return sportsOptions[sportType][randomIndex];
  }
  
  function displaySelectedUserSports(selectedUser) { //
    const userSection = document.getElementById('userSection');
    if (userSection) {
      userSection.innerHTML = ''; // Clear the existing content
  
      // Create the subsection for the selected user
      const userSubSection = document.createElement('div'); 
      userSubSection.classList.add('user-subsection'); // Add a class to the subsection
      userSubSection.innerHTML = `
        <h2>${selectedUser}'s Sport</h2> // Add the user's name to the subsection
        <ul class="sports-list">
          <li>${users.find((u) => u.username === selectedUser).selectedSport}</li> // Add the user's selected sport to the subsection
        </ul>
      `;
  
      userSection.appendChild(userSubSection);
    }
  }
  
  function showUserSection() {
    const ageBracketSelect = document.getElementById('ageBracket'); // Get the age bracket select element
    const selectedUser = ageBracketSelect.value;
  
    const userSection = document.getElementById('userSection'); // Get the user section element
    if (userSection) {
      if (selectedUser !== 'default') {
        userSection.style.display = 'block';
        displaySelectedUserSports(selectedUser);
      } else {
        userSection.style.display = 'none';
      }
    }
  }
  
  window.addEventListener('load', () => { // Add an event listener to the window object
    const ageBracketSelect = document.getElementById('ageBracket');
    if (ageBracketSelect) {
      ageBracketSelect.addEventListener('change', showUserSection);
    }
  });
  