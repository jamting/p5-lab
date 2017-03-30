https://www.youtube.com/watch?v=0jjeOYMjmDU

var angle = 0;
var width = 800;
var height = 800;

var slider;
var slider_length;

function setup() {
  createCanvas(800, 800);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01); 
  slider_length = createSlider(0, 0.7, 0.67, 0.01); 
}

function draw() {
  background(51);
  angle = slider.value();
  length = slider_length.value();
  stroke(255);
  translate(width / 2, height);
  branch(200);
}

function branch(len ) {
  line(0,0, 0, - len);
  translate(0, -len)
  
  if (len > 4) {
    push();
    rotate(angle);
    branch(len*length)
    pop();
    push();
    rotate(-angle);
    branch(len*length)
    pop();
  }  
}
