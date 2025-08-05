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
attachListener(), buttonlistener(), resetListener();
};

function attachListener(){ 
 const square = document.querySelectorAll(".etchSquare");
 square.forEach((sqr) => {
  sqr.addEventListener("mouseover", (event) => {
    const itmId = event.target.id;
    colorSquare(itmId, randomColor());
  });
 });
};

function colorSquare(id, color) {
const slctdSqr = document.querySelector(`#${id}`);
    slctdSqr.style.backgroundColor = "" + color;
};

function randomColor(){
  const hexLetters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += hexLetters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function resetFunction() { 
  const square = document.querySelectorAll(".etchSquare");
  square.forEach((sqr) => {
    const allIds = sqr.id;
    console.log(allIds)
    colorSquare(allIds, "white"); 
    drawspace.appendChild(sqr);
  });
};

function buttonlistener() {
  const changeGrid = document.querySelector("#changeGrid");
  changeGrid.addEventListener("click", () => {
    usrDimension = prompt("Select a dimension for your new Grid: ") 
    resetFunction(),
    gridGen(usrDimension);
  });
};


function resetListener() {
  const reset = document.querySelector("#reset");
  const menu = document.querySelector("#menu")
  reset.addEventListener("click", resetFunction);
  menu.appendChild(reset)
};

gridGen(usrDimension);



