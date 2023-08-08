
const modal = document.querySelector('.modal');
const grey_class = document.querySelector('.grey');
const background = document.querySelector('#background-grey');

modal.addEventListener('click', () => {
    modal.classList.toggle('active');
    background.classList.toggle('grey');
});