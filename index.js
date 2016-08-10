const app = "I don't do much."

function bumpCounter(){
	var counter = counter || 0;
	function addBump(){
     ++counter;
	}
	function getBumps(){
      return counter;
	}
	return {
		addBump,
		getBumps
	}
}

function createAnimal(animaltype){
	return function(device){
    return {
    	animalType: animaltype,
    	deadlyDevice: device
    } 
	}
}

let sharkCreator = createAnimal("Shark");
let sharkWithFrickinLaserbeam = sharkCreator("Laserbeam");
let sharkWithFrickinCannon = sharkCreator("Cannon");