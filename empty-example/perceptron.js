class Perceptron {

	constructor(size) {
		this.lr = 0.2;
	    this.weights = [];
	 
	    for (var i = size - 1; i >= 0; i--) {
	    	this.weights[i] =  getRandomWeight();
	    }
	    console.log(this.weights);
  	}

  	guess(inputs) {
  		let sum = 0;
  		for (var i = 0; i < inputs.length; i++) {
  			sum += this.weights[i]*inputs[i];
  		}
  		return sigmoid(sum);
  	}

  	train(inputs, target){
  		let guess = this.guess(inputs);
  		let error = target - guess;

  		for (var i = 0; i < this.weights.length; i++) {
  			this.weights[i] += error * inputs[i] * this.lr;
  		}
  		console.log(error);
  	}
}


function getRandomWeight() {
	if(Math.random() > 0.5){
		return Math.random() * -1;
	}
  	return Math. random();
}


// activation function
function sigmoid(t) {
    var v = 1/(1+Math.pow(Math.E, -t));
    if(v > 0.5){
    	return 1;
    }else{
    	return -1;
    }
}
