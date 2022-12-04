function createContact() {
    let contact = document.createElement("div");
    let intro = document.createElement("div");

    let p1 = document.createElement("p");
    p1.textContent = "Thanks for checking out our contact page! We're always happy to hear from our customers and answer any questions you might have.";

    let p2 = document.createElement("p");
    p2.textContent = "If you're thinking about making a reservation or want to know more about our catering services, give us a shout. We offer Italian beef sandwiches for catering, but we can also provide other dishes from our menu. Just let us know what you're in the mood for and we'll make it happen.";

    let p3 = document.createElement("p");
    p3.textContent = "Please keep in mind that we don't offer delivery at this time. We can't wait to see you at The Bear and share our love of food with you!";

    intro.appendChild(p1);
    intro.appendChild(p2);
    intro.appendChild(p3);
    contact.appendChild(intro);
    return contact;
};

export default createContact;