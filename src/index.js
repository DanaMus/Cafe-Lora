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

let notordered = true;

const objednatElm = document.querySelector('.order-btn');
const drinkcupElm = document.querySelector('.drink__cup');
objednatElm.addEventListener('click', () => {
  if (notordered) {
    objednatElm.textContent = 'Zrušit';
    drinkcupElm.classList.add('drink__cup--selected');
    notordered = false;
  } else {
    objednatElm.textContent = 'Objednat';
    drinkcupElm.classList.remove('drink__cup--selected');
    notordered = true;
  }
});
