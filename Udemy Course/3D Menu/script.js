const centerItem = document.querySelector(".center-item");
const menu = document.querySelector(".menu");
const centerIcon = document.querySelector("#centerIcon");

centerItem.addEventListener("click", () => {
    menu.classList.toggle("change")?menuOn():menuOff();
});
/*
menu.addEventListener("mouseleave", () => {
    menu.classList.remove("change");
});
*/

function  menuOn(){
    centerIcon.classList.remove("fa-solid");
    centerIcon.classList.remove("fa-play");
    centerIcon.classList.add("fa-sharp");
    centerIcon.classList.add("fa-solid");
    centerIcon.classList.add("fa-circle-xmark");
}

function menuOff(){
    centerIcon.classList.remove("fa-sharp");
    centerIcon.classList.remove("fa-solid");
    centerIcon.classList.remove("fa-circle-xmark");
    centerIcon.classList.add("fa-solid");
    centerIcon.classList.add("fa-play");
}