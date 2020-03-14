
const firstName = document.getElementsByName("first")[0]

const lastName = document.getElementsByName("last")[0]

const age1 = document.getElementsByName("age")[0]

const button = document.getElementById("enter")

button.addEventListener("click",(e) => {
    e.preventDefault()
    const fullName = (firstName.value + lastName.value + age1.value)
    const h1 = document.createElement('h1')
    h1.textContent = fullName
    const form1 = document.getElementsByClassName("name")[0]
    form1.append(h1) 

    alert("Your new Username: " + fullName)
    
}  )


// alert("your new Username is below! Thank you.")