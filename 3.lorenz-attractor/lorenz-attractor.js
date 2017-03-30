var x = 1;
var y = 0;
var z = 0;

// https://www.youtube.com/watch?v=f0lkz2gSsIk

var a = 10;
var b = 28;
var c = 8/3;

var index = 0;


function setup() {
  createCanvas(800, 800, WEBGL);
  translate(width/2, height/2);

}

var points = [];

function draw() {
  var dt = 0.01;
  var dx = (a * (y - x)) * dt;
  var dy = (x * (b - z) - y) * dt;
  var dz = (x * y - c * z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;
  background(250);
  //ambientLight(100, 80, 80);
  //specularMaterial(250);
  scale(5);
  //print(x, y, z);
  for(i = 0; i < index; i++) {
    var ip = points[i];
    push(); 
    
    translate(ip.x, ip.y, ip.z);
    //scale(5);
    fill(51);
    sphere(1);
    pop();
  }
  //box(x,y, z);
  points[index++] = new Module(x, y, z);
  
}

function Module(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = y;
}