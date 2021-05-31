class Rope{
	constructor(bodyA,pointB){
		var sling_options ={
			
			bodyA: bodyA,
			pointB: pointB,
			
		}
		this.sling = Matter.Constraint.create(sling_options) 
		World.add(world,this.sling)
	
		this.pointB = pointB
	
	
	}
	
	display(){
		if(this.sling.bodyA){
			var pointA = this.sling.bodyA.position;
			var pointB = this.pointB;
				strokeWeight(4)
				line(pointA.x,pointA.y,pointB.x,pointB.y);
	
	
		}
	
	}
	
	fly(){
	
	this.sling.bodyA = null;
	
	
	
	
	}
	
	
	
	
	
	
	}
	