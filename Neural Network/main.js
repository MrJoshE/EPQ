
var cars = [];

function setup() {

  createCanvas(800,600)

  brain = new NeuralNetwork(4,8,4)
  inputs = [10,60,4,4]
  output = brain.feedForward(inputs)
  console.log(output)
}



function draw() {

	background(135, 206, 235);

}
