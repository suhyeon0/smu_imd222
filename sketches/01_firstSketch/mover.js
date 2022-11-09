class Drop {
  constructor() {
    this.positon = createVector(
      random(-130, width),
      random(-500, -50),
      random(0, 20)
    );
    this.yspeed = map(this.positon.z, 0, 20, 1, 20);
    this.xspeed = map(this.positon.z, 0, 20, 1, 5);
  }

  update() {
    if (this.positon.y > height || this.positon.x > width) {
      if (this.positon.y > height) {
        strokeWeight(10);
        point(this.positon.x, height);
      }

      this.positon.y = random(-500, -50);
      this.positon.x = random(-130, width);
      this.yspeed = map(this.positon.z, 0, 20, 1, 20);
    }

    let gravity = map(this.positon.z, 0, 20, 0, 0.2);
    this.yspeed += gravity;
    this.positon.y += this.yspeed;
    this.positon.x += this.xspeed;
  }

  display() {
    stroke(138, 43, 226);
    line(this.positon.x, this.positon.y, this.positon.x, this.positon.y + 20);
  }
}
