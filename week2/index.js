var newH = document.createElement("h1")
newH.textContent = "Welcome to my JS site"
var header = document.getElementById("heading")
header.prepend(newH)

var newLi = document.createElement("li")
newLi.textContent = "Adding to List"
var newList = document.getElementById("list")
newList.prepend(newLi)

var newP = document.createElement("p")
newP.textContent = "All of this was created with Javascript"
document.body.append(newP)