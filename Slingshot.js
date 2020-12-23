class Slingshot {
    constructor(bodyA,pointB){
      var options = {
        bodyA : bodyA,
        pointB :pointB,
        lenght : 100,
        stiffness: 0.7
      }
      this.body = Matter.Constraint.create(options) 
      this.pointB = pointB
      World.add(world,this.body)
    }
    
fly()
{

this.body.bodyA = null

}

    display(){
    if(this.body.bodyA)    
      line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
  }