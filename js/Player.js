class Player {
  constructor() {
    // initial x value
    this.x = 0;
    // initial y value
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.speed = 5;
    this.rightBoundary = WIDTH - this.width;
    this.bottomBoundary = HEIGHT - this.height;
  }

  draw() {
    this.move();
    this.maintainBoundaries();
    // 👇 THIS IS P5 Function
    image(andresPicture, this.x, this.y, this.width, this.height);
  }

  maintainBoundaries() {
    if (this.x >= this.rightBoundary) {
      //   this.x = this.rightBoundary;
      this.x = 0;
    }
    if (this.y >= this.bottomBoundary) {
      //   this.y = this.bottomBoundary;
      this.y = 0;
    }
    if (this.x < 0) {
      this.x = this.rightBoundary;
    }
    if (this.y < 0) {
      this.y = this.bottomBoundary;
    }
  }

  move() {
    // THESE ARE P5 Functions
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.speed;
    }
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
