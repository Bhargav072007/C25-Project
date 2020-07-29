class Paper {
  constructor(x, y, radius) {

      var options = {
          restituiton: 0,
          friction: 1.0,
          density: 1.2
      }

      this.body = Bodies.circle(x, y, radius, options)
      this.radius = radius;

      this.image = loadImage("pics/paper.png")

      World.add(world, this.body);
  }
  display() {
      var pos = this.body.position;
      var angle = this.body.angle;

      push()
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("white");
      image(this.image, 0, 0, 75, 75);
      pop()
  }
}
  