document.getElementById("signinForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorElement = document.getElementById("error");

    if (email === "" || password === "") {
        errorElement.textContent = "Please fill in all fields.";
    } else {
        window.location.href='index.html'
        alert("Sign in successful!");
        // You can add additional code here to handle the sign-in process
    }
});