const sketch = (p) => {
  let xOff = 0;
  let yOff = 100;

  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
  };

  p.draw = function () {
    p.background(220);
    let x = p.map(p.noise(xOff), 0, 1, 0, p.width);
    let y = p.map(p.noise(yOff), 0, 1, 0, p.height);
    xOff += 0.01;
    yOff += 0.01;
    p.circle(x, y, 50);
  };
};

export default sketch;
