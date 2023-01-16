const list = document.querySelector("li");
console.log(
  list.parentNode.parentElement.parentNode.parentElement.parentElement
    .parentNode.parentNode
);

console.log(list.closest("body").querySelector("#header h1"));

const addItem = document.querySelector(".add-item");

console.log(addItem.children[2].getElementsByClassName.color);
