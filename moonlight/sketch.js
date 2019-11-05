///////////////////////////////////////////////////////////////////////////////
// Andrea Diotallevi
// 27-01-2019
// Moonlight
///////////////////////////////////////////////////////////////////////////////

// Set filename
let filename = "moonlight";

// Set canvas size
let width = 600;
let height = 600;

// Set noise seed value
let seed = 1;

// Set time variables
let time = 0;
let timeIncrement = 1;
let timeLimit = 1000;

// Set frame rate
let fps = 30;

// Set moon radius and declare noise radius
let moonRadius = width / 4;
let noiseRadius;

// Declare angles
let angle1, angle2;

// Declare points coordinates
let x1, y1, x2, y2;

function setup() {
	createCanvas(width, height);
	background(0, 6, 60);
	stroke(255, 80);
	noiseSeed(seed);
	frameRate(fps);
}

function draw() {
	translate(width / 2, height / 2);
	updateCoordinates();
	line(x1, y1, x2, y2);
	time += timeIncrement;
	saveFinalImage();
}

function updateCoordinates() {
	noiseRadius = noise(time + 9) * width / 2;
	angle1 = noise(time) * 6;
  angle2 = noise(time + 60) * 6;
	x1 = cos(angle1) * noiseRadius;
	y1 = sin(angle1) * noiseRadius;
	x2 = cos(angle2) * moonRadius;
	y2 = sin(angle2) * moonRadius;
}

function saveFinalImage() {
	if (time == timeLimit) {
		noLoop();
		outputFilename = `${filename}-${seed}.png`;
		save(outputFilename);
		console.log(outputFilename);
	}
}
