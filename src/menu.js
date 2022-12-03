function createMenu() {
    let menu = document.createElement("div");
    let intro = document.createElement("p");

    intro.textContent = "This is the menu, tabbed content is really easier than I thought";
    menu.appendChild(intro);
    return menu;
};

export default createMenu;