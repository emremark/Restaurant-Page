import { homePage } from "/home/vboxuser/Desktop/js/Restaurant-Page/src/home";
import { menuPage } from "/home/vboxuser/Desktop/js/Restaurant-Page/src/menu";
import { aboutPage } from "/home/vboxuser/Desktop/js/Restaurant-Page/src/about";
import "./styles.css";

homePage();

const b2 = document.getElementById("me");
b2.addEventListener("click", () => {
    menuPage();
})
const b1 = document.getElementById("ho");
b1.addEventListener("click", () => {
    homePage();
})
const b3 = document.getElementById("ab");
b3.addEventListener("click", () => {
    aboutPage();
})

