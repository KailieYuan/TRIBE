
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var email = document.getElementById("uLogin").value;
    var password = document.getElementById("uPassword").value;
    if (email == "admin" && password == "admin") {
        window.location = "home.html"; // Redirecting to other page.
        return false;
    } else {
        attempt--; // Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("uLogin").disabled = true;
            document.getElementById("uPassword").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}