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

function clicked (e) {
    let cleans = Array.from(document.querySelectorAll(".btn"));
    cleans.forEach(clean =>clean.classList.remove("selected"));
    e.target.classList.add("selected");
}

const btns = Array.from(document.querySelectorAll(".btn"));
btns.forEach(btn => btn.addEventListener("click", clicked))

function getColour (e) {
    pickedColour = ""
    pickedColour += e.target.value;
    return pickedColour;
}

const colourPicker = document.getElementById("head");
colourPicker.addEventListener("click", getColour)


function paint (e) {
    return e.target.style.backgroundColor = pickedColour;
}

const cells = Array.from(document.querySelectorAll(".grid-item"));
cells.forEach(cell => cell.addEventListener("click", paint));
cells.forEach(cell => cell.addEventListener("mousedown", "mousemove", paint));
