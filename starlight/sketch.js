// Andrea Diotallevi
// 03/02/2019
// Starlight

let x, y, mx, my, r1, r2, size, t;

function setup() {
	size = min(windowWidth, windowHeight, 500);
	createCanvas(size, size);
	r1 = size / 3.5;
	r2 = r1 / 3;
	t = 0;
}

function draw() {
	translate(size / 2, size / 2);
	background(30, 50, 60);
	fill(255, 75);
	noStroke();	
	mx = map(mouseX, 0, size, PI / 18, PI); // Angle of rotation
	my = map(mouseY, 0, size, 0.005, 0.2); // Time increment
	t += my;
	for (var i = 0 + t; i < 2 * PI + t; i += PI / 18) {
		x = r1 * cos(i);
		y = r1 * sin(i);				
		ellipse(x + r2, x - r2, 10, 10);
		ellipse(y - r2, y + r2, 10, 10);
		triangle(x + r2, x - r2, y - r2, y + r2, 0, 0);
		rotate(mx - mx % (PI / 36)); // Lock to angles multiple of 5 degrees
	}
}