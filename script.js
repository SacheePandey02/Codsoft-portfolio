let menu = document.querySelector('#menu-icon') ;
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
   
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','Frontend Developer', 'Content Writer', 'Freelancer'],
    typeSpeed: 50,
    backspeed:80,
    backdelay: 1200,
    loop:true,
  });
