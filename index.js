//have puzzle have default 8x8 grid on opening page for first time


const container = document.querySelector("#container");
container.style.cssText = "margin: 0 auto; width: 50%;";

let title = document.createElement("h1");
title.textContent = "Let's Drawing!";
title.style.cssText = "margin: 0 auto; display: block; padding: 0px; font-size: 50px; text-align: center; margin-top: 25px; margin-bottom: 25px;";

let resetButton = document.createElement("button");
resetButton.style.cssText = "margin: 0 auto; display: block; padding: 0px;  width: 25%; height: 50px; margin-bottom: 25px;";
resetButton.textContent = "Reset";
resetButton.addEventListener("click", getGridSize);

let grid = document.createElement("div");
grid.style.cssText = "margin: 0 auto; width: 800px; height: 800px;";


const gridWidth = 960;
const gridHeight = 960;
const rows = 8;
const cols = 8;

function changeColor(e) {
  event.target.style.backgroundColor = "blue";
}

function getGridSize(e) {
  let choice = window.prompt("Choose grid size: 1 - 100", "8");
  let num = parseFloat(choice);

  if(num < 1) num = 1;
  if(num > 100) num = 100;
  resetGrid(num);
}

function resetGrid(num) {
  grid.textContent = ""; //clear all children
  let boxWidth = "width: " + (800/num - 2) + "px;";
  let boxHeight = "height: " + (800/num - 2) + "px;";
  const boxStyle = "display: inline-block; background-color: white; border: 1px solid black;" + boxWidth + boxHeight;
  for(let i = 0; i < num; i++) {
    let row = document.createElement("div");
    row.className = "row";
    row.style.cssText = "margin: 0px; padding: 0px; font-size: 0px; width: 100%;"
    for(let j = 0; j < num; j++) {
      let box = document.createElement("div");
      box.className = "box";
      box.style.cssText = boxStyle;
      box.addEventListener("mouseenter", changeColor);
      row.appendChild(box);
    }
    grid.appendChild(row);
  }
}

resetGrid(8);

container.appendChild(title);
container.appendChild(resetButton);
container.appendChild(grid);

