import Typed from 'typed.js';
import confetti from 'canvas-confetti';

new Typed('#heading', {
    strings: ["Hey there!", "I'm Amru..😎", "Programming learner", "Nice to meet you 😁"],
    typeSpeed: 78,
    backSpeed: 98,
    cursorChar: "_",
    loop: true,
  });

const form = document.getElementById("form");

form.addEventListener("keydown", (e)=>{
  if(e.key === "Enter") {
    const myCanvas = document.createElement("canvas");
    document.body.appendChild(myCanvas);
    confetti.create(myCanvas, {
      resize: true,
      useWorker: true
    });
    confetti({
      particleCount: 1000,
      spread: 300
    });
    myCanvas.remove();
  }

})

const img = document.querySelector('.twitter');
img.addEventListener('click', (event) => {
  window.open('https://www.twitter.com', '_blank');
});