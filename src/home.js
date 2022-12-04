function createHome() {
    let home = document.createElement("div");
    let intro = document.createElement("div");
    
    let p1 = document.createElement("p");
    p1.textContent = "Hey there! We are The Bear, a Chicago restaurant known for our tasty Italian beef sandwiches. But that's not all - we are always looking to add new and exciting flavors to our menu. Whether you're in the mood for a classic Italian beef or want to try something new, we've got you covered.";
    
    let p2 = document.createElement("p");
    p2.textContent = "We are the Berzatto brothers, Mikey and Carmy, and we are passionate about providing great food and a fun atmosphere for our customers. We can't wait to see you at The Bear and share our love of food with you!";
    
    let p3 = document.createElement("p");
    p3.textContent = "Why not come down and visit us at The Bear? Trust us, your taste buds will thank you.";
  
    intro.appendChild(p1);
    intro.appendChild(p2);
    intro.appendChild(p3);
    home.appendChild(intro);
    return home;
};

export default createHome;