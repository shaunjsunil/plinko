class Particle{
constructor(x,y){
var options={
density : 0.01,

}
this.x=x;
this.y=y;
this.r=10
this.body=Bodies.circle(x,y,this.r,options)
this.color=color(random(0,255),random(0,255),random(0,255))
World.add(world,this.body)
}
display(){
    var pos=this.body.position
    push()
    translate(pos.x,pos.y)
    fill(this.color)
    ellipse(0,0,this.r*2,this.r*2)
    pop()
}



}