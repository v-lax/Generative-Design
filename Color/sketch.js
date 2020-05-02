function setup() {
    createCanvas(720, 720);
    cursor(CROSS);
  
    colorMode(HSB, 360, 100, 100);
    ellipseMode(CENTER);
    noFill();
  }

  function draw() {
    background(mouseY / 2, 100, 100);
  
    stroke(360 - mouseY / 2, 100, mouseY);
    strokeWeight(mouseX)
    ellipse(360,360,200,200)
    ellipse(360,360,150,150)
    ellipse(360,360,100,100)
    ellipse(360, 360,50,50);
  }