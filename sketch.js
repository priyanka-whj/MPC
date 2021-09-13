var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() 
{
  backgroundImage = loadImage("assets/background.png");
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();

  game = new Game();
  game.start();

}

function draw() 
{
  background(backgroundImage);
}

function windowResized() //It is called once whenever the browser window is resized
{
  resizeCanvas(windowWidth, windowHeight);
}
