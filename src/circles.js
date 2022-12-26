const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const navbar = document.getElementsByTagName("nav")[0];
const colors = ['#9400D3', '#4B0082', '#0000FF', '#00FF00','#FFFF00', '#FF7F00', '#FF0000'];
window.requestAnimationFrame = window.requestAnimationFrame ||
                               window.mozRequestAnimationFrame ||
                               window.webkitRequestAnimationFrame ||             
                               window.msRequestAnimationFrame;
                  
function init() {
  canvas.width = window.innerWidth;
  canvas.height = parseInt(
    window.innerHeight - navbar.getBoundingClientRect().height
  );

  const particles = generateParticles();
  particles.forEach(particle => {
    particle.draw();
  });

  /*
    calcute the remaining viewport by subtracting the height of the window the height of the navbar
    */
}

class Particle {
  constructor() {
    this.x = Math.floor(Math.random() * canvas.width);
    this.y = Math.floor(Math.random() * canvas.height);
    this.size = Math.floor(Math.random() * 6);
    this.color = '#FFF';
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill(),
    ctx.stroke();
  }
}
const generateParticles = () => {
  const particles = [];

  for (let i = 0; i < 150; i++) {
    const particle = new Particle;
    particles.push(particle);
  }

  return particles;
}

const clear = () => {
  ctx.clearRect(0,0,canvas.width, canvas.height)
}

const update = () => {
  clear();
  const particles = generateParticles();
  particles.forEach(particle => {
    particle.draw();
  });
}

init();
window.onscroll = () => {
update()
}