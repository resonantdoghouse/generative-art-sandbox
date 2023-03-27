import * as dat from 'dat.gui'
import p5 from 'p5'
import './style.css'

const settings = {
  fps: 5,
  lineWidth: 3,
  lineHeight: 0.3,
  angle: 2.4
}

const gui = new dat.GUI()
const lineSettings = gui.addFolder('Settings')

const sketch = (s) => {
  lineSettings
    .add(settings, 'fps', 0, 60)
    .onChange((value) => {
      settings.fps = value
      s.frameRate(settings.fps)
    })
    .step(1)

    lineSettings
    .add(settings, 'lineWidth', 1, 20)
    .onChange((value) => {
      settings.lineWidth = value
    })
    .step(1)

    lineSettings
    .add(settings, 'angle', 0.1, 10)
    .onChange((value) => {
      settings.angle = value
    })
    .step(0.1)

    lineSettings
    .add(settings, 'lineHeight', 0, 0.6)
    .onChange((value) => {
      settings.lineHeight = value
    })
    .step(0.1)

  let a = 0.0
  let inc = s.TWO_PI / 25.0
  
  const modulo = 15

  const list_of_colors = ['skyblue', 'darkturquoise', 'aquamarine']

  s.setup = function () {
    s.createCanvas(window.innerWidth, window.innerHeight)
    s.frameRate(settings.fps)
  }

  s.draw = () => {
    s.background(0)

    let color_1, color_2, color

    for (let i = 0; i < s.width; i += settings.lineWidth) {
      if (i % (settings.lineWidth * modulo) === 0) {
        color_1 = s.random(list_of_colors)
        color_2 = s.random(list_of_colors)
        color = s.lerpColor(s.color(color_1), s.color(color_2), s.random())
      }

      const posY = s.height / 2 + s.cos(a) * s.height * settings.lineHeight

      s.stroke(color)
      s.strokeWeight(6)
      s.line(i, posY, i, posY)

      a += inc * settings.angle
    }
  }

  s.windowResized = () => {
    s.resizeCanvas(s.windowWidth, s.windowHeight)
  }
}

new p5(sketch)
