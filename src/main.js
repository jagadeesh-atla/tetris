let bgMusic, clearSound, rotateSound, font;

let lastUpdateTime = 0;
let isAIPlaying = false;
let interval;

let maxScore = localStorage.getItem("maxTetrisScore") || 0;

let game;

function preload() {
  bgMusic = loadSound("Sounds/music.mp3");
  clearSound = loadSound("Sounds/clear.mp3");
  rotateSound = loadSound("Sounds/rotate.mp3");
  font = loadFont("Font/monogram.ttf");

  setupColors();
}

function setup() {
  createCanvas(500, 620);
  textFont(font);

  game = new Game(bgMusic, rotateSound, clearSound);

  setupHammerForMobile();

  frameRate(60);
}

function draw() {
  setIntervalForPlay();

  if (EventTriggered(interval)) game.MoveBlockDown();

  background(darkBlue);

  textSize(38);
  fill(255);
  text("Score", 365, 25);
  text(`Max: ${maxScore}`, 345, 45);
  text("Next", 370, 175);
  if (game.gameOver) {
    text("Game Over", 320, 450);
    localStorage.setItem("maxTetrisScore", maxScore);
    game.StopMusic();
  }

  drawUI();
  if (maxScore < game.score) maxScore = game.score;
}

function drawUI() {
  fill(lightBlue);
  stroke(255);
  strokeWeight(0.5);
  rect(320, 55, 170, 60, 10);

  let scoreText = game.score.toString();
  let textSizeVal = textWidth(scoreText);
  fill(255);
  textSize(38);
  text(scoreText, 320 + (170 - textSizeVal) / 2, 90);

  fill(lightBlue);
  stroke(255);
  strokeWeight(0.5);
  rect(320, 215, 170, 180, 10);

  game.Draw();
}

function keyPressed(event) {
  game.HandleInput(event);
}

function EventTriggered(interval) {
  const currentTime = millis() / 1000;
  if (currentTime - lastUpdateTime < interval) return false;

  lastUpdateTime = currentTime;
  return true;
}

function swiped(event) {
  switch (event.direction) {
    case Hammer.DIRECTION_DOWN:
      keyPressed({ keyCode: 32 });
      break;
    case Hammer.DIRECTION_LEFT:
      keyPressed({ keyCode: LEFT_ARROW });
      break;
    case Hammer.DIRECTION_RIGHT:
      keyPressed({ keyCode: RIGHT_ARROW });
      break;
    case Hammer.DIRECTION_UP:
      keyPressed({ keyCode: UP_ARROW });
      break;
  }
}

function setIntervalForPlay() {
  interval = isAIPlaying ? 0.00001 : 0.4;
}

function setupHammerForMobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    let hammer = new Hammer(document.body, { preventDefault: true });
    hammer.get("swipe").set({
      direction: Hammer.DIRECTION_ALL,
    });
    hammer.on("tap", () => keyPressed({ keyCode: UP_ARROW }));
    hammer.on("swipe", swiped);
  }
}
