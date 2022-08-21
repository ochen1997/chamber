/* Select the element to manipulate (output to) */

const datefield = document.querySelector('date');

/* Derive the current date using a date object */

const now = new Date();
const fulldate = new Intl.DateTimeFormat('en-US', {dateStyle: 'full' }) .format (now);
datefield.innerHTML = `${fulldate}`

/* Coppy rigt year driven by JavaScript */
const d = new Date();
const current = d.getFullYear();
document.querySelector('year').innerHTML = `${current}`;


/* Page lastmodification date driven by Javascript */

const lastmode = document.querySelector('#lastmode');
lastmode.innerHTML = `Last Modification: ${document.lastModified}`;

function showHamMenu(){
    let mainMenu = document.querySelector('.main-menu');
    mainMenu.classList.toggle('show')
}
   



