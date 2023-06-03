/*horizontal nav*/
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click',() => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');

});

//TOGGLE MENU
const toggleButton = document.querySelector('.navToggle');
const body = document.body;


toggleButton.addEventListener('click', _ => {
   body.classList.toggle('offScreenOpen');
})