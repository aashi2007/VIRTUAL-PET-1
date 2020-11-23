//Creating variables here
var dog, dogImg, happydogImg, happydog;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("Sprites/dogImg.png");
  happydogImg = loadImage("Sprites/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250, 250);
  dog.addImage(dogImg);
  dog.scale = 0.5;
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}

function draw() {  
     
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(happydogImg);
    //dog.scale = 0.5
  }
  drawSprites();
  //add styles here
  text("Note: Press UP_ARROW Key To Feed Drago Milk!", 200, 20);
  textSize(10);
  fill("red");
}
  //Function to read values from database
  function readStock(data)
  {
    foodS = data.val();
  }
 //Function to write values in Database
  function writeStock(x)
  {
    database.ref('/').update
    ({
        Food:x
    })
  }