import './style.css';
import Chaos from './Chaos';
import randomSquares from './randomSquares';

const chaos = new Chaos();

const draw = () => {
  randomSquares(chaos);
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
