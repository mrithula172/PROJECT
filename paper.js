class Paper{
    constructor (){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(200,200,20,options)  
        World.add(world,this.body)
    }
    display (){
       
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
     ellipse(0,0,20,20)
    }
}