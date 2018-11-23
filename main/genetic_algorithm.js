class DNA{
  constructor(){
    this.initial = Math.random().toString(36).substring(2, 7) + Math.random().toString(36).substring(2, 7);


  }

  fitness_calculator(){
    this.fitness = 0
    for (let i = 0; i < this.initial.length; i++){
      for (let j = 0; j < target.length; j++){
        if (this.initial[i] == target[j]){
          this.fitness++
        }
      }

    }
    this.fitness /= this.initial.length;
    return this.fitness;

  }

  mutate(){

    //Mutation rate = 0.05

    let rate = 5
    let random = Math.floor((Math.random() * 100) + 1);

    if (random < rate){
      let og = child.initial.splice(Math.floor((Math.random() * child.initial.length) + 1),1)
      child.initial.replace(og,Math.random().toString(36).substring(2, 1) + Math.random().toString(36).substring(2, 1))
    }

    return child;


  }


  static breed(a,b){
    let child = new DNA();
    let a_string = a.initial;
    let b_string = b.initial;
    let half_a = a_string.slice(a.initial.length/2,0);
    let half_b = b_string.slice(b.initial.length/2,b.initial.length/2);
    child.initial = toString(half_a) + toString(half_b);
    return(child);


  }





}
