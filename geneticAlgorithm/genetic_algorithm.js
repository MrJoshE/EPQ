generate = function(){
  rand = random(0,100);
  return rand;
}



class DNA{
  constructor(){
    this.len = target.length
    //this.initial = Math.random().toString(36).substring(2, this.len) + Math.random().toString(36).substring(2, this.len);

    this.initial = "";
    var alphabet = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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


    this.mutated = false



    var rand = generate()
    //var rand = Math.floor(Math.random() * 100)
    //console.log(rand)
    //var rand = Math.floor(Math.random() * 100)
    this.rand = rand



    if (rand <= rate){

      this.mutated = true
      this.preM = this.initial
      // let str = this.initial
      // let og = str.slice(Math.floor((Math.random() * this.initial.length) + 1),1)
      // this.initial.replace(og,Math.random().toString(36).substring(2, 1) + Math.random().toString(36).substring(2, 1))
      var alphabet = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      let newLetter = ""
      let oldLetter = ""
      while (newLetter == oldLetter){

        var chosen = Math.round(Math.random() * alphabet.length);
        var old = Math.round(Math.random() * (this.initial.length - 1));

        newLetter = alphabet[chosen];
        oldLetter = this.initial[old];

      }
      this.oldLetter = oldLetter
      this.oldLetter_i = old
      this.newLetter = newLetter

      var string = this.initial.replace(oldLetter,newLetter)
      this.initial = string;


      this.postM = this.initial

    }


  }


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

    //  x(a_string) + y(b_string) + remaining(a_string)
    child.initial = one_a + two_b + three_a;
    //console.log(child.initial)
    return(child);


  }




}
