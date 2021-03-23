var canvas;
var music;

function preload(){
    
    music = loadSound("music.mp3");
}

var rect1 ;
var rect2 ;
var rect3 ;
var rect4 ;
var box ;
function setup(){
    canvas = createCanvas(800,600);

    rect1= createSprite(90,580,200,30)
    rect1.shapeColor ="blue"

    rect2= createSprite(300,580,200,30)
    rect2.shapeColor ="yellow"

    rect3= createSprite(510,580,200,30)
    rect3.shapeColor ="red"

    rect4= createSprite(720,580,200,30)
    rect4.shapeColor ="cyan"

    box = createSprite(random(20,750),280,20,20)
    box.shapeColor = "white"
    box.velocityX = 3
    box.velocityY = 3

}

function draw() {
    background(rgb(169,169,169));
   
      if(box.isTouching(rect1)){
     box.shapeColor = "blue"
     music.play
       box.bounceOff(rect1)
      }

      if(box.isTouching(rect2)){
        box.shapeColor = "yellow"
        music.play
        box.bounceOff(rect2)
      }

      if(box.isTouching(rect3)){
        box.shapeColor = "red"
        music.play
        box.bounceOff(rect3)
      }

      if(box.isTouching(rect4)){
        box.shapeColor = "cyan"
        music.play
        box.bounceOff(rect4)
      }

      edges=createEdgeSprites()
      box.bounceOff(edges)
         
  drawSprites()  //add condition to check if box touching surface and make it box
}
