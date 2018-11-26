

class RandomGenerator{
	constructor(min, max){ 
		//takes in the minimum and maximum values
		this.min = min;
		this.max = max;

		//if they are not defined, it sets the minimum to 1, and the max to 10
		this.defaultNumbers = {
			min: 10,
			max: 1
		}

		//makes storage for the random number
		this.randomNumber = null;
	}
	generate(){
		//make a random value between the minimum and maximum values
		//and store the number into the storage from the constructor
		this.randomNumber = Math.floor(Math.random() * (this.max - this.min)) + this.min;
	}
	getRange(){
		let numberRanges = {}

		//return an object with min and max, min being the minimum value for the generator, max being the maximum value
		numberRanges.min = this.min;
		numberRanges.max = this.max;

		//returns a basic object literal
		return numberRanges;
	}
	getNum(){
		//return the random number that was generated by generate()
		return this.randomNumber;
	}
}