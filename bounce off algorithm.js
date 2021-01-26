
var mrect;
var frect;
var frect1;
var frect2;


function setup() {
  
  createCanvas(800,400);

 mrect  = createSprite(400, 200, 50, 50);
 frect  = createSprite(300, 200, 50, 50);
 frect1 = createSprite(200,200,50,50);
 frect2 = createSprite(250,150,50,50);

 mrect.shapeColor="green";
 frect.shapeColor="green";
 frect1.shapeColor="green";
 frect2.shapeColor="green";
}


function draw() {
  background(255,255,255);  

  mrect.x=World.mouseX;
  mrect.y=World.mouseY;

  if(isTouching(mrect,frect2)){
    mrect.shapeColor="red";
    frect2.shapeColor="red";   
  }
  else{
    mrect.shapeColor="green";
    frect2.shapeColor="green";
  }

  //bounceoff
  bounce(mrect,frect1)
   

  drawSprites();
}

function isTouching(object1, object2){

  if(   object1.x -object2.x < object1.width/2 +object2.width/2 
    &&  object2.x -object1.x < object2.width/2 +object1.width/2
    &&  object1.y -object2.y < object1.height/2 +object2.height/2
    &&  object2.y -object1.y < object2.height/2 +object1.height/2){
      
    return true;
                                                                  }
  else {   
    return false;
      } 
}

function bounce (obj1,obj2){
     if( obj1.x -obj2.x < obj1.width/2 +obj2.width/2 
  &&  obj2.x -obj1.x < obj2.width/2 +obj1.width/2
  &&  obj1.y -obj2.y < obj1.height/2 +obj2.height/2
  &&  obj2.y -obj1.y < object2.height/2 +obj1.height/2){

    obj1.velocityY=obj1.velocityY*(-1);
    obj2.velocity=obj2.velocityY*(-1);
    
    }
  }
    
