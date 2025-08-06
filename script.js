const drawspace = document.querySelector("#sketchSpace");
let squareNum = 0;

let usrDimension = 16;


function gridGen(dimension) {
  drawspace.innerHTML = "";

  drawspace.style.gridTemplateColumns = `repeat(${dimension}), 1fr)`
  drawspace.style.gridTemplateRows = `repeat(${dimension}, 1fr)`

 for (let i = 0; i < dimension * dimension; i++) {
    const etched = document.createElement("div");
    etched.setAttribute("id", `squareNum${squareNum}`);
    etched.classList.add("etchSquare");
  }; 

  attachListener(),
  buttonlistener(),
  resetListener();
};

function attachListener(){ 
 const squareAll0 = document.querySelectorAll(".etchSquare");
 squareAll0.forEach((sqr) => {
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
  const squareAll1 = document.querySelectorAll(".etchSquare");
  squareAll1.forEach((sqr) => {
    const allIds = sqr.id;
    console.log(allIds)
    colorSquare(allIds, "white"); 
    drawspace.appendChild(sqr);
  });
};

function buttonlistener() {
  const squareAll2 = document.querySelectorAll(".etchSquare");
  const changeGrid = document.querySelector("#changeGrid");
  changeGrid.addEventListener("click", () => {
    const usrinput = parseInt(prompt("Select a dimension for your new Grid: ")); 
    squareAll2.forEach((drawSqr) => {
      drawSqr.remove()
    });
    gridGen(usrinput);
  });
};


function resetListener() {
  const reset = document.querySelector("#reset");
  const menu = document.querySelector("#menu")
  reset.addEventListener("click", resetFunction);
  menu.appendChild(reset)
};

gridGen(usrDimension);



