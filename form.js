
function submitForm() {
 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

   
    if (email.trim() === '' || password.trim() === '') {
     
        alert('Please fill in all fields');
    } else {
       
        alert('Form submitted successfully!');
        window.location.href = 'home.html';
    }
}

// Get the form element
const entryForm = document.getElementById('entryForm');

entryForm.addEventListener('submit', function(event) {

    event.preventDefault();

    submitForm();
});
