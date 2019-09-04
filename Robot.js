
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
    let board = this.board
    let x = this.coor[0]
    let y = this.coor[1]
    let f = this.facing
    let moveX = x
    let moveY = y
    if(f === 'east') this.checkCoor(x, y + 1) ? moveY = y+1 : ''
    if(f === 'north') this.checkCoor(x - 1, y) ? moveX = x-1 : ''
    if(f === 'south') this.checkCoor(x + 1, y) ? moveX = x+1 : ''
    if(f === 'west') this.checkCoor(x, y - 1) ? moveY = y-1 : ''

    board[x][y] = ' '
    board[moveX][moveY] = 'X'
    this.coor = [moveX, moveY]
    this.board = board
  }

  checkCoor(x, y) {
    if(x < 5 && y < 5 && x > -1 && y > -1) return true
    else return false
  }

  place (x, y, f) {
    this.facing = f
    this.coor = [Number(x), Number(y)]
    this.generateBoard()
  }

  rightLeft() {
    
  }

  report () {
    console.log('REPORT')
    console.log(this)
  }
}

module.exports = Robot