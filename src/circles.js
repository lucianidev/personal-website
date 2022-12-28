const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const navbar = document.getElementsByTagName("nav")[0];
window.requestAnimationFrame = window.requestAnimationFrame ||
                               window.mozRequestAnimationFrame ||
                               window.webkitRequestAnimationFrame ||             
                               window.msRequestAnimationFrame;
                  
function init() {
  canvas.width = window.innerWidth;
  canvas.height = parseInt(
    window.innerHeight - navbar.getBoundingClientRect().height
  );

  /*
    calcute the remaining viewport by subtracting the height of the window the height of the navbar
    */
}

class Particle {
  constructor() {
    Math.floor()
    this.x = Math.floor(Math.random() * canvas.width);
    this.y = Math.floor(Math.random() * canvas.height);
    this.size = Math.floor(Math.random() * 6);
    this.color = '#FFF';
    this.speed = Math.random() * (5 - 1) + 1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill(),
    ctx.stroke();
  }

  fall() {
    this.y = this.y += this.speed;
    this.draw();
  }
}
const generateParticles = () => {
  const particles = [];

  for (let i = 0; i < 200; i++) {
    const particle = new Particle;
    particles.push(particle);
  }

  return particles;
}

init();

const particles = generateParticles();

const initializeEffect = () => {
  particles.forEach(particle => {
    particle.draw();
  });
}

const clear = () => {
  ctx.clearRect(0,0,canvas.width, canvas.height)
}

const update = () => {
  clear();
  particles.forEach(particle => {
    particle.fall();
    if(particle.y > canvas.height) {
      particle.y = 0;
    }
    particle.draw();
  });
  requestAnimationFrame(update)
}

console.log(particles)
initializeEffect();

update()