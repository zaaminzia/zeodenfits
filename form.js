// Function to handle form submission and redirection
function submitForm() {
    // You can add validation or AJAX submission logic here
    // For simplicity, let's just display an alert for now
    alert('Form submitted!');

    // Redirect to the main website
    window.location.href = "home.html"; // Replace with your main website URL
}

// Get the form element
const entryForm = document.getElementById('entryForm');

// Add an event listener for form submission
entryForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Call the submitForm function to handle the form submission
    submitForm();
})