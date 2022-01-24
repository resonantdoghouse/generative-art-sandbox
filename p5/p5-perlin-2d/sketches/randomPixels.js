const sketch = (p) => {
  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.pixelDensity(1);
  };

  p.draw = function () {
    p.loadPixels();
    p.background(220);
    p.noFill();
    for (let x = 0; x < p.width; x++) {
      for (let y = 0; y < p.height; y++) {
        let index = (x + y * p.width) * 4;
        let r = p.random(255);
        p.pixels[index + 0] = r;
        p.pixels[index + 1] = r;
        p.pixels[index + 2] = r;
        p.pixels[index + 3] = 255;
      }
    }
    p.updatePixels();
    p.noLoop();
  };
};

export default sketch;
