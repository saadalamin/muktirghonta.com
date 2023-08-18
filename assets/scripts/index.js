// File: index.js

/*
Hero Section Interaction
-
- Animation on Scroll
@ Elements: [5]
@ ScrollTop: The distance between the top of the element and the top of the viewport in pixel.
@ ScrollPercent: The distance between the top of the element and the top of the viewport in percentage.
-
-
*/
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 - windowHeight;
var square1 = document.querySelectorAll(".vector1")[0];
var square2 = document.querySelectorAll(".vector2")[0];
var square3 = document.querySelectorAll(".right-dots")[0];
var square4 = document.querySelectorAll(".__hero-section img")[0];
var square5 = document.querySelectorAll(".__hero-section")[0];

window.addEventListener("scroll", function () {
 var scrollTop = window.pageYOffset || window.scrollTop;
 var scrollPercent = scrollTop / scrollArea || 0;

 square1.style.right = 80 + scrollPercent * 50 + "px";
 square2.style.right = scrollPercent * 50 * 0.6 + "px";
 square3.style.right = 125 + scrollPercent * 20 * 0.2 + "px";
 square4.style.padding =
  scrollPercent * 1 <= 10 ? scrollPercent * 1 + "rem" : 0;
 square5.style.backgroundPosition = "0 " + scrollPercent * 6 + "px";
});

/*
Footer Section Interaction
-
- Copyright Year Update
@ Elements: [1]
-
-
*/
var cpY = document.getElementById("copyrightYear");
cpY.innerHTML = new Date().getFullYear();