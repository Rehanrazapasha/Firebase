document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorElement = document.getElementById("error");

    if (password !== confirmPassword) {
        errorElement.textContent = "Passwords do not match.";
    } else {
        errorElement.textContent = "";
        alert("Sign up successful!");
        // You can add additional code here to handle the sign-up process
    }
});