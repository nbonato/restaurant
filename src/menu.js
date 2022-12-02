function createMenu() {
    let home = document.createElement("div");
    let intro = document.createElement("p");

    intro.textContent = "This is the menu, tabbed content is really easier than I thought";
    home.appendChild(intro);
    return home;
};

export default createMenu;