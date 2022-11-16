const openModal = document.getElementById("open-modal")
const closeModal = document.getElementById("modal-close-btn")
const bookCall = document.getElementById("modal-btn")
const modal = document.getElementById("modal")
const Name = document.getElementById("fullName")
const email = document.getElementById("email")
const phno = document.getElementById("phno")
const time = document.getElementById("time")
const date = document.getElementById("date")
const hireBtn = document.getElementById("hire-btn")

openModal.addEventListener('click', function(){
    modal.style.display = 'inline'
})
closeModal.addEventListener('click', function(){
    modal.style.display = 'none'
})
bookCall.addEventListener('click', (e)=> {
    e.preventDefault()
    
    console.log("Name: ",Name.value)
    console.log("Email: ", email.value)
    console.log("Phone Number",phno.value)
    console.log("Date for call: ",date.value)
    console.log("time for call", time.value)
    
})
hireBtn.addEventListener('click', function () {
        window.alert("Hire Button clicked, function under development")
    })
