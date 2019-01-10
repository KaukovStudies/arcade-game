import Entity from './entity'

export default class Enemy extends Entity {
  constructor (x, y, velocity, width, height) {
    super(x, y, velocity)

    this.width = width
    this.height = height
  }

  update () {
    if (this.x > 550) {
      this.x = -100
    }
  }

  move (dt) {
    this.x += this.velocity * dt;
  }
}
