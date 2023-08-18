// File: index.js

/*
Home Section Interaction
-
@ Search box toggle
@ Animation on Scroll
-
*/

///////////////////////////////////

let searchButton = document.querySelector(".__search-btn");
let searchBox = document.createElement("div");

searchBox.classList.add("__search-page");
searchBox.innerHTML = `<div class="modal fade" id="searchPage" tabindex="-1"><div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Search</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
         <div class="modal-body" id="algolia-search-box" >
            <div class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            </div>
            <div class="search-results"></div>
        </div>
    </div>
</div></div>
`;
document.body.appendChild(searchBox);

const algoliaSearchConnect = algoliasearch(
 "8Z5XBTCS67",
 "d7542c85dae057fc2a49cbde256ba39b"
);

let algoliaSearchIndex = algoliaSearchConnect.initIndex("search_contents");
let algoliaSearchInput = document.querySelectorAll(
 "#algolia-search-box input"
)[0];
let algoliaSearchResults = document.querySelectorAll(
 "#algolia-search-box .search-results"
)[0];

algoliaSearchInput.addEventListener("keyup", function () {
 if (algoliaSearchInput.value.length > 0) {
  algoliaSearchIndex.search(algoliaSearchInput.value).then(({ hits }) => {
   let searchResults = hits.map(
    (hit) => `<a href="${
     typeof hit.url === "undefined" ? "#" : hit.url
    }" class="search-result">
                 <div class="search-result-title">${hit.title}</div>
                 <div class="search-result-content">${hit.description}</div>
    </a>`
   );
   algoliaSearchResults.innerHTML = searchResults.join("");
  });
 }
});

///////////////////////////////////

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
let scrollArea = 1000 - windowHeight;
let square1 = document.querySelectorAll(".vector1")[0];
let square2 = document.querySelectorAll(".vector2")[0];
let square3 = document.querySelectorAll(".right-dots")[0];
let square4 = document.querySelectorAll(".__hero-section img")[0];
let square5 = document.querySelectorAll(".__hero-section")[0];

window.addEventListener("scroll", function () {
 let scrollTop = window.pageYOffset || window.scrollTop;
 let scrollPercent = scrollTop / scrollArea || 0;

 square1.style.right = 80 + scrollPercent * 50 + "px";
 square2.style.right = scrollPercent * 50 * 0.6 + "px";
 square3.style.right = 125 + scrollPercent * 20 * 0.2 + "px";
 square4.style.padding =
  scrollPercent * 1 <= 10 ? scrollPercent * 1 + "rem" : 0;
 square5.style.backgroundPosition = "0 " + scrollPercent * 6 + "px";
});

//////////////////////////////////

/*
Footer Section Interaction
-
@ Copyright Year Update
-
*/

//////////////////////////////////

let cpY = document.getElementById("copyrightYear");
cpY.innerHTML = new Date().getFullYear();

//////////////////////////////////
