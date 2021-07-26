var backgroundImg;
var iss;
var hasDocked = false;
var spacecraft;

function preload(){
  backgroundImg= loadImage("spacebg.jpg");
  IssImg = loadImage("iss.png");
  spacecraftImg1=loadImage("spacecraft1.png");
  spacecraftImg2=loadImage("spacecraft2.png");
  spacecraftImg3=loadImage("spacecraft3.png");
  spacecraftImg4=loadImage("spacecraft4.png");
  
}
function setup() {
  createCanvas(800,400);


  Iss = createSprite(400, 185, 50, 50);
  Iss.addImage(IssImg);
  Iss.scale=0.7;
  Iss.debug= true;
  Iss.setCollider("circle",0,0,70);

  spacecraft = createSprite(355, 330, 50, 50);
  spacecraft.addImage(spacecraftImg1);
  spacecraft.scale=0.29;   
  spacecraft.debug= true;
  spacecraft.setCollider("circle",0,0,160);
  //trex.setCollider("rectangle",0,0,trex.width,trex.height);

  Iss.depth = spacecraft.depth+2;


  //randomVal= Math.round(random(340,400));
}


function draw() {
  background(backgroundImg);  

  if(!hasDocked){ 
    spacecraft.x = spacecraft.x + random(-1,1); 
    
    if(keyDown("UP_ARROW")){ 
      spacecraft.y = spacecraft.y -2; 
    } 

    if(keyDown("LEFT_ARROW")){ 
      spacecraft.addImage(spacecraftImg4); 
      spacecraft.x = spacecraft.x - 1; 
    } 

    if(keyDown("RIGHT_ARROW")){ 
      spacecraft.addImage(spacecraftImg3); 
      spacecraft.x = spacecraft.x + 1; 
    } 
    if(keyDown("DOWN_ARROW")){ 
      spacecraft.addImage(spacecraftImg2); 
      spacecraft.y = spacecraft.y +2; 
    } 
    console.log(spacecraft.x,spacecraft.y);
  }

/*
    if(keyDown(LEFT_ARROW)){
      spacecraft.x = spacecraft.x-2
      spacecraft.addImage(spacecraftImg4);
      spacecraft.scale=0.29;   
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.x= spacecraft.x+2
      spacecraft.addImage(spacecraftImg3);
      spacecraft.scale=0.29;   
    }

    if(keyDown(DOWN_ARROW)){
      spacecraft.y= spacecraft.y+2
      spacecraft.addImage(spacecraftImg2);
      spacecraft.scale=0.29;   
    }

    if(keyDown(UP_ARROW)){
      spacecraft.y= spacecraft.y-2
      spacecraft.addImage(spacecraftImg1);
      spacecraft.scale=0.29;   
    }
    console.log(spacecraft.x,spacecraft.y);
  }
*/

  if(spacecraft.isTouching(Iss)){
    spacecraft.x = spacecraft.x + random(0,0); 
    //spacecraft.y = spacecraft.y;
    textSize(25);
    fill("white");
    text("Docking Sucessful!",550,360);
  }

  drawSprites();
}