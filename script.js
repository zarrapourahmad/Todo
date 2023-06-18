"use strict";

const todoForm = document.getElementById("todo-form");
const inputBox = document.querySelector(".input-box");
const listContainer = document.querySelector(".list-item-container");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputBox.value !== "") {
    //
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    li.classList.add("list-item");
    //Build a deleting icon
    let span = document.createElement("span");
    span.style.backgroundImage = "url(img/icon-cross.svg)";
    // span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
});

listContainer.addEventListener("click", function (e) {
  //Clicking on the li to style li and showing that task is  done
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
    //Clicking on the cross to deleting the li(span' parent)
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
