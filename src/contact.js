function createContact() {
    let contact = document.createElement("div");
    let intro = document.createElement("p");

    intro.textContent = "This is the contact page, write us";
    contact.appendChild(intro);
    return contact;
};

export default createContact;