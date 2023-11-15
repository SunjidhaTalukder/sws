//overlay
const checkbox = document.getElementById("check");
const overlay = document.querySelector(".overlay");

checkbox.addEventListener("change", function () {
    if (this.checked) {
        document.body.style.overflow = "hidden"; // Disable scrolling
        overlay.style.display = "block"; // Show the overlay
    } else {
        document.body.style.overflow = ""; // Enable scrolling
        overlay.style.display = "none"; // Hide the overlay
    }
});
//end