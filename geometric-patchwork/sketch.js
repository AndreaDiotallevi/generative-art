///////////////////////////////////////////////////////////////////////////////
// Andrea Diotallevi
// 08-02-2019
// Geometric Patchwork
// Controls: - Mouse click generates new patchwork with different color palette
//           - Keyboard buttons 1-9 change the number of grids
///////////////////////////////////////////////////////////////////////////////

// Set filename
let filename = "geometric-patchwork";

// Set canvas size
let width = 600;
let height = 600;

// Set colour palettes
let colourPalettes = [['#152A3B', '#0D809C', '#F5C03E', '#D63826', '#EBEBD6'],
 									   ['#0F4155', '#5399A1', '#8CA96B', '#CB5548', '#E7E6F5'],
 									   ['#E8614F', '#F3F2DB', '#79C3A7', '#668065', '#4B3331'],
										 ['#DBE5EC', '#336B87', '#2A3132', '#E94D35', '#EFAC55']];

// Declare current palette variable
let currentPalette;

// Set array and index variables to switch between colour palettes
let queueNumber = [0, 1, 2, 3, 4];
let paletteIndex = 2;

// Set initial number of grids and declare grid size
let gridsNumber = 10;
let gridSize;

function setup() {
	createCanvas(width, height);
	background(25);
	angleMode(DEGREES);
  noStroke();
	noLoop();
}

function draw() {
	gridSize = width / gridsNumber;
	currentPalette = colourPalettes[paletteIndex];
	for (let x = 0; x < width; x += gridSize) {
		for (let y = 0; y < height; y += gridSize) {
			queueNumber = shuffle(queueNumber);
      fill(currentPalette[queueNumber[0]]);
			rect(x, y, gridSize, gridSize);
      fill(currentPalette[queueNumber[1]]);
			switch(round(random(0.51, 9.49))) {
				  case 1: triangle(x, y, x + gridSize, y, x, y + gridSize); break;
					case 2: triangle(x, y, x + gridSize, y, x + gridSize, y + gridSize); break;
					case 3: triangle(x + gridSize, y + gridSize, x + gridSize, y, x, y + gridSize); break;
					case 4: triangle(x, y, x, y + gridSize, x + gridSize, y + gridSize); break;
				  case 5: arc(x + gridSize/2, y + gridSize/2, gridSize, gridSize, 0, 180); break;
					case 6: arc(x + gridSize/2, y + gridSize/2, gridSize, gridSize, 90, 270); break;
					case 7: arc(x + gridSize/2, y + gridSize/2, gridSize, gridSize, 180, 0); break;
					case 8: arc(x + gridSize/2, y + gridSize/2, gridSize, gridSize, 270, 90); break;
					case 9: ellipse(x + gridSize/2, y + gridSize/2, gridSize, gridSize); break;
			}
		}
	}
	paper();
}

// Function that simulates paper texture
function paper() {
  for (let i = 0; i < width; i += 2) {
    for (let j = 0; j < width; j += 2) {
      fill(random(175, 225), 25);
      rect(i, j, 2, 2);
    }
	}
}

// Mouse click generates new patchwork with different color palette
function mouseClicked() {
	paletteIndex =  (paletteIndex + 1) % 4;
	redraw();
}

// Keyboard buttons 1-9 change the number of grids
function keyPressed() {
	if (keyCode >= 49 && keyCode <= 57) {
		gridsNumber = Number(key);
		redraw();
	}
}
