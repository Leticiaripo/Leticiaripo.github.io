var cols, rows;
var scl = 20;
var w = 1500;
var h = 1500;
var width;
var height;

var flying = 0;

var terrain = [];


function setup() {
  height = document.getElementById('hero').clientHeight;
	width = document.getElementById('hero').clientWidth;
  frameRate(60);
	var canvas = createCanvas(width, height, WEBGL);
	canvas.parent("hero");
	background("#eee");
  cols = w / scl;
  rows = h/ scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}

function draw() {

  flying -= 0.005;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }

  //rotate (PI);
  background("#eee");
  translate (0, -80, -1000);
  rotateX(PI);
  fill("#ffb511");
  translate(-w/2, -h/2);
  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    endShape();
  }
}
