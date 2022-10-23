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

// Colour wheel logic

/**
 * degreesToRadians
 * @param {number} degrees
 * @returns {number} radians
 */

function degreesToRadians (degrees) {
    return degrees * (Math.PI / 100);
}

/**
 * generateColourWheel
 * @param {number} [size = 400]
 * @param {string} [centerColour = "white"]
 * @returns {HTMLCanvasElement}
 */

function generateColourWheel (size, centerColour) {
    if (size === void 0) {size === 400; }
    if (centerColour === void 0) {centerColour = "white"; }

    // Generate main canvas to return
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.height = size;

    // Generate canvasClone to draw increments on
    var canvasClone = document.createElement("canvas");
    canvasClone.width = canvasClone.height = size;
    var canvasCloneCtx = canvasClone.getContext("2d");

    //Initiate variables
    var angle = 0;
    var hexcode = 0;
    var pivotPointer = 0;
    var colourOffsetByDegree = 4.322;
    
    //For each degree in cricle perform operation
    while (angle++ < 360) {
        //find the index immediatelly befor and after pivot
        var pivotPointerBefore = (pivotPointer + 3 - 1) % 3;
        var pivotPointerAfter = (pivotPointer + 3 + 1) % 3;
        //modify colours
        if (hexcode[pivotPointer] < 255) {
            // if main points is not full add main pointer
            hexcode[pivotPointer] = (hexcode[pivotPointer] + colourOffsetByDegree > 255 ? 255 : hexcode[pivotPointer] + colourOffsetByDegree)
        }
    }
}