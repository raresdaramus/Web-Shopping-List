const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addProduct() {
  if (inputBox.value === "") {
    alert("Trebuie sa scrii produsul inainte de adaugare!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.insertBefore(li, listContainer.firstChild);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showProducts() {
  listContainer.innerHTML = localStorage.getItem("data");
}

function sortList() {
  const listContainer = document.getElementById("list-container");
  const items = Array.from(listContainer.getElementsByTagName("li"));

  items.sort((a, b) => a.textContent.localeCompare(b.textContent));

  items.forEach((item) => listContainer.appendChild(item));
  saveData();
}

showProducts();
