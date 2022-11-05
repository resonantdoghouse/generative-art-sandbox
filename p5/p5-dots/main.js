import p5 from 'p5';
import './style.css';

const list_of_colors = ['skyblue', 'darkmagenta', 'green'];

const sketch = (s) => {
  s.setup = function () {
    s.createCanvas(window.innerWidth, window.innerHeight);
    s.noLoop();
    s.noStroke();
  };

  s.draw = () => {
    s.background(255);
    for (let cluster = 0; cluster < 6; cluster += 1) {
      let x = s.random(10, s.width - 10);
      let y = s.random(10, s.height - 10);

      let color_1 = s.random(list_of_colors);
      let color_2 = s.random(list_of_colors);
      let color = s.lerpColor(s.color(color_1), s.color(color_2), s.random());
      s.fill('orange');
      s.ellipse(x, y, s.random(10, 20));

      for (let circle = 0; circle < 3; circle += 1) {
        let circle_x = s.random(x - 50, x + 50);
        let circle_y = s.random(y - 50, y + 50);
        let circle_size = s.random(10);
        s.fill(color);
        s.ellipse(circle_x, circle_y, circle_size);
      }
    }
  };

  s.windowResized = () => {
    s.resizeCanvas(s.windowWidth, s.windowHeight);
  };
};

new p5(sketch);
