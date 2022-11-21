const headerTitle = document.getElementById('header-title')
const header = document.getElementById('main-header')
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
header.style.borderBottom = 'solid 3px #000'
document.getElementById('main').children[0].style.fontWeight='bold'
document.getElementById('main').children[0].style.color = 'green'
const items = document.getElementsByClassName('list-group-item');
items[2].style.background = 'green'
for(let i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold'
}
const otherLi = document.getElementsByClassName('other-list-item')
otherLi[0].style.fontWeight = 'bold'

const Li = document.getElementsByTagName('li')
Li[4].style.color = 'blue'
