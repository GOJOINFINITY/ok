function setup() {
  createCanvas(800,400);
 noname= createSprite(400, 200, 50, 50);
 noname123 = createSprite(67,76,87,87);
 noname2 = createSprite(120,84,13,52)
 noname3 = createSprite(650,84,73,23)
 noname2.velocityX = 4
}

function draw() {
  background(255,255,43); 
  noname.x=mouseX
  noname.y=mouseY
  if(colorchanger(noname,noname123)){
    noname.shapeColor="black"
    noname123.shapeColor="black"
  }else{
    noname.shapeColor="blue"
    noname123.shapeColor="blue"
  }

  if(colorchanger(noname2, noname3)){
    noname2.rotation=88
    noname2.velocityX=0
    noname2.velocityY=-4
  }


  drawSprites();
}

