import './style.css';
import Chaos from './Chaos';
// import randomSquares from './randomSquares';

const chaos = new Chaos();

let size,
  maxDepth = 0;

chaos.init();
size = chaos.height * 0.5;

const drawTriangle = (depth) => {
  var angle = -Math.PI / 2;
  if (depth === 0) {
    chaos.context.beginPath();

    // move to top point of triangle
    chaos.context.moveTo(Math.cos(angle), Math.sin(angle));
    angle += (Math.PI * 2) / 3;

    // draw line to lower right point
    chaos.context.lineTo(Math.cos(angle), Math.sin(angle));

    // draw line to final point
    angle += (Math.PI * 2) / 3;
    chaos.context.lineTo(Math.cos(angle), Math.sin(angle));

    // fill will close the shape
    chaos.context.fill();
  } else {
    // draw the top triangle
    chaos.context.save();
    chaos.context.translate(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5);
    chaos.context.scale(0.5, 0.5);
    drawTriangle(depth - 1);
    chaos.context.restore();

    // draw the lower right triangle
    angle += (Math.PI * 2) / 3;
    chaos.context.save();
    chaos.context.translate(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5);
    chaos.context.scale(0.5, 0.5);
    drawTriangle(depth - 1);
    chaos.context.restore();

    // draw the lower left triangle
    angle += (Math.PI * 2) / 3;
    chaos.context.save();
    chaos.context.translate(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5);
    chaos.context.scale(0.5, 0.5);
    drawTriangle(depth - 1);
    chaos.context.restore();
  }
};

const draw = () => {
  chaos.clear();
  chaos.context.save();
  chaos.context.translate(chaos.width * 0.5, chaos.height * 0.6);
  chaos.context.scale(size, size);
  drawTriangle(maxDepth);
  chaos.context.restore();
};

document.body.addEventListener('keyup', (event) => {
  switch (event.code) {
    case 'Space':
      maxDepth += 1;
      draw();
      break;
    case 'KeyP':
      chaos.popImage();
    default:
      break;
  }
});
