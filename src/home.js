function createHome() {
    let home = document.createElement("div");
    let intro = document.createElement("p");

    intro.textContent = "This is a beautiful restaurant, really fantastic. On the other hand, food ain't that good";
    home.appendChild(intro);
    return home;
};

export default createHome;