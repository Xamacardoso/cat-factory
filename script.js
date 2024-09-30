const gatodiv = document.getElementById("gatodiv");

const generateRandomCat = () => {
    const response = fetch("https://api.thecatapi.com/v1/images/search?size=thumb")
        .then((response) => response.json())
        .then((data) => {
            const cat = data[0];
            changeCatDiv(cat, gatodiv);
        });
};

const changeCatDiv = (cat, div) => {
    div.innerHTML = "";
    div.textContent = !cat ? "Sem Catos" : "";
    if (cat) {
        element = document.createElement("img");
        element.src = cat.url;
        element.id = "cato";
        console.log(cat);
        div.appendChild(element);
    }
};

changeCatDiv(null, gatodiv);
