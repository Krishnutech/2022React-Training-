
const deal = document.getElementsByClassName('deal-section');
console.log(deal,'deal');

deal[0].style.backgroundColor = 'red'
console.log(deal[0],'deal');

const imgSection = document.getElementById('img-section');
console.log(imgSection.parentElement.firstChild,'firstChild')
imgSection.style.backgroundColor = 'red';

let arrayOfElements = Array.from(deal);
console.log(arrayOfElements[0]);

const a = document.querySelectorAll('p');
console.log(a[2]);
