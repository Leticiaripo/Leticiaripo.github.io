var vertices = 10;
var width;
var height;

var terrain = [];


function setup() {
  height = document.getElementById('hero').clientHeight;
	width = document.getElementById('hero').clientWidth;
  frameRate(60);
	var canvas = createCanvas(width, height, WEBGL);
	canvas.parent("hero");
	background("#eee");


}

function draw() {
  background("#eee");
  
}
