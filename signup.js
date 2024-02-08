document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');
    const errorMessage = document.getElementById('errorMessage');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = signupForm.username.value;
        const password = signupForm.password.value;
        // Simulate signup (replace with actual signup logic)
        // Here we'll just log the entered username and password
        console.log('Username:', username);
        console.log('Password:', password);
        // Redirect to login page after signup
        window.location.href = 'index.html';
    });
});
