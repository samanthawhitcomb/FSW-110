// console.log(document.getElementsByName("num1")[0].value)

const adds = document.getElementsByName("num1")[0]
// console.log(adds)
const adds2 = document.getElementsByName("num2")[0]
// console.log(adds2)

const button = document.getElementById("addNum")
// console.log(button)
button.addEventListener("click",(e) => {
    e.preventDefault()
    const total = (Number(adds.value) + Number(adds2.value))
    const h1 = document.createElement('h1')
    h1.textContent = total
    const divAdd = document.getElementsByClassName("add")[0]
    divAdd.append(h1) 
    // console.log(divAdd)
}  )

const subtracts = document.getElementsByName("sub1")[0]

const subtract2 = document.getElementsByName("sub2")[0]

const button2 = document.getElementById("subtractNum")

button2.addEventListener("click",(e) => {
    e.preventDefault()
    const result = (Number(subtracts.value) - Number(subtract2.value))
    const h1 = document.createElement('h1')
    h1.textContent = result
    const divSub = document.getElementsByClassName("subtract")[0]
    divSub.append(h1) 
}  )

const multiply1 = document.getElementsByName("mult1")[0]

const multiply2 = document.getElementsByName("mult2")[0]

const button3 = document.getElementById("multiplyNum")

button3.addEventListener("click",(e) => {
    e.preventDefault()
    const answer = (Number(multiply1.value) * Number(multiply2.value))
    const h1 = document.createElement('h1')
    h1.textContent = answer
    const divMult = document.getElementsByClassName("multiply")[0]
    divMult.append(h1) 
}  )