import p5 from 'p5';
import Circle from './Circle';
import './style.css';

const sketch = (s) => {
  let a = 0.0;
  let inc = s.TWO_PI / 25.0;

  const list_of_colors = ['skyblue', 'darkturquoise', 'aquamarine'];

  s.setup = function () {
    s.createCanvas(window.innerWidth, window.innerHeight);
    // s.noLoop();
    s.frameRate(1);
  };

  s.draw = () => {
    s.background(0);

    let color_1, color_2, color;

    for (let i = 0; i < s.width; i++) {
      if (i % 15 === 0) {
        color_1 = s.random(list_of_colors);
        color_2 = s.random(list_of_colors);
        color = s.lerpColor(s.color(color_1), s.color(color_2), s.random());
      }
      s.stroke(color);
      s.strokeWeight(3);
      s.line(
        i * 4,
        s.height / 2 + s.cos(a) * s.height * 0.3,
        i * 4,
        s.height / 2 + s.cos(a) * s.height * 0.3
      );

      a = a + inc * 0.5;
    }
  };

  s.windowResized = () => {
    s.resizeCanvas(s.windowWidth, s.windowHeight);
  };
};

new p5(sketch);
