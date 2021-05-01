import './style.css';

console.log('funguju!');

const navElm = document.querySelector('.nav-btn');
const navBarElm = document.querySelector('nav');
const navLinkElm = document.querySelectorAll('nav a');

navElm.addEventListener('click', () => {
  navBarElm.classList.toggle('nav-closed');
});

for (let i = 0; i < navLinkElm.length; i++) {
  navLinkElm[i].addEventListener('click', () => {
    navBarElm.classList.add('nav-closed');
  });
}
