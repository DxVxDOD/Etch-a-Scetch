// Grid logic.

const container = document.getElementById("container");

function makeCells (rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);

    for ( c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
}
makeCells(16, 16);

// function that shows which mode was last time use /is on
function clicked (e) {
    let cleans = Array.from(document.querySelectorAll(".btn"));
    cleans.forEach(clean =>clean.classList.remove("selected"));
    e.target.classList.add("selected");
}
const btns = Array.from(document.querySelectorAll(".btn"));
btns.forEach(btn => btn.addEventListener("click", clicked));

// gets the colour from the colour wheel
function getColour (e) {
    pickedColour = "";
    pickedColour += e.target.value;
    return pickedColour;
}
const colourPicker = document.getElementById("head");
colourPicker.addEventListener("click", getColour)

// function that paints the grid
function paint (e) {
    return e.target.style.backgroundColor = pickedColour;
}
// function that keeps painting the grid while holding the mouse button down
function painting () {
    const cells = Array.from(document.querySelectorAll(".grid-item"));
    cells.forEach(cell => cell.addEventListener("mousemove", paint));
}

// function that stops painting the grid after releasing the mouse button
function paintStop () {
    const cells = Array.from(document.querySelectorAll(".grid-item"));
    cells.forEach(cell => cell.removeEventListener("mousemove", paint));
}

// variables for the paint functions
const cells = Array.from(document.querySelectorAll(".grid-item"));
cells.forEach(cell => cell.addEventListener("click", paint));
cells.forEach(cell => cell.addEventListener("mousedown", painting));
cells.forEach(cell => cell.addEventListener("mouseup", paintStop));