const sketch = (p) => {
  let start = 0;

  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
  };

  p.draw = function () {
    p.background(220);
    p.noFill();
    p.beginShape();
    let yOff = start;
    for (let x = 0; x < p.width; x++) {
      let y = p.map(p.noise(yOff), 0, 1, 0, p.height);
      p.vertex(x, y);
      yOff += 0.01;
    }
    p.endShape();
    start += 0.01;
  };
};

export default sketch;
