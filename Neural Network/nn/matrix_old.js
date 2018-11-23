class Matrix{
  //When called in the format 'a = new Matrix(2,3)'
  //a new matrix is created which has 2 rows and 3 columns
  constructor(rows,cols){
    this.rows = rows;
    this.cols = cols;
    this.matrix = [];

    for (var i = 0; i < this.rows; i++ ) {
      this.matrix[i] = [];
      for (var j = 0; j < this.cols; j++) {
        this.matrix[i][j] = 0;

      }
    }
  }


  add(b){

    if(b instanceof Matrix){
      if(this.rows !== b.rows || this.cols !== b.cols){
        console.log("Rows and columns have to be equal for both matrixes.")
        return undefined;
      }else{
        for (let i = 0; i < this.rows; i++ ){
          for (let j = 0; j < this.cols; j++){
            this.matrix[i][j] += b.matrix[i][j]
      }

        }
      }

    }else{

      for (let i = 0; i < this.rows; i ++){
        for (let j = 0; j < this.cols; j++){
          this.matrix[i][j] += b
        }

      }
    }


  console.table(this.matrix);

  }





  //the randomize function fills the values of the matrix with random integers
  randomize(){
    for (let i = 0; i < this.rows; i ++){
      for (let j = 0;j < this.cols; j++){
        var rand = random(0,9)
        this.matrix[i][j] = int(rand);

      }
    }
  }

  //this function give the dot product of 2 matrixes
  multiply(b){

    //checks to see if the parameter is a matrix or a number.
    if(b instanceof Matrix){
      //this function will only work if the first matrix ie a.multiply(b) where a is the first matrix;
      //and b is the second matrix where 'a' has the same amount of rows that 'b' has columns this is
      //because of how the dot product is calculated.
      if (this.rows !== b.cols){
        console.log("The columns of the second matrix are not equal to the rows of the first")
        return undefined;
      }

      //set the first matrix as a refrence as 'a' because it makes it easier to visualise the dot
      //product and where that comes from instead of using this.matrix i'm using a.matrix because in
      //most examples and where i leaned about dot product 'https://www.mathsisfun.com/algebra/matrix-multiplying.html'
      //represents the 2 matrices as 'a' and 'b'to give the result.
      a = this;
      //here i am creating the resultant matrix which will store the dot product results of the rows and collums
      //in the matrices. The resultant matrix has the same amount of rows as the first matrix and the same amount
      //of rows as the second matrix therefore giving the parameters as the first matrixes rows and the second matrixes collumns.
      let result = new Matrix(this.rows,b.cols);


      //here i am iterating through each row in the resultant matrix so that each index can be edited. Currently the index
      //directly points to a row. For example at index 0 , it is refrenceing row 0.
      for (let i = 0; i < result.rows; i++){
        //here i am iterating through each colum in each row which is why the previous loop was important. Now the variable 'j'
        //directly refrences the column. By combining the previous loop and this loop by using this syntax 'result[i][j]'
        //i am accessing the data in each column in each row of the resultant matrix so that we can set that data to the
        //sum of the data in each row of the first matrix multiplied by the corresponding data in the collumns of the second
        //matrix giving the dot product saved as sum.
        for (let j = 0; j < result.cols; j++){
          let sum = 0
          for (var k = 0; k < a.cols; k++){
              sum += a.matrix[i][k] * b.matrix[k][j]

          }
          //here we are setting the data in the matrix as the dot product of the corresponding sunm of the multiplication of the first
          //matrixes rows and the data in the second matrixes columns.
          result.matrix[i][j] = sum;

        }


      }

      //this returns the result matrix back to where the function has been called from. For example when
      //c = a.multiply(b) is called the result will be saved to the variable/matrix 'c'. To then display
      //this data then you can run console.table(c.matrix) which then shows the data of the matrix in a clear
      //table format
      return result;


    }else{
      //this just means that if 'b' the parameter passed into the function wasn't a matrix then if would
      //perform a scalar multiplication and keep the result of that as the new version of the matrix that
      //was operated on. For example if 'a.multiply(2)' was commanded then the new contents of a would be all of
      //the data that is in the matrix 'a' mutiplied by 2.
      for (let i = 0; i < this.rows; i++){
        for (let j = 0; j < this.cols; j++){
          this.matrix[i][j] *= b;

        }

      }
    }

  }

}
