const newPar = document.createElement("p");

const text = document.createTextNode("Bu bir p elementi");

newPar.appendChild(text);

console.log(newPar);

const h2 = document.querySelector(".item-list h2");

h2.after(newPar);
h2.before(newPar);

newPar.id = "par";

newPar.className = "center";

newPar.classList.add("fatih", "elma");

newPar.classList.toggle("white");

newPar.classList.remove("fatih");
