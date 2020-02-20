var navbar = document.createElement("NAV")
document.body.appendChild(navbar)

var home = document.createElement("A")
home.setAttribute("href", "/html")
var home1 = document.createTextNode("Home")
home.appendChild(home1)
navbar.appendChild(home)

var newH1 = document.createElement("h1")
newH1.textContent = "MY NEW WEBSITE"
document.body.append(newH1)

var list = document.createElement("ul")
document.body.append(list)

var listItem = document.createElement("li")
listItem.textContent = "Burger"
list.append(listItem)

var listItem2 = document.createElement("li")
listItem2.textContent = "Cake"
list.append(listItem2)

var listItem3 = document.createElement("li")
listItem3.textContent = "Pizza"
list.append(listItem3)

var newP = document.createElement("p")
newP.textContent = "Making a website can be hard. Let's Keep Practicing"
document.body.append(newP)

var footer = document.createElement("footer")
footer.textContent = "Ready for a lunch break."
document.body.append(footer)