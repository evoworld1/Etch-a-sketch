//Declaring important variables

const divContainer = document.querySelector(".container");
const buttons = document.querySelector(".buttons");
const rgbRandom = document.getElementById("rainbow");
const blackClr = document.querySelector(".blackClr");
const ownColor = document.getElementById("ownColor");
const gradDarker = document.getElementById("gradDark");
const resetBtn = document.getElementById("reset");
let colorPick = [];
let colorTheme = [];
let slider = document.getElementById("slider");

//Creating default 16x16 grid of divs

function divCreator(sliderVal) {
  divContainer.style.display = "grid";
  divContainer.style.gridTemplateColumns = `repeat(${sliderVal}, 1fr)`;
  divContainer.style.gridTemplateRows = `repeat(${sliderVal}, 1fr)`;
  for (i = 1; i <= sliderVal * sliderVal; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("cell");
    newDiv.style.border = "0.5px solid rgb(200, 200, 200)";
    divContainer.appendChild(newDiv);
  }
}
divCreator(16);

//Creating an event for coloring divs on click when hovering over

function colorCells() {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    cell.addEventListener("mouseleave", function () {
      colorChoice();
      cell.style.backgroundColor = colorPick;
    });
  });
}

function deactivateColoring() {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    cell.addEventListener("mouseleave", function () {
      cell.style.backgroundColor = "white";
    });
  });
}
//Activating and deactivating coloring on mouse click
divContainer.addEventListener("click", colorCells);
divContainer.addEventListener("click", deactivateColoring);

//Creating function and events for different color choices

blackClr.addEventListener("click", function () {
  colorTheme = "black";
});
rgbRandom.addEventListener("click", function () {
  colorTheme = "rainbow";
});
ownColor.addEventListener("click", function () {
  colorTheme = "ownColor";
});

function colorChoice() {
  switch (colorTheme) {
    case "rainbow":
      let randomN = Math.floor(Math.random() * 360);
      colorPick = `hsl(${randomN}, 100%, 50%)`;
      break;
    case "black":
      colorPick = "black";
      break;
    case "ownColor":
      let userPick = document.getElementById("userPick");
      colorPick = userPick.value;
      break;
  }
}

//Changing grid size based on slider value

function changeSize() {
  let currentGrid = document.querySelectorAll(".cell");
  currentGrid.forEach((div) => {
    return div.remove();
  });
  divCreator(slider.value);
}

slider.addEventListener("mouseup", changeSize);

//Reset button

resetBtn.addEventListener("click", function () {
  let currentGrid = document.querySelectorAll(".cell");
  currentGrid.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});
