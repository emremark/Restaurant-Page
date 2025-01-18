import aboutImg from "../assest/jay-wennington-N_Y88TWmGwA-unsplash.jpg"

export const aboutPage = function () {
    let dug = document.getElementById("ho");
    let dug2 = document.getElementById("me");
    let dug3 = document.getElementById("ab");
    dug.className = "";
    dug2.className = "";
    dug3.className = "h";

    let mainDiv = document.getElementById("content");
    mainDiv.innerHTML = ""
    let cnt = document.createElement("div");
    cnt.className = "aboutD";
    let img4 = document.createElement("img");
    img4.className = "img3";
    img4.src = aboutImg;
    let tek = document.createElement("h3");
    tek.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, ut! Quae nesciunt ad praesentium maxime maiores officiis cumque nulla eaque!";
    tek.className = "abt";

    mainDiv.appendChild(cnt);
    cnt.appendChild(img4);
    cnt.appendChild(tek);
}
