var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(860,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
   edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX
  var select_sprites = Math.round(random(1,3));
  if (frameCount % 80 == 0) {
  if (select_sprites  == 1) 
  { createApples(); }
  else if  (select_sprites == 2) {         createApples(); }
else {  createApples(); } }
  drawSprites();
  
  var select_sprites = Math.round(random(1,3));
  if (frameCount % 100 == 0) {
  if (select_sprites  == 1) 
  { createLeaves(); }
  else if  (select_sprites == 5) {
    createorangeLeaf(); }
else {  createorangeLeaf(); } }
  drawSprites();
}
function createApples() {
apple=createSprite(random(50,350),40,10,10)
apple.addImage(appleImg);
apple.scale=0.1;
apple.velocityY=5;
apple.lifetime=150;
}
function createorangeLeaf() {
orangeLeaf=createSprite(random(50,350),40,10,10)
orangeLeaf.addImageorangeLeafImg
orangeLeaf.scale=0.1;
orangeLeaf.velocityY=5;
orangeLeaf.lifetime=150;
}

  
// var select_sprites = Math(random(1,3));

// var select_sprites = Math.random(random(1,3));

// var select_sprites = Math.round(1,3);

// var select_sprites = Math.round(random(1,3));

  
  // if (frameCount % 50 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  // if (frameCount % 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }
  // }

  // if (frameCount / 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  // if (frameCount % 80 = 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }




