var trueCheckbox = document.getElementsByClassName("true-task");
var falseCheckbox = document.getElementsByClassName("false-task");
var todoItems = document.getElementsByClassName("todo-items");
var updateComplete = document.getElementById("update-button");
var deleteButton = document.getElementById("delete-button");
var allCheckbox = document.getElementsByClassName("form-check-input");

var date = new Date();
deadline.setAttribute(
  "min",
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
);

function onLoad() {
  for (let i = 0; i < trueCheckbox.length; i++) {
    trueCheckbox[i].checked = true;
  }
  for (let i = 0; i < falseCheckbox.length; i++) {
    falseCheckbox[i].checked = false;
  }
  if (trueCheckbox.length == 0) {
    deleteButton.disabled = true;
  }
  if (allCheckbox.length == 0) {
    updateComplete.disabled = true;
  }
}

function formCheckInputFunc() {
  updateComplete.disabled = false;
  deleteButton.disabled = false;
}

for (let i = 0; i < allCheckbox.length; i++) {
  allCheckbox[i].addEventListener("click", formCheckInputFunc);
}

onLoad();
