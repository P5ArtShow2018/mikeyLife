var life
var speed = 3
var y = 25
var x = 5
function preload() {
  life = loadImage("Assets/life.jpg")
  space = loadSound("Assets/space.wav")
  earth = loadImage("Assets/Unknown.png")
}


function setup() {
  createCanvas(500,500)
  frameRate(20)
  space.loop()
  alert("LIFE")
}

function draw() {
  
  fill(255)
  fill(random(1,255),random(1,255),random(1,255))
  image(life,0,0)
  textSize(50)
  text("What is life?",x,100)
  text("space.com",x,50)
  text("What is life?",x,250)
  
  image(earth,width/2,height/2)
  if (x < 50){
    speed = 3
  }
  if (x > 200){
    speed = -3
  }
  x = x + speed
  if (y < 25){
    speed = 5
  }
  if (y > 350){
    speed = -5
  }
  fill(0,255,255)
  ellipse(random(1,500),random(1,500),10,10)
}