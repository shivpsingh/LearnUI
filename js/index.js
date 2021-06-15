let navElem = document.querySelector('#nav__item-mob');
let navElemDesk = document.querySelector('#nav__item-desk');

navElem.addEventListener('click', function() {
    if(navElemDesk.style.display == 'none') {
        navElemDesk.style.display = 'flex';
        navElem.classList.add('nav__bar-toggle');
    } else {
        navElemDesk.style.display = 'none';
        navElem.classList.remove('nav__bar-toggle');
    }
});