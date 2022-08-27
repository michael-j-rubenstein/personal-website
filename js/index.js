
var image = document.getElementsByClassName("head-picture");

window.addEventListener("scroll", function() {
    image.style.transform = "rotate("+window.pageYOffset/2+"deg)";
    image.style.width = "10px";
});