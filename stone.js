class Stone{
    constructor(x,y,width,height){

      var options = {
        'restitution':0.8,
        'friction':0.2,
        'length':-5,
        'density':1.0,
        'gravity':true
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.height = height;
      this.width = width;

      //this.image = loadImage("stone.png");
    }
  
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
    }
  }
  