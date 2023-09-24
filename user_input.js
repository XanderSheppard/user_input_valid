// Function to validate inputs
function validateInputs() {
    // Get user inputs
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const zipCode = document.getElementById('zipCode').value;
    const fullName = firstName + ' ' + lastName;

    // Check if full name has more than 20 characters
    if (fullName.length > 20) {
        alert('Full name must be 20 characters or less.');
        return;
    }

    // Check if zip code has exactly 5 digits
    if (!/^\d{5}$/.test(zipCode)) {
        alert('Zip code must contain exactly 5 digits.');
        return;
    }

    // If inputs are valid, display the secret message
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = 'Secret Message: Greeting Fellow Hacker, It seem you was able to access the forbbiden code, congrets!';
    messageDiv.style.display = 'block';
}

// Attach the validateInputs function to the submit button's click event
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', validateInputs);
