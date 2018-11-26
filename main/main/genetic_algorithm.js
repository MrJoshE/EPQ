generate = function(){

  var emptyString = "";
  var alphabet = "abcdefghijklmnopqrstuvwxyz";

  while (emptyString.length < this.len) {
    emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return emptyString;



}



class DNA{
  constructor(){
    this.len = target.length
    //this.initial = Math.random().toString(36).substring(2, this.len) + Math.random().toString(36).substring(2, this.len);

    this.initial = "";
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    while (this.initial.length < this.len) {
      this.initial += alphabet[Math.floor(Math.random() * alphabet.length)];
    }

  }


  static secondDNA(array,population){
    var max = Math.max.apply(Math,array)
    var maxi = array.indexOf(max)

    array[maxi] = -Infinity
    var secondMax = Math.max.apply(Math,array)
    var secondMaxi = array.indexOf(secondMax)
    array[maxi] = max

    return population[secondMaxi]
  }

  static bestDNA(array,population){
    var max = Math.max.apply(Math,array)
    var maxi = array.indexOf(max)
    return population[maxi];

  }


  fitness_calculator(){
    this.fitness = 0

    for (let i = 0; i < this.initial.length; i++){
      if (this.initial[i] == target[i]){
        this.fitness++

      }

    }
    this.fitness /= this.initial.length;
    return this.fitness;

  }

  mutate(rate){

    //Mutation rate = 0.05



    let rand = random(0,100)
    rand = Math.floor(rand)



    if (rand < rate){
      // let str = this.initial
      // let og = str.slice(Math.floor((Math.random() * this.initial.length) + 1),1)
      // this.initial.replace(og,Math.random().toString(36).substring(2, 1) + Math.random().toString(36).substring(2, 1))
      this.initial = "";
      var alphabet = "abcdefghijklmnopqrstuvwxyz";

      while (this.initial.length < this.len) {
        this.initial += alphabet[Math.floor(Math.random() * alphabet.length)];
      }
    }

  }


  // static breed(a,b){
  //
  //   let child = new DNA();
  //   let a_string = a.initial;
  //   let b_string = b.initial;
  //
  //   let half_a = a_string.slice(0,a.initial.length/2);
  //   let half_b = b_string.slice(b.initial.length/2,b.length);
  //   // console.log(half_a)
  //   // console.log(half_b)
  //   child.initial = half_a + half_b;
  //   //console.log(child.initial)
  //   return(child);
  //
  //
  // }

  static breed(a,b){

    let child = new DNA();
    let a_string = a.initial;
    let b_string = b.initial;


    let randomCrossStart = random(0,a.len)
    randomCrossStart = Math.floor(randomCrossStart)
    let randomCrossStart2 = 0
    while (randomCrossStart2 <= randomCrossStart){
      randomCrossStart2 = random(0,a.len)
    }

    randomCrossStart2 = Math.floor(randomCrossStart2)

    let one_a = a_string.slice(0,randomCrossStart);
    let two_b = b_string.slice(randomCrossStart,randomCrossStart2);
    let three_a = a_string.slice(randomCrossStart2,b.len)
    // console.log(half_a)
    // console.log(half_b)
    child.initial = one_a + two_b + three_a;
    //console.log(child.initial)
    return(child);


  }




}
