const loginForm = document.getElementById('login-form');
const registerContainer = document.getElementById('register-container');
const toggleRegisterButton = document.getElementById('toggle-register');

toggleRegisterButton.addEventListener('click', () => {
    registerContainer.classList.toggle('hidden');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    // Here you can add logic to validate the credentials or simulate a login.
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    // Here you can add logic to handle user registration (e.g., storing in an array).
});
