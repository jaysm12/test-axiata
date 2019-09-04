#!/usr/bin/env node
const Robot = require('../Robot')
const [value, x, y, f] = process.argv.slice(2)
const payload = {
  value
}

switch (value) {
  case 'place':
    if(!x || !y || !f) {
      console.log('Wrong Input x, y and f not found')
      break
    } else {
      console.log('masuk else')
      break
    }
  case 'move' :
    console.log('move')
    break
  case 'left' :
    console.log('left')
    break
  case 'right' :
    console.log('right')
    break
  case 'report' :
    console.log('report')
    break
  case 'help' :
  default:
    console.log(`
      Toy command list : 
        > place x y f : place the robot according coordinate [x, y] facing f (north, south, west, east)
        > move : move robot forward once to its faced tile
        > left : rotate the robot's current facing to the left once
        > right : rotate the robot's current facing to the right once
        > report : displaying the robot current coordinate and its facing
    `)
    break
}

module.exports = payload
