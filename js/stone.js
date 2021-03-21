class Stone {
    constructor(x,y,r) {
        var options ={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2   
        }

        this.image = loadImage("images/stone.png");
        this.r=r
        this.body = Bodies.circle(x,y,this.r/2,options);
        World.add(world, this.body);
    }

    display() {
        var mangoPos = this.body.position;	
		push();
		translate(mangoPos.x, mangoPos.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2);
		pop()
    }
}