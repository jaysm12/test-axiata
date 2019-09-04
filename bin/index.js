#!/usr/bin/env node
const Robot = require('../Robot')
const args = process.argv.slice(2)

let robot = new Robot()


for(let i = 0 ; i < args.length ; i++ ) {
  let key = args[i]
  if(args[i].includes('PLACE')) key = 'PLACE'
  switch (key) {
    case 'REPORT':
        robot.report()
      break
    case 'LEFT' :
        robot.changeFacing('left')
      break
    case 'RIGHT' :
        robot.changeFacing('right')
      break
    case 'MOVE' :
        robot.move()
      break
    case 'PLACE' :
        let init = args[i].split(':')[1] && args[i].split(':')[1].split(',')
        if(init) {
          if(checkPlace(...init)) robot.place(...init)
          else return
        } else return console.log('Invalid input : x, y or f not found')
      break
    case 'HELP':
      console.log(`
      Robot command list : 
        > PLACE:x,y,f : place the robot according coordinate [x, y] facing f (north, south, west, east)
        > MOVE : move robot forward once to its faced tile
        > LEFT : rotate the robot's current facing to the left once
        > RIGHT : rotate the robot's current facing to the right once
        > REPORT : displaying the robot current coordinate and its facing
      `)
      break;
  }
}

function checkPlace (x, y, f) {
  let facing = ['north', 'west', 'east', 'south']
  let num = [0, 1, 2, 3, 4]
  if(!x || !y || !f) {
    console.log(`
      Wrong Input 
        x, y or f not found`)
    return false
  } else if(!facing.includes(f)) {
    console.log(`
      Wrong Input 
        f should be one of these : ${facing.join(' ')}
    `)
    return false
  } else if(!num.includes(Number(x)) || !num.includes(Number(y))) {
    console.log(`
      Wrong Input 
        x or y should be number or have to be [${num}]
    `)
    return false
  } else {
    return true
  }
}