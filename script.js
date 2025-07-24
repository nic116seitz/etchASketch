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
  const hexLetters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += hexLetters[Math.floor(Math.random() * 16)];
  }
  return color;
}

gridGen(usrDimension);

console.log("This is a random Color: " + randomColor())

