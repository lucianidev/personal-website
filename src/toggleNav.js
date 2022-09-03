const hamburger = document.getElementById('hamburger');
const navBar = document.getElementsByClassName('links')[0];

hamburger.addEventListener('click', () =>{
    navBar.classList.toggle('active')
})