import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
import './style.css';

let navDiv = document.getElementById("nav-div");
let content = document.getElementById("content");
let nav = document.createElement("div");
let options = document.createElement("ul");
options.className = "tabs-menu";
let home = document.createElement("li");
let menu = document.createElement("li");
let contact = document.createElement("li");


home.textContent = "home";
menu.textContent = "menu";
contact.textContent = "contact";

options.appendChild(home);
options.appendChild(menu);
options.appendChild(contact);
nav.appendChild(options);

navDiv.appendChild(nav);

let tabs = document.querySelectorAll("li");

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", (e) => {
        content.innerHTML = "";
        switch (e.target.textContent) {
            case "home":
                content.appendChild(createHome());
                break
            case "menu":
                content.appendChild(createMenu());
                break
            case "contact":
                content.appendChild(createContact());
                break
        };

    });
}