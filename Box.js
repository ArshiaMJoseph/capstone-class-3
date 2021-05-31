class Box {
    constructor(x,y,width,height){
        var options = {
            friction :0.1,
            density:0.8,
            restitution:1.0,
        }
        this.body =  Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width =width;
        this.height = height;

    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        stroke("brown")
        strokeWeight(7);
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop()
    }
}