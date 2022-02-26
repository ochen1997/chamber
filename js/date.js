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

function toggleMenu(){
    document.getElementsByClassName('navbar-links')[0].classList.toggle('responsive');

}


var myDate = new Date();
var day = myDate.getDay();

var meeting;

if (day == 1)
    meeting = '"🤝🏼Come join us for the Chamber meet and greet wednesday at 7:00 pm."';
else if (day == 2)
    meeting = '"🤝🏼Come join us for the Chamber meet and greet wednesday at 7:00 pm."';
else if (day == 3)
    meeting = ''
else if (day == 4)
    meeting = ''
else if (day == 5)
    meeting = ''
else if (day == 6)
    meeting = ''
else if (day == 0)
    meeting = '';

document.querySelector('.message').innerHTML = `${meeting}`;
   



