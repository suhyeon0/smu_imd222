let drops = [];

function setup() {
  createCanvas(640, 360);
  d = new Drop();
}

function draw() {
  background(230, 230, 250);

  d.update();
  d.display();
}
