//Declaring important variables

const divContainer = document.querySelector(".container");
const buttons = document.querySelector(".nav-bar");
const RandomColors = document.getElementById("rainbow");
const blackColor = document.getElementById("blackColor");
const colorPickButton = document.getElementById("colorPickButton");
const eraserButton = document.getElementById("eraser");
const resetButton = document.getElementById("reset");
let colorPick = [];
let colorTheme = [];
let slider = document.getElementById("slider");
let currentState = false;

//Creating default 16x16 grid of divs

function divCreator(sliderVal) {
  divContainer.style.display = "grid";
  divContainer.style.gridTemplateColumns = `repeat(${sliderVal}, 1fr)`;
  divContainer.style.gridTemplateRows = `repeat(${sliderVal}, 1fr)`;
  for (i = 1; i <= sliderVal * sliderVal; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("cell");
    newDiv.style.border = "0.5px solid rgb(200, 200, 200)";
    newDiv.style.backgroundColor = "white";
    divContainer.appendChild(newDiv);
  }
  divContainer.addEventListener("click", toggleColoring);
}
divCreator(16);

function toggleColoring() {
  const cells = document.querySelectorAll(".cell");

  if (!currentState) {
    cells.forEach((cell) => {
      cell.addEventListener("mouseleave", optionChoice);
    });
    currentState = true;
  } else {
    cells.forEach((cell) => {
      cell.removeEventListener("mouseleave", optionChoice);
    });
    currentState = false;
  }
}

//Creating function and events for different color choices

blackColor.addEventListener("click", function () {
  colorTheme = "black";
});
RandomColors.addEventListener("click", function () {
  colorTheme = "rainbow";
});
colorPickButton.addEventListener("click", function () {
  colorTheme = "colorPickButton";
});
eraserButton.addEventListener("click", function () {
  colorTheme = "eraser";
});

function optionChoice(e) {
  switch (colorTheme) {
    case "rainbow":
      let randomN = Math.floor(Math.random() * 360);
      colorPick = `hsl(${randomN}, 100%, 50%)`;
      e.target.style.backgroundColor = colorPick;
      break;
    case "black":
      colorPick = "black";
      e.target.style.backgroundColor = colorPick;
      break;
    case "colorPickButton":
      let userPick = document.getElementById("userPick");
      colorPick = userPick.value;
      e.target.style.backgroundColor = colorPick;
      break;
    case "eraser":
      colorPick = "white";
      e.target.style.backgroundColor = colorPick;
      break;
  }
}

function changeGridSize() {
  let currentGrid = document.querySelectorAll(".cell");
  currentGrid.forEach((div) => {
    return div.remove();
  });
  divCreator(slider.value);
}

slider.addEventListener("mouseup", changeGridSize);

resetButton.addEventListener("click", function () {
  let currentGrid = document.querySelectorAll(".cell");
  currentGrid.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});
