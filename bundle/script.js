const canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),navbar=document.getElementsByTagName("nav")[0],colors=["#9400D3","#4B0082","#0000FF","#00FF00","#FFFF00","#FF7F00","#FF0000"];function init(){canvas.width=window.innerWidth,canvas.height=parseInt(window.innerHeight-navbar.getBoundingClientRect().height)}window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;class Particle{constructor(){this.x=Math.floor(Math.random()*canvas.width),this.y=Math.floor(Math.random()*canvas.height),this.size=Math.floor(6*Math.random()),this.color="#FFF"}draw(){ctx.beginPath(),ctx.arc(this.x,this.y,this.size,0,2*Math.PI),ctx.fillStyle=this.color,ctx.fill(),ctx.stroke()}}const generateParticles=()=>{let t=[];for(let e=0;e<50;e++){let a=new Particle;t.push(a)}return t},clear=()=>{ctx.clearRect(0,0,canvas.width,canvas.height)},update=()=>{clear();let t=generateParticles();t.forEach(t=>{t.draw()}),requestAnimationFrame(update)};init(),update();
