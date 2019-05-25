///////////////////////////////////////////////////////////////////////////////
// Andrea Diotallevi
// 27-01-2019
// Moonlight
///////////////////////////////////////////////////////////////////////////////

let w = 900;
let r = w / 2;
let t = 0;
let a, b, c, d;

setup = _ => {
	createCanvas(w, w);
	background(0, 6, 60);
	stroke(255, 80);
}

draw = _ => {
	a = noise(t + 9) * r;
  b = noise(w) * r;
	c = noise(t) * 6;
  d = noise(t + 60) * 6;
	line(cos(c) * a + r, sin(c) * a + r, cos(d) * b + r, sin(d) * b + r);
  t++;
}