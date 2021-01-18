class Baseclass{
    constructor(x,y,width, height){
        var options={
            isStatic: true,
            density:1,
            friction:1,
            restitution:1
        };
this.body=Matter.Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
Matter.World.add(world,this.body);

    }
    display(){
var pos=this.body.position;
var angle=this.body.angle;

push();
strokeWeight(4);
stroke("pink");
rectMode(CENTER);
   translate(pos.x,pos.y);
   rotate(angle);
    rect(0,0,this.width,this.height);
    pop();
    }
}