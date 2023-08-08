const container = document.querySelector(".container");
const getStartedBtn = document.querySelector(".green-bg button");
const signinButton = document.querySelector("#sign-in");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

getStartedBtn.addEventListener("click", () => {
    container.classList.toggle("change");
})

signinButton.addEventListener("click", () => {
    if (password.value == "1234"){
        location.href="../3D_Menu_For_FCA/index.html";
    } else {
        window.alert("Wrong credentials");
    }
})