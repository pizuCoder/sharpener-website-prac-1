//CREATING NODES MODIFYING DOM//
//keywords:
// 1. parentElement
// 2.lastelementchild
// 3.lastchild
// 4. createchild
// 5. firstelementchild
// 6. firstchild
// 7. nextsibling
// 8. nextelementsibling
// 9. previoussibling
// 10. previouselementsibling
// 11. createelement
// 12. setAttribute
// 13. createtesxtnode
// 14. appendchild

const itemList = document.querySelector('#items');

itemList.parentElement.style.backgroundColor = '#f4f4f4' 
// itemList.firstElementChild.style.color = 'yellow'

itemList.lastElementChild.style.color = 'blue' 
itemList.lastChild.textContent = "hello" 

itemList.previousElementSibling.style.color = 'green'

const newDiv = document.createElement('div')
newDiv.className= 'hello';
newDiv.id = 'hellol';
newDiv.setAttribute('title', 'Hello Div');
let newDivText = document.createTextNode ("Hello World")
newDiv.appendChild(newDivText);
const container= document.querySelector('header .container')
const h1 = document.querySelector('header h1');
// container.insertBefore(newDiv, h1);


const li1 = itemList.firstElementChild
itemList.insertBefore(newDiv, li1)


