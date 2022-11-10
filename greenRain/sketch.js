let d = [],
  yspeed = false;

function setup() {
  createCanvas(640, 800);

  for (var i = 0; i < width + 10; i++) {
    d[i] = new Drop();
  }
  createP("Press the mouse to back");
}

function draw() {
  background("black");

  for (let i = 0; i < d.length; i++) {
    d[i].update();
    d[i].display();
  }
}
