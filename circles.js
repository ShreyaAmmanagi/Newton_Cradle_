class objects {

constructor(x,y,radius){

    var options = {restitution:0.7,
                   density: 0.2,
                   friction: 0.5      
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world,this.body)
}
display(){
    fill("blue")
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,this.radius);
}


}