import p5 from 'p5';
import Circle from './Circle';
import './style.css';

const list_of_colors = ['skyblue', 'darkmagenta', 'green'];
const circlesArray = [];

const sketch = (s) => {
  s.setup = function () {
    s.createCanvas(window.innerWidth, window.innerHeight);
    s.noLoop();
    s.noStroke();
  };

  s.draw = () => {
    s.background(255);
    let loopCounts = 0;

    for (let cluster = 0; cluster < 6; cluster += 1) {
      let x = s.random(100, s.width - 100);
      let y = s.random(100, s.height - 100);

      let color_1 = s.random(list_of_colors);
      let color_2 = s.random(list_of_colors);
      let color = s.lerpColor(s.color(color_1), s.color(color_2), s.random());
      // s.fill('orange');
      // s.ellipse(x, y, s.random(3, 30));

      for (let circles = 0; circles < 3; circles += 1) {
        let circle_x = s.random(x - 100, x + 100);
        let circle_y = s.random(y - 100, y + 100);
        let circle_size = s.random(6, 50);
        const circle = new Circle(circle_x, circle_y, circle_size, color);
        circlesArray.push(circle);
        s.fill(circle.color);
        s.ellipse(circle.x, circle.y, circle.size);

        if (circlesArray[loopCounts - 1] !== undefined) {
          s.stroke('skyblue');
          s.line(
            circlesArray[loopCounts].x,
            circlesArray[loopCounts].y,
            circlesArray[loopCounts - 1].x,
            circlesArray[loopCounts - 1].y
          );
        }
        loopCounts++;
      }
    }
  };

  s.windowResized = () => {
    s.resizeCanvas(s.windowWidth, s.windowHeight);
    circlesArray.length = 0;
  };
};

new p5(sketch);
