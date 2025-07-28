const drawspace = document.querySelector("#sketchSpace");
let squareNum = 0;

let usrDimension = 16;


function gridGen(dimension = usrDimension) {
 for (row = 0; row < dimension; row++) {
      const etched = document.createElement("div");
      etched.classList.add("etchSquare");
      drawspace.appendChild(etched);
  };
 styleSquares();
};

function styleSquares() {
const square = document.querySelector(".etchSquare");
square.style.width = `${700 / usrDimension}px`
square.style.height = `${700 / usrDimension}px`
square.style.borderWidth = "3px"
square.style.bordeColor = "black"
square.style.border = "solid"
drawspace.appendChild(square)
};

function randomColor(){
  const hexLetters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += hexLetters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// square.addEventListener("hover", )
gridGen();

console.log("This is a random Color: " + randomColor())

