const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// const submitBtn = document.getElementById('Submit')
// Form submit event
form.addEventListener('submit', addItem);
// window.localStorage.clear()
//delete item
itemList.addEventListener('click', removeItem);
//filter
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
e.preventDefault();
// Get input value
let newItem = document.getElementById('item').value 
let description = document.getElementById('description').value
// Create new li element
let li= document.createElement('li');
// Add class
li.className = 'list-group-item';
// Add text node with input value
let itemstoAppend = document.createTextNode (newItem + " " + description)


// li.appendChild(document.createTextNode (description))

// for (var i in localStorage) {
//     if (localStorage[i] === `"${description}"`){
//         if(confirm("Email already exists")) return
//         else return
//     }       
// }   
li.appendChild(itemstoAppend)

    var editBtn = document.createElement('button');
    // Add classes to edit button
    editBtn.className = 'btn btn-secondary btn-sm float-right edit';
    // Append text node
    editBtn.appendChild(document.createTextNode('edit'));
    // Append button to li
    li.appendChild(editBtn);

    editBtn.addEventListener('click', editItems)

    
   
    // Create del button element
    var deleteBtn = document.createElement('button');
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right mr-3 delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    // Append button to li
    li.appendChild(deleteBtn);
    


itemList.appendChild(li);
    

    
    
 
//AXIOS Addition

    // let existingUsers = JSON.parse(localStorage.getItem("allUsers"))
    // if(existingUsers == null) existingUsers = []
    let userName = document.createTextNode(newItem)
    let userEmail = document.createTextNode(description)
    let users = {
        "Name": userName.textContent,
        "Email": userEmail.textContent
    }
    // localStorage.setItem(JSON.stringify(users.Name),JSON.stringify(users.Email) )
    axios
    .post("https://crudcrud.com/api/b26f17664fd14983baa26fd5d47eb4f8/BookingData", users)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))


document.getElementById('item').value = ''
document.getElementById('description').value = ''

}

//To show previous user interaction//
window.addEventListener('DOMContentLoaded', ()=>{
    axios
    .get('https://crudcrud.com/api/b26f17664fd14983baa26fd5d47eb4f8/BookingData')
    .then((res)=>{
        console.log(res)
        for(var i=0; i<res.data.length;i++){
            showNewUseronScreen(res.data[i])
        }
    })
    .catch((err)=> console.log(err))
})

//function to show on screen//
function showNewUseronScreen(userData){
    let username = userData.Name
    let useremail = userData.Email
    // Create new li element
    let li= document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    let itemstoAppend = document.createTextNode (username + " " + useremail)
    
    li.appendChild(itemstoAppend)

        var editBtn = document.createElement('button');
        // Add classes to edit button
        editBtn.className = 'btn btn-secondary btn-sm float-right edit';
        // Append text node
        editBtn.appendChild(document.createTextNode('edit'));
        // Append button to li
        li.appendChild(editBtn);

        editBtn.addEventListener('click', editItems)

        
    
        // Create del button element
        var deleteBtn = document.createElement('button');
        // Add classes to del button
        deleteBtn.className = 'btn btn-danger btn-sm float-right mr-3 delete';
        // Append text node
        deleteBtn.appendChild(document.createTextNode('X'));
        // Append button to li
        li.appendChild(deleteBtn);
        


    itemList.appendChild(li);
}
// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
            let key = li.textContent.split(" ")[0]
            console.log(key)
            localStorage.removeItem(`"${key}"`)
            // axios
            // .delete('https://crudcrud.com/api/b26f17664fd14983baa26fd5d47eb4f8/BookingData/')
        }
    }
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get list
    var items=  itemList.getElementsByTagName('li')
    // Convert to an array
    Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
        } else {
        item.style.display = 'none';
        }
    })
    }

function editItems(e){
    if(e.target.classList.contains('edit')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
        let n = li.textContent.split(" ")[0]
        let eml = li.textContent.split(" ")[1].split("editX")[0]
        document.getElementById('item').value = n
        document.getElementById('description').value = eml

    }

}