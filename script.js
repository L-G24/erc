const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginContainer = document.getElementById('login-container');
const registerContainer = document.getElementById('register-container');
const toggleRegisterButton = document.getElementById('toggle-register');

toggleRegisterButton.addEventListener('click', () => {
    registerContainer.classList.toggle('hidden');
    loginContainer.classList.add('hidden');
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
