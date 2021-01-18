var world;
var ball, engine, World
var Engine=Matter.Engine;
var Bodies=Matter.Bodies;
var Constraint=Matter.Constraint;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var score=0;
function setup() {
  createCanvas(400,650);
  engine=Engine.create();
  world=engine.world;
 ground1= new Ground(200,600,800,10);
division1= new Baseclass(200,500,10,200);
division2=  new Baseclass(300,500,10,200);
division3= new Baseclass(100,500,10,200);
division4= new Baseclass(5,500,10,200);
division5= new Baseclass(395,500,10,200);
plinko1= new Ball(50,300,10,10);
plinko2= new Ball(200,300,10,10);
plinko3= new Ball(350,300,10,10);
plinko4= new Ball(120,200,10,10);
plinko5= new Ball(270,200,10,10);
plinko6= new Ball(350,100,10,10);
plinko7= new Ball(200,100,10,10);
plinko8= new Ball(50,100,10,10);
}

function draw() {
  background(20);
  Matter.Engine.update(engine);
  ground1.display();
 plinko1.display();
 plinko2.display();
 plinko3.display();
 plinko4.display();
 plinko5.display();
 plinko6.display();
 plinko7.display();
 plinko8.display();
  ground1.display();
 division1.display();
 division2.display();
 division3.display();
 division4.display();
 division5.display();
 for (var j=40; j<=this.width; j=j+50){
  plinkos.push(new Ball(j,75));
}
for (var j=15; j<=width-10; j=j+50)
{
  plinkos.push(new Ball(j,175));
}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  score++;
}

for (var j = 0; j < particles.length; j++) {

  particles[j].display();
}
for(var k=0; k<divisions.length;k++){
  divisions[k].display();
}
  drawSprites();
}