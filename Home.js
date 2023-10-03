
let loader = document.querySelector("#loader");
 
window.addEventListener("load", ()=> {
    loader.style.visibility = "hidden"
})

let searchIcon = document.querySelector(".search");
let searchBox = document.querySelector(".searchBox");
let header = document.querySelector(".main-items");
let menu = document.querySelector("#bar");
let accountBox = document.querySelector(".account-box");
let accountBtn = document.querySelector("#account-btn");
let removeAccountBox = document.querySelector("#remove-ac-box");

searchIcon.onclick = function() {
   searchBox.classList.toggle("displaySearchBox");
}
 
menu.onclick = function() {
     header.classList.toggle("displayMenu");
     document.body.classList.toggle("changeBg")
}

accountBtn.onclick = function() {
    accountBox.classList.toggle("displayAccountBox");
    document.body.classList.toggle("secondchangeBg")
}

removeAccountBox.onclick = function() {
    accountBox.classList.remove("displayAccountBox");
    document.body.classList.remove("secondchangeBg")
}