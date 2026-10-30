
// Finding element by ID
var title = document.getElementById("home");

// Finding elements by tag name
var headings = document.getElementsByTagName("h3");

// Finding elements by class name
var cars = document.getElementsByClassName("car");

// Finding elements by CSS selector
var buttons = document.querySelectorAll(".rent");

// Store selected car
var selectedCar = "";

// Rent Now button click event
buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        var car = this.closest(".car");

        selectedCar = car.querySelector("h3").innerText;

        document.getElementById("message").innerHTML =
            "✓ You selected " + selectedCar + "!";

    });

});

// Book Selected Car button event
document.getElementById("book").addEventListener("click", function() {

    if (selectedCar === "") {

        document.getElementById("message").innerHTML =
            "Please select a car first!";

        document.getElementById("message").style.color = "red";

    } else {

        document.getElementById("message").innerHTML =
            "✓ Your booking request for " + selectedCar +
            " has been received!";

        document.getElementById("message").style.color = "green";

    }

});
