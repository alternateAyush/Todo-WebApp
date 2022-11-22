var trueCheckbox = document.getElementsByClassName("true-task");
var falseCheckbox = document.getElementsByClassName("false-task");
var updateComplete = document.getElementById("update-button");
var deleteButton = document.getElementById("delete-button");
var themeButton = document.getElementById("theme-button");
var allCheckbox = document.getElementsByClassName("form-check-input");
var body = document.getElementsByTagName("body");
var light = false;
var date = new Date();
deadline.setAttribute(
  "min",
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
);

// disable enable buttons
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
  var themeVal = localStorage.getItem("theme");
  if(themeVal=="Dark")
  {
    light=true;
  }
  changeTheme();
  
}

function formCheckInputFunc() {
  updateComplete.disabled = false;
  deleteButton.disabled = false;
}

for (let i = 0; i < allCheckbox.length; i++) {
  allCheckbox[i].addEventListener("click", formCheckInputFunc);
}

function randomColor()
{
   var r = Math.floor((Math.random()*255)+50);
   var g = Math.floor((Math.random()*255)+50);
   var b = Math.floor((Math.random()*255)+100);
   return `rgb(${r},${g},${b},0.8)`;
}

// theme change function
function changeTheme() {
  light = !light;
  var themeBack = document.getElementsByClassName("theme-background");
  if (!light) {
    localStorage.setItem("theme","Dark");
    themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
    themeButton.classList.remove("btn-light");
    themeButton.classList.add("btn-dark");    
    for(var i=0; i<themeBack.length; i++){
      themeBack[i].style.backgroundColor = "rgb(61,65,73)";
      themeBack[i].style.color = "white";
      themeBack[i].style.borderColor = "rgb(20,20,20)";
    }
    body[0].style.backgroundColor = "black";
    body[0].style.backgroundImage = "none";

  } else {
    localStorage.setItem("theme","Light");
    themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
    themeButton.classList.remove("btn-dark");
    themeButton.classList.add("btn-light");
    for(var i=0; i<themeBack.length; i++){
      themeBack[i].style.backgroundColor = "white";
      themeBack[i].style.color = "black";
      themeBack[i].style.borderColor = "rgb(240,240,240)";
    }
    body[0].style.backgroundImage = `linear-gradient(0deg,${randomColor()},${randomColor()},${randomColor()})`;
  }
}


themeButton.addEventListener("click", changeTheme);

onLoad();
