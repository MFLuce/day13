// sudo !== Pseudo !== Sudoku
// sudo -> superuser do!
// Pseudo

// Select something (to write the information to) ✅
// Put it on the screen (on the thing that we selected) -> write it / updating it

class Game {
  constructor() {
    this.player = new Player();
    this.score = 0;
  }

  draw() {
    background("orange");
    this.player.draw();
    if (frameCount % 60 === 0) {
      this.score++;
      scoreHolder.innerText = this.score;
    }
  }

  keyPressed() {}

  setup() {
    createCanvas(WIDTH, HEIGHT);
  }
}
