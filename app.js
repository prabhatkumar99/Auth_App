document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    // const logoutBtn = document.getElementById('logoutBtn');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;
        // Simulate authentication (replace with actual authentication logic)
        if (username === 'admin' && password === 'password') {
            sessionStorage.setItem('isLoggedIn', true);
            window.location.href = 'welcome.html';
        } else {
            errorMessage.textContent = 'Invalid username or password.';
        }
    });

    // logoutBtn.addEventListener('click', function () {
    //     // sessionStorage.removeItem('isLoggedIn');
    //     window.location.href = 'index.html';
    // });
});
