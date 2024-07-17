// Creating a function that returns a promise
function fetchUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userData = {
          username: 'Hishmat',
          email: 'hishmatdrawarh786@gmail.com',
          isAdmin: false
        };
        resolve(userData); // Resolve the promise with the data
        // In a real scenario, there might be error handling with reject() if something goes wrong
      }, 1000); // Simulating a delay of 1 second
    });
  }
  
  // Using the promise
  fetchUserData()
    .then((userData) => {
      console.log('User data:', userData);
      // Further processing with the fetched user data
    })
    .catch((error) => {
      console.error('Error fetching user data:', error);
      // Handle errors if the promise is rejected
    });
  