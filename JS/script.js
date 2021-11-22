// Responsive Function for the Navigation Bar
function RNavBar() {
  var x = document.getElementById("TopNavBar");
  if (x.className === "NavBar") {
    x.className += " responsive";
  } else {
    x.className = "NavBar";
  }
}