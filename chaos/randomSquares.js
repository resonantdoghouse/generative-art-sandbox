const randomSquares = (chaos) => {
  let x = Math.random() * (chaos.width - 100),
    y = Math.random() * (chaos.height - 100),
    w = 20 + Math.random() * 100,
    h = 20 + Math.random() * 100,
    r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  chaos.context.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
  chaos.context.fillRect(x, y, w, h);
};

export default randomSquares;
