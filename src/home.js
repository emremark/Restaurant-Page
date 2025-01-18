import homeImg from "../assest/jason-leung-poI7DelFiVA-unsplash.jpg";
import homeImg1 from "../assest/stefan-johnson-xIFbDeGcy44-unsplash.jpg"
    
export const homePage = function() {
    let dug = document.getElementById("ho");
    let dug2 = document.getElementById("me");
    let dug3 = document.getElementById("ab");
    dug.className = "h";
    dug2.className = "";
    dug3.className = "";

    let mainDiv = document.getElementById("content");
    mainDiv.innerHTML = ""
    let hup = document.createElement("div");
    hup.className = "hup";
    let imgc = document.createElement("div");
    imgc.className = "imgc";
    let img1 = document.createElement("img");
    img1.className = "fst";
    img1.src = homeImg;
    let h = document.createElement("h1");
    h.textContent = "Welcome to FancyAssRestaurant";
    let hhh = document.createElement("h3");
    hhh.textContent = "At just 200$ per plate, the perfect spot for people who can afford to starve.";

    //bottom of the page
    let bottomDiv = document.createElement("div");
    bottomDiv.className = "hdown";
    let img2 = document.createElement("img");
    img2.className = "scd";
    img2.src = homeImg1;

    let rdiv = document.createElement("div");
    rdiv.className = "txt";
    rdiv.textContent = "Our food is, above all, Instagram-friendly. Post our dishes and watch the other posers die of envy. After one of our meals, you won`t be full — but neither will your bank account. No ideas on what to write here. This is a Webpack exercise and on manipulating the DOM via JavaScript."

    
    ///////////////dug.className = "h";

    mainDiv.appendChild(hup);
    hup.appendChild(imgc);
    imgc.appendChild(img1);
    imgc.appendChild(h);
    imgc.appendChild(hhh);

    mainDiv.appendChild(bottomDiv);
    bottomDiv.appendChild(img2);
    bottomDiv.appendChild(rdiv);

}
