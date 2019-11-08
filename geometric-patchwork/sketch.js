// Author:    Andrea Diotallevi
// Instagram: andreadiotalleviart - https://www.instagram.com/andreadiotalleviart/
// Date:      08/02/2019
// Controls:  Mouse click generates new patchwork with different color palette.
//            Keyboard buttons 1-9 change the number of grids.
// Inspired by Manoylov AC's "Semi Circle Patchwork" - https://www.openprocessing.org/sketch/510598

var colorPalettes = [['#152A3B', '#0D809C', '#F5C03E', '#D63826', '#EBEBD6'],
 									   ['#0F4155', '#5399A1', '#8CA96B', '#CB5548', '#E7E6F5'],
 									   ['#E8614F', '#F3F2DB', '#79C3A7', '#668065', '#4B3331'],
										 ['#DBE5EC', '#336B87', '#2A3132', '#E94D35', '#EFAC55']];
var queueNumber = [0, 1, 2, 3, 4];
var num = 10;
var i = 2;
var size, currentPalette, l;

function setup() {
	size = min(windowWidth, windowHeight, 500);
	createCanvas(size, size);
	background(25);
	angleMode(DEGREES);
	noLoop();
}

function draw() {
	noStroke();
	l = size / num;
	currentPalette = colorPalettes[i];
	for (var x = 0; x < size; x += l) {
		for (var y = 0; y < size; y += l) {
			queueNumber = shuffle(queueNumber);
      fill(currentPalette[queueNumber[0]]);
			rect(x, y, l, l);
      fill(currentPalette[queueNumber[1]]);
			switch(round(random(0.51, 9.49))) {
				  case 1: triangle(x, y, x + l, y, x, y + l); break;
					case 2: triangle(x, y, x + l, y, x + l, y + l); break;
					case 3: triangle(x + l, y + l, x + l, y, x, y + l); break;
					case 4: triangle(x, y, x, y + l, x + l, y + l); break;
				  case 5: arc(x + l/2, y + l/2, l, l, 0, 180); break;
					case 6: arc(x + l/2, y + l/2, l, l, 90, 270); break;
					case 7: arc(x + l/2, y + l/2, l, l, 180, 0); break;
					case 8: arc(x + l/2, y + l/2, l, l, 270, 90); break;
					case 9: ellipse(x + l/2, y + l/2, l, l); break;
			}
		}
	}
	paper();
}

function paper() {
  for (var i = 0; i < size; i += 2) {
    for (var j = 0; j < size; j += 2) {
      fill(random(175, 225), 25);
      rect(i, j, 2, 2);
    }
	}
}

function mouseClicked() {
	i =  (i + 1) % 4;
	redraw();
}

function keyPressed() {
	if (keyCode >= 49 && keyCode <= 57) {
		num = Number(key);
		redraw();
	}
}
