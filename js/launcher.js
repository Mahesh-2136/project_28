class launcher{
    constructor(b1 , b2) {
        var options = {
           bodyA: b1 ,
           pointB: b2 ,
           stiffness: 2

        }
        this.st =Matter.Constraint.create(options);
        
        World.add(world, this.st);
      }
      throw(){
          this.st.bodyA = null;
      }
      
      display(){
          push()
          strokeWeight(5)
         
          if (this.st.bodyA != null){

          
       line(this.st.bodyA.position.x,
            this.st.bodyA.position.y,
            this.st.pointB.x,
            this.st.pointB.y)
            
       }
       pop()
       }
}