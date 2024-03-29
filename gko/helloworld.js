
let circles;

let type
let typespin = [];


function makeTypespin() {
  let thisSpin = {x: mouseX,
                  y: mouseY,
                  speed: random(0, 0)};
  return thisSpin;
}

let me;
let blurb;
let poster;
let posterr;
let posterrr;
let posterrrr;
let posterrrrr;

function preload() {
  me = loadImage('data/menfrog.jpg');
  blurb = loadImage('data/taylarogicis.png');
  poster = loadImage('data/taymadeit.png');
  posterr = loadImage('data/taymadeit2.png');
  posterrr = loadImage('data/poster3.png');
  posterrrr = loadImage('data/poster4.png');
  posterrrrr = loadImage('data/poster5.png');
}

let look = 'This is Tayla Made.';
let hello = 'Hello World.';

let x1 = 0;
let x2 = 1500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225);
  smooth();
  textAlign(CENTER);

  circles = [
    makeCircle({
      radius: 80,
      increment: -4,
      string: 'we lcom e',
      color: color('blue'),
      center: {
        x: 80,
        y: 80
      },
      modifier: bouncer()
    })
  ]
}

const bouncer = () => {
  let xDirection = 1
  let yDirection = 1
  let xSpeed = 2.8
  let ySpeed = 1.5
  return ({
    center,
    radius
  }) => {
    center.x = center.x + xSpeed * xDirection
    center.y = center.y + ySpeed * yDirection
    if (center.x > width - radius || center.x < radius) {
      xDirection *= -1
    }
    if (center.y > height - radius || center.y < radius) {
      yDirection *= -1
    }
  }
}

function draw() {
  background(225);
  
  imageMode(CENTER);
  image(poster, 450+sin (frameCount*0.05)*100,
  300+cos(frameCount*0.06)*100);
  image(posterrrrr, 450+sin (frameCount*0.05)*100,
  600+cos(frameCount*0.04)*100);
  image(posterr, 1000+sin(frameCount*0.05)*100,
  350+cos(frameCount*0.05)*100);
  image(posterrr, 750+sin (frameCount*0.05)*100,
  450+sin(frameCount*0.05)*100);
  image(posterrrr, 980+sin (frameCount*0.05)*130,
  600+cos(frameCount*0.05)*100);
 
  if (mouseIsPressed) {
    image(blurb, mouseX, mouseY)
  }
  else {
  image(me, mouseX, mouseY, 170,200);
  }
  textAlign(CENTER);
  for (let i = 0; i < typespin.length; i++) {
    push();
    translate(typespin[i].x, typespin[i].y);
    rotate(frameCount*typespin[i].speed);
    textSize(200);
    fill(255,0,255);
    noStroke();
    ellipse(0,-5,60);
    scale(0.1, 0.1);
    stroke(0);
    strokeWeight(3);
    fill(0);
    text("TAYLA ROGIC", 0, 0);
    pop();
  }
  //image(posters, 500,300);
  textSize(80);
  stroke(0,0,255);
  strokeWeight(3);
  fill(0,0,255);
  textAlign(RIGHT);
  textFont("Helvetica");
  text(hello, x1, 100);  
  textAlign(LEFT);
  textFont("Helvetica");
  text(look, x2, 100);  
  x1+=5;
  x2-=5;  
  if(x1 > width + textWidth(look) ){
   x1 = 0; 
  }
  if( x2 < -textWidth(hello) ){
   x2 = 1500; 
  }
  textSize(50);
  circles.forEach(c => c.update())
}
const makeCircle = ({
  radius,
  increment,
  string,
  color,
  center,
  modifier = () => {}
}) => {
  let arcOffset = 0
  let circle = {
    arcOffset,
    radius,
    increment,
    center,
    color,
    string,
    modifier,
    update: function() {
      modifier(this)
      push()
      translate(center.x, center.y);
      var arcLength = (PI * radius) / 2 + arcOffset;
      var totalAngle = textWidth(string) / radius;
      fill(color)
      for (var i = 0; i < string.length; i++) {
        let currentvar = string.charAt(i);
        var w = textWidth(currentvar);
        arcLength += w / 2;
        var theta = arcLength / radius - totalAngle / 2;
        push();
        rotate(theta);
        translate(0, -radius);
        text(currentvar, 0, 0);
        pop();
        arcLength += w / 2;
      }

      arcOffset = arcOffset + increment % 360
      pop()
    }
  }

  return circle
}

function mousePressed() {
typespin.push(makeTypespin());
}
