const sketch = (p) => {
  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
  };

  p.draw = function () {
    p.background(220);
    p.noFill();
    p.beginShape();
    for (let x = 0; x < p.width; x++) {
      let y = p.random(p.height);
      p.vertex(x, y);
    }
    p.endShape();
    p.noLoop();
  };
};

export default sketch;
