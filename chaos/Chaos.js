/**
 * Chaos
 * src/credit: Peters, Keith. Playing with Chaos: Programming Fractals and Strange Attractors in JavaScript
 */
class Chaos {
  constructor() {}

  /**
   * Initializes chaos by finding the canvas on the
   * page and resizing it to the
   * full size of the browser.
   */
  init() {
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');
    this.setSize(window.innerWidth, window.innerHeight);
  }
  setSize(width, height) {
    this.width = this.canvasWidth = width;
    this.height = this.canvasHeight = height;
  }
  /**
   * Clears the canvas by filling it with the color
   * specified, or erasing all
   * pixels if no color is specified.
   */
  clear(color) {
    /**
     * Clears the canvas by filling it with the color
     * specified, or erasing all
     * pixels if no color is specified.
     */
    if (color) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.width, this.height);
    } else {
      this.context.clearRect(0, 0, this.width, this.height);
    }
  }
  /**
   * Pops up a bitmap image representation of the
   * canvas in a new window.
   */
  popImage() {
    let win = window.open('', 'Canvas Image'),
      src = this.canvas.toDataURL('image/png');
    win.document.write(
      "<img src='" +
        src +
        "' width='" +
        this.width +
        "' height='" +
        this.height +
        "'/>"
    );
  }
}

export default Chaos;
