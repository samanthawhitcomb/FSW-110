const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const checkedInputs = []

    for(let i = 0; i < form.diets.length; i++) {
        if(form.diets[i].checked){
        checkedInputs.push(form.diets[i].value)
    }}

    alert("First Name: " + form.first.value + 
    ", Last Name: " + form.last.value + 
    ", Age: " + form.age.value + 
    ", Gender: " + form.gender.value +
    ", State: " + myForm.state.value +
    ", Food Options: " + checkedInputs)

})
form.style.fontSize = "20px"
form.first.style.fontSize = "20px"
form.last.style.fontSize = "20px"
form.age.style.fontSize = "20px"
form.first.style.padding = "10px"
form.last.style.padding = "10px"
form.age.style.padding = "10px"
const button = document.getElementById("button")
button.style.color = "blue"
button.style.fontSize = "20px"
button.style.padding = "10px"
