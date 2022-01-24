const sketch = (p) => {
  let yOff = 0;

  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
  };

  p.draw = function () {
    p.background(220);
    p.noFill();
    p.beginShape();
    for (let x = 0; x < p.width; x++) {
      let y = p.map(p.noise(yOff), 0, 1, 0, p.height);
      p.vertex(x, y);
      yOff += 0.01;
    }
    p.endShape();
    // p.noLoop();
  };
};

export default sketch;
