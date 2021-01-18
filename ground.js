class Ground{
    constructor(x,y,w,h){
       var option={
            isStatic: true,
            friction:1
        };
this.body=Matter.Bodies.rectangle(x,y,w,h, option);
this.width=w;
this.height=h;
Matter.World.add(world,this.body);
}
display(){
var pos=this.body.position;
rectMode(CENTER);
rect(pos.x,pos.y,this.width, this.height);
}
}