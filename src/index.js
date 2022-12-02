import createHome from "./home";
import createMenu from "./menu";
const body = document.querySelector("body");
let content = document.getElementById("content");
let nav = document.createElement("div");
let options = document.createElement("ul");
let home = document.createElement("li");
let menu = document.createElement("li");


home.textContent = "home";
menu.textContent = "menu";

home.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(createHome());
});
menu.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(createMenu());
});

options.appendChild(home);
options.appendChild(menu);
nav.appendChild(options);

body.appendChild(nav);

