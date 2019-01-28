function areaMatrix(matrix){
  debugger;
  let area = 0;
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      if (matrix[i][j]){
        // if a 1 is found in a spot,
        let greatestK;
        for (let k = 0; k < matrix[i].length; k++){
          for (let l = 0; l < matrix[i].length; l++){
            // check spots in same array for 1
             if (matrix[i][k]){
              if (Math.abs(k - j) > area){
                area = Math.abs(k - j)
              }
             }
             if (matrix[k][j]){
                if (Math.abs(k - i) > area){
                  area = Math.abs(k - i)
                }
             }
            if (matrix[l][j] && matrix[i][k]){
               if (area < (Math.abs(k-i)*Math.abs(k-j))){
                  area = Math.abs(k-i)*Math.abs(k-j)
               }
            }
          }
        }
      }
    }
  }
  return area;
}


console.log(areaMatrix([[0,1,0,0,1],
 [1,0,1,0,1],
 [1,0,1,0,1],
 [0,1,1,0,1],
 [0,0,1,0,0]]))
// should return 9
