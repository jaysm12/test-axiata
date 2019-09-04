const Robot = require('../Robot')
const chai = require('chai')
const expect = chai.expect

const robot = new Robot()

describe('testing robot', () => {
  describe('Place command', () => {
    it('should place robot correctly', () => {
      const x = 2
      const y = 2
      const f = 'north'
      robot.place(x, y, f)
      
      expect(robot).to.be.an('object')
      expect(robot).to.have.property('facing')
      expect(robot).to.have.property('board')
      expect(robot).to.have.property('coor')
      expect(robot).to.have.property('isPlaced')
      expect(robot.board).to.be.an('array')
      expect(robot.board[x][y]).to.equal('X')
      expect(robot.facing).to.equal(f)
    })
  })
  describe('Change facing commands', () => {
    it('should change the robot direction to east', () => {
      robot.changeFacing('right')
      
      expect(robot).to.be.an('object')
      expect(robot).to.have.property('facing')
      expect(robot.facing).to.equal('east')
    });
    it('should change the robot direction to north', () => {
      robot.changeFacing('left')

      expect(robot).to.be.an('object')
      expect(robot).to.have.property('facing')
      expect(robot.facing).to.equal('north')
    })
  })
  describe('Move command', () => {
    it('should move robot to north', () => {
      robot.move()
      
      expect(robot).to.be.an('object')
      expect(robot).to.have.property('coor')
      expect(robot.coor[0]).to.equal(1)
      expect(robot.coor[1]).to.equal(2)
    })
    it('should move robot to east', () => {
      robot.changeFacing('right')
      robot.move()

      expect(robot).to.be.an('object')
      expect(robot).to.have.property('coor')
      expect(robot.coor[0]).to.equal(1)
      expect(robot.coor[1]).to.equal(3)
      
    })
    it('should move robot to south', () => {
      robot.changeFacing('right')
      robot.move()

      expect(robot).to.be.an('object')
      expect(robot).to.have.property('coor')
      expect(robot.coor[0]).to.equal(2)
      expect(robot.coor[1]).to.equal(3)
      
    })
    it('should move robot to west', () => {
      robot.changeFacing('right')
      robot.move()
      
      expect(robot).to.be.an('object')
      expect(robot).to.have.property('coor')
      expect(robot.coor[0]).to.equal(2)
      expect(robot.coor[1]).to.equal(2)
    })
  })
})