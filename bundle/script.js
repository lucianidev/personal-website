const canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),navbar=document.getElementsByTagName("nav")[0];function init(){canvas.width=window.innerWidth,canvas.height=parseInt(window.innerHeight-navbar.getBoundingClientRect().height)}window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;class Particle{constructor(){this.x=Math.floor(Math.random()*canvas.width),this.y=Math.floor(Math.random()*canvas.height),this.size=Math.floor(6*Math.random()),this.color="#FFF"}draw(){console.log(this.x.toString()),ctx.beginPath(),console.log(),ctx.arc(this.x,this.y,this.size,0,2*Math.PI),ctx.fillStyle=this.color,ctx.fill(),ctx.stroke()}}const generateParticles=()=>{let t=[];for(let e=0;e<200;e++){let a=new Particle;t.push(a)}return t};init();const particles=generateParticles(),initializeEffect=()=>{particles.forEach(t=>{t.draw()})},clear=()=>{ctx.clearRect(0,0,canvas.width,canvas.height)},update=()=>{clear(),particles.forEach(t=>{t.y=t.y+=4*Math.random(),t.y>canvas.height&&(t.y=0),t.draw()}),requestAnimationFrame(update)};initializeEffect(),update();const hamburger=document.getElementById("hamburger"),navBar=document.getElementsByClassName("links")[0];hamburger.addEventListener("click",()=>{navBar.classList.toggle("active")});
