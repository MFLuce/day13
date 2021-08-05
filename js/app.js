const game = new Game();

function draw() {
  game.draw();
}

function setup() {
  console.log("andresPicture:", andresPicture);
  console.log("SETUP");
  game.setup();
}

function keyPressed() {
  game.keyPressed();
}
