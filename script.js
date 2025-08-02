const drawspace = document.querySelector("#sketchSpace");
let squareNum = 0;

let usrDimension = 16;

function gridGen(dimension) {
 for (squares = 0; squares < dimension * dimension; squares++) {
   const etched = document.createElement("div");
   etched.setAttribute("id", `squareNum${squareNum}`);
   etched.classList.add("etchSquare");
   drawspace.appendChild(etched);
   etched.style.width = `${668 / usrDimension}px`;
   etched.style.height = `${668 / usrDimension}px`;
   drawspace.appendChild(etched)
   squareNum++
 };
attachListener();
};

function attachListener(){ 
 const square = document.querySelectorAll(".etchSquare");
 square.forEach((sqr) => {
  sqr.addEventListener("mouseover", (event) => {
    const itmId = event.target.id;
    console.log(itmId);
    colorSquare(itmId);
  });
 });
};

function colorSquare(id) {
const slctdSqr = document.querySelector(`#${id}`);
    console.log(slctdSqr);
    slctdSqr.style.backgroundColor = "" + randomColor();
};

function randomColor(){
  const hexLetters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += hexLetters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// square.addEventListener("hover", )
gridGen(usrDimension);

console.log("This is a random Color: " + randomColor())


