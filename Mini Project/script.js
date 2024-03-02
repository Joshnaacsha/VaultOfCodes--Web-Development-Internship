function submitForm(event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const terms = document.getElementById('terms');

    // Simple validation
    if (!firstName || !lastName || !email || !password || !confirmPassword || !dob || !gender || !terms.checked) {
        document.getElementById('error-message').innerText = 'Please fill in all required fields and accept the Terms and Conditions.';
        return;
    }

    // Password matching validation
    if (password !== confirmPassword) {
        document.getElementById('error-message').innerText = 'Passwords do not match. Please check and try again.';
        return;
    }

    // Clear error message
    document.getElementById('error-message').innerText = '';

    // Add your form submission logic here
    // You can send the form data to the server or perform other actions

    alert('Form submitted successfully!');
}
