document.addEventListener("DOMContentLoaded", function() {
    // Mock database (Don't use in real applications)
    const mockDB = {
        "employee1": "password1",
        "employee2": "password2"
    };

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

        if (mockDB[username] && mockDB[username] === password) {
            loginForm.classList.add("hidden");
            employeeArea.classList.remove("hidden");
        } else {
            alert("Invalid credentials");
        }
    });

    document.getElementById("register").addEventListener("submit", function(e) {
        e.preventDefault();
        const username = document.getElementById("registerUsername").value;
        const password = document.getElementById("registerPassword").value;

        mockDB[username] = password;
        alert("Successfully registered");
        registerForm.classList.add("hidden");
    });
});
