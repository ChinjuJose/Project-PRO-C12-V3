var garden, rabbit, apple, oLeaves, rLeaves;
var gardenImg, rabbitImg, appleImg, oLeavesImg, rLeavesImg;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  oLeavesImg = loadImage("orangeLeaf.png");
  rLeavesImg = loadImage("redImage.png");
}

function setup() {

  createCanvas(400, 400);

  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x = mouseX;

  edges = createEdgeSprites();
  rabbit.collide(edges);

  var r = Math.round(random(1,3));

  if(frameCount%80 == 0){
    if(r==1){
      createApples();
    }else if(r==2){
      createOrangeLeaves();
    }else{
      createRedLeaves();
    }
  }

  drawSprites();
}

function createApples(){
  apple = createSprite(100,50,30,30);
  apple.addImage(appleImg);
  apple.x = Math.round(random(100,300));
  apple.velocityY = 3;
  apple.scale = 0.07;
  
}

function createOrangeLeaves(){
  oLeaves = createSprite(100,50,30,30);
  oLeaves.addImage(oLeavesImg);
  oLeaves.x = Math.round(random(100,300));
  oLeaves.velocityY = 3;
  oLeaves.scale = 0.08;
}

function createRedLeaves(){
  rLeaves = createSprite(100,50,30,30);
  rLeaves.addImage(rLeavesImg);
  rLeaves.x = Math.round(random(100,300));
  rLeaves.velocityY = 3;
  rLeaves.scale = 0.06;
}