var vertices = 100;
var height;
var width;
var baseRadius = 200;
var offset = 0;
var noiseScale = 150;
var speed = 0.005;

function setup() {
  height = document.getElementById('hero').clientHeight;
	width = document.getElementById('hero').clientWidth;
  frameRate(60);
	var canvas = createCanvas(width, height);
	canvas.parent("hero");
	background(0);
}

function draw() {
  background(102);
  push();
  translate(width*0.5, height*0.5);
  rotate (PI / 6)
  blob (0, 0, baseRadius, vertices, 6);
  pop();
}

function blob (x, y, baseRadius, npoints, sections) {
  var angle = TWO_PI / npoints;
  beginShape();

  for (var i = 0; i < sections; i+=2)
  {
    for (var a = 0; a < TWO_PI / sections; a += angle) {
      var radius = baseRadius + noise (frameCount * speed /*+ i * (TWO_PI / sections) */+ a) * noiseScale;
      var sx = x + cos(i * (TWO_PI / sections) + a) * radius;
      var sy = y + sin(i * (TWO_PI / sections) + a) * radius;
      curveVertex(sx, sy);
    }
    for (var a = 0; a < TWO_PI / sections; a += angle) {
      var radius = baseRadius + noise (frameCount * speed /*+ i * (TWO_PI / sections) */+ TWO_PI / sections - a) * noiseScale;
      var sx = x + cos((i + 1) * (TWO_PI / sections) + a) * radius;
      var sy = y + sin((i + 1) * (TWO_PI / sections) + a) * radius;
      curveVertex(sx, sy);
    }
  }
  endShape(CLOSE);
}
