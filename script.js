const petDiv = document.getElementById("animalDiv");

const generateRandomAnimal = (animal) => {
    const response = fetch("https://api.the"+animal+"api.com/v1/images/search?size=thumb")
        .then((response) => response.json())
        .then((data) => {
            const animal = data[0];
            changePetDiv(animal, petDiv);
        });
};

const changePetDiv = (pet, div) => {
    div.innerHTML = "";
    div.textContent = !pet ? "Sem animais, clique num botão abaixo:" : "";
    div.style = "color: white; font-family: Trebuchet MS";
    if (pet) {
        element = document.createElement("img");
        element.src = pet.url;
        element.id = "animalPic";
        console.log(pet);
        div.appendChild(element);
    }
};

changePetDiv(null, petDiv);
