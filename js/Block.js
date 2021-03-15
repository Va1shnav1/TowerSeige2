class Block{
   constructor(x, y, width, height) {
      var options = {
        restitution:0.4,
        friction:0.03,
        density:1.0
      }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("box.png");
    this.visibility=255;
    World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      if(this.body.speed<3){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width+3, this.height+3);
        pop();
      }else{
        push();
        this.visibility-=5;
        tint(255, this.visibility);
        image(this.image, this.body.position.x,  this.body.position.y, this.width, this.height);
        World.remove(world, this.body);
        pop();
      }
    }
  }