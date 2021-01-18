class Ball{
    constructor(x,y){
        var options={
            isStatic:true,
            density:1,
            friction:1,
            restitution:1
        };
        this.body=Matter.Bodies.circle(x,y,10,options);
        this.radius=10;
        Matter.World.add(world, this.body);
    }
display(){
   var pos=this.body.position;
   var angle=this.body.angle;
   rectMode(CENTER);
   push();
   strokeWeight(4);
stroke("pink");
   translate(pos.x,pos.y);
   rotate(angle);
   //console.log(angle);
    rect(0,0,this.width,this.height);
    pop();
    
}
}
