const drawspace = document.querySelector("#sketchSpace");

let usrDimension = 16;

function gridGen(dimension) {
 for (row = 0; row < dimension; row++) {
    for(column = 0; column < dimension; column++) {
      const etched = document.createElement("div");
      etched.classList.add(".etchSquare");
      drawspace.appendChild(etched)
    }
  }
}

function randomColor(){
  return newColor = (Math.random() * 255) + 1
}
gridGen(16);

console.log(gridGen(usrDimension))
