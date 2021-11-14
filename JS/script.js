
function myFunction() {
 var x = document.getElementById("TopNavBar");
 if (x.className === "NavBar") {
   x.className += " responsive";
 } else {
   x.className = "NavBar";
 }
}
