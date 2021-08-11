
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var result;
  
    if (matrix == null){
      return [];
    } else { matrix.map(item => {
      for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
          matrix[i] = matrix[i].sort((a, b) => a - b);
        } else {matrix[i] = matrix[i].sort((a, b) => b - a);}
        result = matrix;
      }
    })
    }
  return matrix.flat();
}