// Write your code in this file!
const currentUser = "Bethuel";

// Using backticks to represent strings an using string interpolation.
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Converting the currentUser name to upperCase so as to reference it.
const upperCaseCurrentUser = currentUser.toUpperCase();

const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${upperCaseCurrentUser}!`;

// Another variable
const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);
const shortGreeting = `Welcome, ${firstInitial}!`;
