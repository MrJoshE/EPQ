
var target = "My name is josh";
var populationSize = 50;
var population = [];
var word;
function setup() {

  let generation = 0

  //actually creates the population.
  for(let i = 0 ; i < populationSize; i++){
    population.push(new DNA());
  }


  //Calculate fitness

  let found = false;


  for(let d = 0; d < population.length; d++){
    if (population[d].initial == target){
      found = true
    }
  }
  let fitnesses = []
  for(let _dna = 0; _dna < populationSize; _dna++){
    fitnesses.push(population[_dna].fitness_calculator())
  }


  //Breeding

  let top = fitnesses[0]
  let second = fitnesses[0]
  for(let fit = 0; fit < fitnesses.length; fit++){
    if (top < fitnesses[fit]){
      second = top
      top = fitnesses[fit]
    }
  }


  let top_DNA = population[0];
  let second_DNA = population[0];

  for(let z = 0; z < populationSize; z++){
    if (population[z].fitness == top){
      top_DNA = population[z]
    }else if(population[z].fitness == second){
      second_DNA = population[z]
    }
  }



  for (let c = 0; c < populationSize; c++){
    child = DNA.breed(top_DNA,second_DNA)
    population.push(child)
  }




}


















function draw(population,populationSize,generation,found) {

  if(found == false){


    for(let d = 0; d < populationSize; d++){
      if (population[d].initial == target){
        let word = population[d].initial;
        found = true


    }
    let fitnesses = []
    for(let _dna = 0; _dna < populationSize; _dna++){
      fitnesses.push(population[_dna].fitness_calculator())
    }


    //Breeding

    let top = fitnesses[0]
    let second = fitnesses[0]
    for(let fit = 0; fit < fitnesses.length; fit++){
      if (top < fitnesses[fit]){
        second = top
        top = fitnesses[fit]
      }
    }
    let population = []
    generation ++

    let top_DNA;
    let second_DNA;

    for(let z = 0; z < populationSize; z++){
      if (population[z].fitness == top){
        top_DNA = population[z]
      }else if(population[z].fitness == second){
        second_DNA = population[z]
      }
    }



    for (let c = 0; c < populationSize; c++){
      child = DNA.breed(top_DNA,second_DNA)
      child.mutate()
      population.push(child)
    }

    console.log(top_DNA.initial)

  }else if(found == true){
    console.log("Found your word = " + word)
  }


}
