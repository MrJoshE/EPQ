
var target = "Josh";
var populationSize = 100;
var population = [];
var word;
var found = false;
var generation = 0;
var fitnesses = []
var mutationRate = 40;
function setup() {



  //actually creates the population.
  for(let i = 0 ; i < populationSize; i++){
    population.push(new DNA());
  }

  //console.table(population)

  for(let d = 0; d < population.length; d++){
    if (population[d].initial == target){
      found = true
    }
  }

  for(let _dna = 0; _dna < populationSize; _dna++){
    fitnesses.push(population[_dna].fitness_calculator())
  }


  var top_DNA;
  var second_DNA;
  top_DNA = DNA.bestDNA(fitnesses,population)
  second_DNA = DNA.secondDNA(fitnesses,population)

  population = [];
  generation += 1;

  for (let c = 0; c < populationSize; c++){
    child = DNA.breed(top_DNA,second_DNA)
    child.mutate(mutationRate)
    population.push(child)
  }






}


















function draw() {

  for(let d = 0; d < populationSize; d++){
    //console.log(population)
    if (population[d].initial == target){
      let word = population[d].initial;
      found = true
    }
  }

  if(found == false){

    fitnesses = []
    for(let _dna = 0; _dna < populationSize; _dna++){
      fitnesses.push(population[_dna].fitness_calculator())
    }

    //console.table(population)

    //Breeding
    var top_DNA = null;
    var second_DNA = null;

    top_DNA = DNA.bestDNA(fitnesses,population);

    second_DNA = DNA.secondDNA(fitnesses,population)

    //console.table(population)

    population = [];
    generation += 1;

    for (let c = 0; c < populationSize; c++){
      child = DNA.breed(top_DNA,second_DNA)
      child.mutate(mutationRate)
      population.push(child)
    }

    console.table(population)

    //console.log(found)
    //console.log(generation)





  } else if (found == true){
    console.log("Found your word = " + word)
  } else{
    console.log("Found is not defined.")
  }



}
