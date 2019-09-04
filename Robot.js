
class Robot {
  constructor(coor, facing) {
    this.facing = facing
    this.coor = coor
    this.board = ''
  }
  generateBoard() {
    let arr = []
    for(let i = 0 ; i < 5; i++) {
      arr.push([' ', ' ', ' ', ' ', ' '])
    }
    arr[this.coor[0]][this.coor[1]] = 'X'
    this.board = arr
  }

  move () {
    
  }

  place (x, y, f) {
    this.facing = f
    this.coor = [x, y]
    this.generateBoard()
  }

  rightLeft() {
    if(!this.isPlaced) return 
  }

  report () {
    console.log('REPORT')
    console.log(this)
  }
}

module.exports = Robot