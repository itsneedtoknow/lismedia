import './style.scss';
import './scss/_header.scss';
import './scss/_main.scss';
import './scss/_footer.scss';

const burger = document.querySelector('.header__burger'),
burgerMenu = document.querySelector('.header__menu'),
body = document.querySelector('.body'),
overlay = document.querySelector('.overlay');


console.log(burger);
function burgerActive(){
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    body.classList.toggle('overlay');
    overlay.classList.toggle('open');
};

burger.addEventListener('click',  burgerActive);