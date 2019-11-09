// Andrea Diotallevi
// Instagram @ andreadiotalleviart - https://www.instagram.com/andreadiotalleviart/
// 09/03/2019
// Butterfly

let x, y, size, dia, increment, img;

function preload() {
	img = loadImage("butterfly.jpeg");
}

function setup() {
	size = min(windowWidth, windowHeight, 500);
	createCanvas(size, size);
}

function draw() {
	background(25);
	if (img.width < img.height) {
		translate((size - img.width * size / img.height) / 2, 0);
		scale(size / img.height);
	} else {
		translate(0, (size - img.height * size / img.width) / 2);
		scale(size / img.width);
	}
	circles();
}

function circles() {
	noStroke();
	increment = map(mouseX, 0, size, 0.5, 5);
	dia = 1;
	x = 0;
	while (x < img.width + dia) {
		y = 0;
		while (y < img.height + dia) {
			fill(img.get(x, y));
			ellipse(x, y, dia, dia);
			y += dia;
		}
		x += dia + increment / 2;
		dia += increment;
	}
}
