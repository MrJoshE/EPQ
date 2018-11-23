function sigmoid(x){
  return 1 / (1 + Math.exp(-x))
}




class NeuralNetwork{


  constructor(input_nodes,hidden_nodes,output_nodes){

    this.input_nodes = input_nodes;
    this.hidden_nodes = hidden_nodes;
    this.output_nodes = output_nodes;

    //creates a weight matrix that allows me to perform the matrix math using
    //the weights to get the sum for the hidden node. y = w * i + b;
    //also there has to be 2 sets of weights because there are weights going from;
    //the input nodes to the hidden nodes and weights on the hidden nodes to the
    //output nodes.

    this.weights_ih = new Matrix(this.hidden_nodes,this.input_nodes)
    this.weights_ho = new Matrix(this.output_nodes,this.hidden_nodes)

    //to start off the weights are randomized as there is no previous data
    //to base the weights off of.
    this.weights_ih.randomize()
    this.weights_ho.randomize()

    //there needs to be the bias because if the input is a 0 then the
    //result of the equation will then also be 0 because of the multiplication.
    //there is a bias for each hidden and output neuron/node.
    this.hidden_bias = new Matrix(this.hidden_nodes,1)
    this.output_bias = new Matrix(this.output_nodes,1)

    //these will always be a random.
    this.hidden_bias.randomize()
    this.output_bias.randomize()

    //this.hidden_bias.print()
    //this.output_bias.print()

  }

  feedForward(input){
    //input a array & recieve a 1d matrix.
    let inputs = Matrix.fromArrayToMatrix(input)

    //creates the matrix of the hidden outputs
    //calculation is the dot product of the weights an the input_nodes
    let hidden = Matrix.multiply(this.weights_ih,inputs)
    //then i add the bias to avoid the problem of the input being 0.
    hidden.add(this.hidden_bias)
    //Applies the activation function too every bit of data in the matrix.
    hidden.map(sigmoid)




    let output = Matrix.multiply(this.weights_ho, hidden)
    output.add(this.output_bias)
    output.map(sigmoid)
    return output.toArray();
  }





}
