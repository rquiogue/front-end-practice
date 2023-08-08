const container = document.querySelector(".container");
const sideBar = document.querySelector(".side-bar");
const data = document.querySelector(".data");
const query = document.querySelector(".query");
const home = document.querySelector(".center-item");

sideBar.addEventListener("click", () => {
    container.classList.toggle("change");
})

data.addEventListener("click", () => {
    location.href = "../Basic_Adding_To_Database/index.html";
});

query.addEventListener("click", () => {
    location.href = "../Querying_from_Database/index.html";
});

home.addEventListener("click", () => {
    location.href = "../3D_Menu_for_FCA/index.html";
});