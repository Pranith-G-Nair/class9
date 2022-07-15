var box;
function setup() {
  createCanvas(600,600);
  box=createSprite(200,200,30,30)
}

function draw() 
{
  background(30);
  if(keyDown("right")){
    box.x=box.x+5
  }
drawSprites()
}




