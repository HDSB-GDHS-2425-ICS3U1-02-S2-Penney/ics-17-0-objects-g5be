/**** SETUP CODE ****/

// Call the init function when the HTML window loads
window.onload = init;

let canvas, ctx;

/**** OBJECT CREATION FUNCTIONS ****/

// Circle object function
function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// Create and draw a new circle with random attributes
function createCircle() {
  const x = randomInteger(0, canvas.width);
  const y = randomInteger(0, canvas.height);
  const radius = randomInteger(10, 50);
  const color = `rgb(${randomInteger(0,255)}, ${randomInteger(0,255)}, ${randomInteger(0,255)})`;
  
  const circle = new Circle(x, y, radius, color);
  circle.draw(ctx);
}

// Returns a random integer between min and max (inclusive)
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**** INIT & GAME LOOP ****/

function init() {
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  window.requestAnimationFrame(gameLoop);
}

function gameLoop(timestamp) {
  createCircle(); // Draw a new circle every frame
  window.requestAnimationFrame(gameLoop);
}



