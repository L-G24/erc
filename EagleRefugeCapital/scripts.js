document.addEventListener("DOMContentLoaded", function() {
    // Mock database (Don't use in real applications)
    const mockDB = {};

    const loginButton = document.getElementById("loginButton");
    const registerButton = document.getElementById("registerButton");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const closeLogin = document.getElementById("closeLogin");
    const closeRegister = document.getElementById("closeRegister");
    const employeeArea = document.getElementById("employeeArea");

    loginButton.addEventListener("click", () => loginForm.classList.remove("hidden"));
    registerButton.addEventListener("click", () => registerForm.classList.remove("hidden"));
    closeLogin.addEventListener("click", () => loginForm.classList.add("hidden"));
    closeRegister.addEventListener("click", () => registerForm.classList.add("hidden"));

    document.getElementById("login").addEventListener("submit", function(e) {
        e.preventDefault();
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        if (mockDB[username] && mockDB[username].password === password) {
            loginForm.classList.add("hidden");
            employeeArea.classList.remove("hidden");
        } else {
            alert("Invalid credentials");
        }
    });

    document.getElementById("register").addEventListener("submit", function(e) {
        e.preventDefault();
        const firstName = document.getElementById("registerFirstName").value;
        const lastName = document.getElementById("registerLastName").value;
        const username = document.getElementById("registerUsername").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;

        mockDB[username] = {
            firstName,
            lastName,
            email,
            password
        };

        alert("Successfully registered");
        registerForm.classList.add("hidden");
    });
});
