///////////////////////////////////////////////////////////////////////////////
// Andrea Diotallevi
// 27-01-2019
// Moonlight
// https://github.com/AndreaDiotallevi
///////////////////////////////////////////////////////////////////////////////

int w = 900;
float r = w / 2;
int t = 0;

void setup() {
  size(900, 900);
  background(0, 6, 60);
  stroke(255, 80);
}

void draw() {
  float a = noise(t + 9) * r;
  float b = noise(w) * r;
  float c = noise(t) * 6;
  float d = noise(t + 60) * 6;
  line(cos(c) * a + r, sin(c) * a + r, cos(d) * b + r, sin(d) * b + r);
  t++;
}
