export const menuPage = function () {
    let dug = document.getElementById("ho");
    let dug2 = document.getElementById("me");
    let dug3 = document.getElementById("ab");
    dug.className = "";
    dug2.className = "h";
    dug3.className = "";

    let mainDiv = document.getElementById("content");
    mainDiv.innerHTML = ""
    let mb = document.createElement("div");
    mb.className = "mBody";
    let nsl = document.createElement("div");
    nsl.className = "naslov";
    nsl.textContent = "Gordon Ramsey said if a menu has pictures get out and run. So no pictures here, no prices either! If you have to ask you can`t afford it."

    mainDiv.appendChild(mb);
    mb.appendChild(nsl);
}


