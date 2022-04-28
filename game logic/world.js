

// grab HTML elements
const grid = document.querySelector('.minecraft-container');


// world matrix data
const blocks ={
  sky: 0,
  dirt: 0
}
let matrix = [
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1],
]

// world generation
function generateWorld () {
  for (let i = 0; i < matrix.length; i++) {
      let row = document.createElement('div')
      row.classList.add('world-row')
      grid.append(row)
    for (let j = 0; j < matrix[i].length; j++) {
        if(matrix[i][j] === 0){
          let block = document.createElement('div');
          block.classList.add('sky')
          row.append(block)
        }
        if(matrix[i][j] === 1){
          let block = document.createElement('div');
          block.classList.add('block')
          block.classList.add('dirt')
          row.append(block)
        }
    }
  }
}
generateWorld()








