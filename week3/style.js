for (var i = 0; i < 10; i++)
var newH1 = document.createElement("h1")
newH1.textContent = "Hello World"
document.body.append(newH1)

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]

for (var i = 0; i < names.length; i++){
    var h1 = document.createElement("h1");
    h1.textContent = names[i];
    document.body.append(h1);
    
(i == 0 ? h1.style.color = "purple" :
    i == 1 ? h1.style.color = "red" :
    i == 2 ? h1.style.color = "blue" :
    i == 3 ? h1.style.color = "pink" :
    i == 4 ? h1.style.color = "green" :
    i == 5 ? h1.style.color = "yellow" :
    i == 6 ? h1.style.color = "violet" :
    h1.style.color = "black")
}