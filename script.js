document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginButton");
    const registerButton = document.getElementById("registerButton");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const closeLogin = document.getElementById("closeLogin");
    const closeRegister = document.getElementById("closeRegister");

    loginButton.addEventListener("click", () => {
        loginForm.classList.remove("hidden");
    });

    registerButton.addEventListener("click", () => {
        registerForm.classList.remove("hidden");
    });

    closeLogin.addEventListener("click", () => {
        loginForm.classList.add("hidden");
    });

    closeRegister.addEventListener("click", () => {
        registerForm.classList.add("hidden");
    });
});
