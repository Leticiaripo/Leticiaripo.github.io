var cols, rows;
var scl = 40;
var w = 1500;
var h = 1500;
var width;
var height;
var radius = 3;

var flying = 0;

var terrain = [];


function setup() {
  height = document.getElementById('hero').clientHeight;
	width = document.getElementById('hero').clientWidth;
  frameRate(60);
	var canvas = createCanvas(width, height, WEBGL);
	canvas.parent("hero");
	background("#eee");
  cols = w / scl + 1;
  rows = h/ scl + 1;

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

  var mappedX = map (mouseX, width / 3, 2 * width / 3, 0, cols + 1) * 0.8;
  var mappedY = map (Math.min(mouseY, height), 0, height, 0, rows);

  var distance;
  var applied;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      distance = Math.abs(mappedX - (cols - x)) + Math.abs(mappedY - (rows - y));
      applied = map(distance, 0, radius, 0, 0.5);
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100) * applied;
      xoff += 0.2;
    }
    yoff += 0.2;
  }

  background("#eee");
  translate (0, -80, -1000);
  fill(191,191,191);
  stroke ("#fff");
  translate(-w/2, -h/2);
  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    endShape();
  }
  //fill ("#000");
  //ellipseMode(CENTER);
  //ellipse (mappedX * scl, mappedY * scl, scl * radius, scl * radius);
}
