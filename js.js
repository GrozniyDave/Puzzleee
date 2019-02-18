"use strict";

const imgLink = "http://artyom-turx.com/sunsetSquare.jpg";

document.addEventListener("DOMContentLoaded", checkValues);

let container_width = 400;
let container_height = 400;
let numOfXPieces = document.querySelector("#xAxis").value;
let numOfYPieces = document.querySelector("#yAxis").value;

function checkValues() {
  document.querySelector("button").addEventListener("click", generateDropzone);
}

function generateDropzone() {
  let numOfXPieces = document.querySelector("#xAxis").value;
  let numOfYPieces = document.querySelector("#yAxis").value;

  document.querySelector(
    "#container"
  ).style.gridTemplateColumns = `repeat(${numOfXPieces}, 1fr)`;
  document.querySelector("#container").style.width = `${container_width}px`;
  for (let y = 0; y < numOfYPieces; y++) {
    for (let x = 0; x < numOfXPieces; x++) {
      let piece = document.createElement("div");
      piece.style.height = container_height / numOfYPieces + "px";
      piece.textContent = `${x}${y}`;
      piece.classList.add(`piece${x}${y}`);
      piece.style.outline = "1px solid #cdcdcd";

      document.querySelector("#container").appendChild(piece);
      //resets values in input fields
      document.querySelector("#xAxis").value = "";
      document.querySelector("#yAxis").value = "";
      console.log(`${x}${y}`);
      document.querySelector("img").src = imgLink;
    }
  }
}

let imgPiece = document.createElement("div");

imgPiece.style.height = container_height / numOfYPieces + "px";
imgPiece.classList.add("axis");

document.querySelectorAll(".dot").forEach(eachDot => {
  eachDot.style.left = `${Math.random() * 480 + 250}px`;
  eachDot.style.top = `${Math.random() * 480 + 250}px`;
});
