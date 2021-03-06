import p5 from 'p5';
import './style.css';

const s = (p) => {
  let xOff = 0;

  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
  };

  p.draw = function () {
    p.background(220);
    let x = p.map(p.noise(xOff), 0, 1, 0, p.width);
    xOff += 0.01;
    p.circle(x, p.height / 2 - 25, 50);
  };
};

new p5(s);
