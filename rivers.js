function riverSizes(matrix) {
  // debugger;
  const queue = []
  const counts = []
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      if (matrix[i][j]){
        queue.push([i, j])
        let size = 0
        while (queue.length){
          let [r, c] = queue.shift()
          if (matrix[r][c]){
            matrix[r][c] = 0
            size++
            if (matrix[r+1] && matrix[r+1][c]){
              queue.push([r+1, c])
            }
            if (matrix[r-1] && matrix[r-1][c]){
              queue.push([r-1, c])
            }
            if (matrix[r][c+1]){
              queue.push([r, c+1])
            }
            if (matrix[r][c-1]){
              queue.push([r, c-1])
            }
          }
        }
        counts.push(size)
      }
    }
  }
  return counts
}

let crazy = [
[1,0,0,1,0,1,0,0,1,1,1,0],
[1,0,1,0,0,1,1,1,1,0,1,0],
[0,0,1,0,1,1,0,1,0,1,1,1],
[1,0,1,0,1,1,0,0,0,1,0,0],
[1,0,1,1,0,0,0,1,1,1,0,1]
]

console.log(riverSizes(crazy))
