// sudo !== Pseudo !== Sudoku
// sudo -> superuser do!
// Pseudo

// Select something (to write the information to) ✅
// Put it on the screen (on the thing that we selected) -> write it / updating it

class Game {
  constructor() {
    this.player = new Player();
    this.score = 0;
    this.obstacles = [];
    this.gameDifficulty = 1;
    this.highScore = 0;
  }

  draw() {
    background("orange");
    this.player.draw();

    // frameCount - variable from P5
    // Framecount -> current page of the "flipbook"
    // if FrameCount is divisable by 90 (in this case 1.5seconds)
    if (frameCount % 90 === 0) {
      this.obstacles.push(new Obstacle(this.gameDifficulty));
    }

    this.obstacles.forEach((obstacle, index) => {
      obstacle.draw();

      if (obstacle.rightSide <= 0) {
        // we are removing the obstacle from the array
        this.obstacles.splice(index, 1);
        // add 1 to the score
        this.score++;
        // conditionally update the highscore
        if (this.highScore < this.score) {
          this.highScore = this.score;
        }
        // update / change the inner text of the span to the current score
        scoreHolder.innerText = this.score;
      }

      if (this.collisionCheck(this.player, obstacle)) {
        this.score = 0;
        this.gameDifficulty = 1;
        scoreHolder.innerText = this.score;
        // this.player.speed = ;
      }
    });

    if (frameCount % (60 * 5) === 0) {
      this.gameDifficulty += 1.5;
    }

    if (frameCount % (60 * 30) === 0) {
      noLoop();
    }
  }

  keyPressed() {}

  setup() {
    createCanvas(WIDTH, HEIGHT);
  }

  collisionCheck(player, obstacle) {
    // UA > TB
    // RA > LB
    // LA < RB
    // TA < UB

    if (player.bottomSide < obstacle.topSide) {
      return false;
    }

    if (player.rightSide < obstacle.leftSide) {
      return false;
    }

    if (player.leftSide > obstacle.rightSide) {
      return false;
    }

    if (player.topSide > obstacle.bottomSide) {
      return false;
    }

    return true;
  }
}
