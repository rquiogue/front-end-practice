const centerItem = document.querySelector(".center-item");
const menu = document.querySelector(".menu");
const data = document.querySelector(".data");
const query = document.querySelector(".query");

centerItem.addEventListener("click", () => {
    menu.classList.toggle("change")?menuOn():menuOff();
});

data.addEventListener("click", () => {
    location.href = "../Basic_Adding_To_Database/index.html";
});

query.addEventListener("click", () => {
    location.href = "../Querying_from_Database/index.html";
});

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

