const container = document.querySelector("#sketchSpace");
const newSquare = document.createElement("div");


newSquare.className = "etchSquare";

container.appendChild(newSquare)
container.appendChild(newSquare.cloneNode(true))
container.appendChild(newSquare.cloneNode(true))
container.appendChild(newSquare.cloneNode(true))
container.appendChild(newSquare.cloneNode(true))
container.appendChild(newSquare.cloneNode(true))
container.appendChild(newSquare.cloneNode(true))
container.appendChild(newSquare.cloneNode(true))
container.appendChild(newSquare.cloneNode(true))
container.appendChild(newSquare.cloneNode(true))
container.appendChild(newSquare.cloneNode(true))
container.appendChild(newSquare.cloneNode(true))
container.appendChild(newSquare.cloneNode(true))

container.addEventListener("mouseover", () => {
  newSquare.style.backgroundColor = "lightblue"
  newSquare.style.borderWidth = "5px"
  newSquare.style.borderColor = "darkblue"


})
