const app = "I don't do much."

function bumpCounter(){
  var counter = 0;
  function addBump(){
    counter++;
  };

  function getBumps(){
    return counter;
  };

  return {
    addBump,
    getBumps
  }
}

function createAnimal(animalType){
  function inner(deadlyDevice){
    return {animalType, deadlyDevice}
  }
  return inner;
}

var sharkCreator = createAnimal("Shark");
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam");
var sharkWithFrickinCannon = sharkCreator("Cannon");
