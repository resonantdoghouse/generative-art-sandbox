import './style.css';
import Chaos from './Chaos';

console.log(window.innerWidth);
const chaos = new Chaos();
console.dir(chaos.context);

const draw = () => {
  let x = Math.random() * (chaos.width - 100),
    y = Math.random() * (chaos.height - 100),
    w = 20 + Math.random() * 100,
    h = 20 + Math.random() * 100,
    r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  console.log(x);
  chaos.context.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
  console.log(chaos.context.fillStyle);
  chaos.context.fillRect(x, y, w, h);
};

document.body.addEventListener('keyup', (event) => {
  switch (event.code) {
    case 'Space':
      draw();
      break;
    case 'KeyP':
      chaos.popImage();
    default:
      break;
  }
});
