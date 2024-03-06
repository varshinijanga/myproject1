// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Get the registration form element
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Call the validateForm function when the form is submitted
        validateForm();
    });

    function validateForm () {
        // Get the values of password, confirm password, and mobile number fields
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const mobile = document.getElementById('mobile').value;

        if (password.length < 6 || password.length > 6) {
            alert("Password length should be 6 digits or characters.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Password do not match.");
            return;
        }

        // Regular expression for valid mobile number starting with 7, 8, or 9 and having 10 digits
        const mobileRegex = /^[789]\d{9}$/;
        if (!mobile.match(mobileRegex)) {
            alert("Invalid mobile number.");
            return;
        }

        alert("Registration successful.");
    }
});