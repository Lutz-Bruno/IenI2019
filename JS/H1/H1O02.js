function setup() {
  canvas = createCanvas(450,450);
  background('darkred');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  noStroke();
  fill('pink');
  triangle(450,0,450,450,0,225);

 strokeWeight(5);
 stroke('pink');
 fill('darkred');
beginShape();
vertex(225,155);
vertex(300,225);
vertex(225.335);
vertex(0,225);
endShape(CLOSE);
}
