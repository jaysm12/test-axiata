# ROBOT APP

## Installation

Using CLI 

```
$ npm i -g .
$ robot HELP

Robot command list :
  > PLACE x,y,f : place the robot according coordinate [x, y] facing f (north, south, west, east)
  > MOVE : move robot forward once to its faced tile
  > LEFT : rotate the robot's current facing to the left once
  > RIGHT : rotate the robot's current facing to the right once
  > REPORT : displaying the robot current coordinate and its facing
```
Without CLI
```
$ npm install
$ bin/index.js HELP

Robot command list :
  > PLACE x,y,f : place the robot according coordinate [x, y] facing f (north, south, west, east)
  > MOVE : move robot forward once to its faced tile
  > LEFT : rotate the robot's current facing to the left once
  > RIGHT : rotate the robot's current facing to the right once
  > REPORT : displaying the robot current coordinate and its facing

```



Uninstall CLI
```
$ npm uninstall -g test-axiata
```
---
## Usage

Example valid command :
```
$ robot PLACE
```
