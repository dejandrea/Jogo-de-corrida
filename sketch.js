var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player,game;
var playerCount = 0;
var gameState = 0;


function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);

  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
