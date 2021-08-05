class Obstacle {
  constructor(speed) {
    // random function: P5 -> random from 50 to up to 150
    this.width = random(50, 150);
    // random function: P5 -> random from 25 up to 75
    this.height = random(25, 75);
    // JUST Off Canvas
    this.x = WIDTH + this.width;
    // random function: P5 -> random from 0 up to the Canvas Height - the height of the obstacle
    this.y = random(0, HEIGHT - this.height);
    const theRealSpeed = 3 * speed;
    this.speed = theRealSpeed;
    this.color = "white";
    if (this.speed !== 3) {
      this.color = colors[Math.floor(random(0, colors.length))];
    }
  }

  draw() {
    // ALL OF THESE ARE P5 Functions
    push();
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
    this.x -= this.speed;
    pop();
  }

  get bottomSide() {
    return this.y + this.height;
  }

  get topSide() {
    return this.y;
  }

  get leftSide() {
    return this.x;
  }
  get rightSide() {
    return this.x + this.width;
  }
}
