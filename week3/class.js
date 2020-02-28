const baby = ["brown hair", "blue eyed", "long lashes", "long body", "small feet", "small hands", "smiles a lot", "cries a lot", "loves his walker" ];

var border1 = document.querySelector(".border");

var newH1 = document.createElement("h1")
    newH1.textContent = "Hello Baby"
    border1.append(newH1);


for (var i = 0; i < baby.length; i++){
    var h1 = document.createElement("h1");
    h1.textContent = baby[i];
        border1.append(h1);

    (i == 0 ? h1.style.fontSize = "20px":
        i == 1 ? h1.style.fontWeight = "lighter":
        i == 2 ? h1.style.fontFamily = "sans-serif":
        i == 3 ? h1.style.color = "cornflowerblue":
        h1.style.color = "purple"
    )
}



 