import beefPicture from './beef.jpg';
import stewPicture from "./stew.jpg";
import chickenPicture from "./chicken.jpg";

function createMenu() {
    let menuDiv = document.createElement("div");
    menuDiv.className = "menu-grid";
    let intro = document.createElement("h2");
    intro.textContent = "This is the menu, tabbed content is really easier than I thought";
    menuDiv.appendChild(intro);

    const menu = {
        beef: {
            image: beefPicture,
            name: "Italian Beef Sandwich",
            blurb: "Delicious gravy and some tender onion to go with your beef, accompanied by hot peppers"
        },
        stew: {
            image: stewPicture,
            name: "Stew with Rice and Plantains",
            blurb: "Traditional beef stew served alongside white rice with a side of fried plantains and fennel salad"
        },
        chicken: {
            image: chickenPicture,
            name: "Chicken with Peppers",
            blurb: "Half chicken slathered with red grilled peppers, topped with a lemon sauce"
        }
    };
    for (let meal in menu) {
        let card = document.createElement("div");
        card.className = "card";
        let title = document.createElement("h2");
        let blurb = document.createElement("p");
        let image = document.createElement("img");

        title.textContent = menu[meal]["name"];
        blurb.textContent = menu[meal]["blurb"];
        image.src = menu[meal]["image"];
        
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(blurb);
        menuDiv.appendChild(card);
    }
    return menuDiv;
};

export default createMenu;