///////////////////////////////////////////////////////////////////////////////
// Andrea Diotallevi
// 03-02-2019
// Starlight
///////////////////////////////////////////////////////////////////////////////

// Set filename
let filename = "starlight";

// Set canvas size
let width = 600;
let height = 600;

// Set time variable
let time = 0;

// Set frame rate
let fps = 30;

// Declare radiuses
let radius1, radius2;

// Declare points coordinates
let x, y;

// Declare mouse mapping variables for interactive experience
let mx, my;

function setup() {
	createCanvas(width, height);
	radius1 = width / 3.5;
	radius2 = radius1 / 3;
	frameRate(fps);
	fill(255, 75);
	noStroke();
}

function draw() {
	translate(width / 2, height / 2);
	background(30, 50, 60);
	mx = map(mouseX, 0, width, PI / 18, PI); // Angle of rotation
	my = map(mouseY, 0, height, 0.005, 0.2); // Time increment
	for (var i = time; i < 2 * PI + time; i += PI / 18) {
		x = radius1 * cos(i);
		y = radius1 * sin(i);
		ellipse(x + radius2, x - radius2, 10, 10);
		ellipse(y - radius2, y + radius2, 10, 10);
		triangle(x + radius2, x - radius2, y - radius2, y + radius2, 0, 0);
		rotate(mx - mx % (PI / 36)); // Lock to angles multiple of 5 degrees
	}
	time += my;
}
