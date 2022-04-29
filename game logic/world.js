

// grab HTML elements
const grid = document.querySelector('.minecraft-container');


// world matrix data
const blocks ={
  sky: 0,
  dirt: 0
}
let matrix = []

let tree = [
  [0, 0, 0, 0, 0, 4, 1, 1, 1, 2, 2, 2, 2, 2]
  [0, 0, 0, 0, 0, 4, 1, 1, 1, 2, 2, 2, 2, 2]
  [0, 0, 0, 0, 0, 4, 1, 1, 1, 2, 2, 2, 2, 2]
]

// world size by rows
const generateTerrain = () => {
 for (let i = 0; i < 5; i++) {
  let row = []
  matrix.push(row)
  // sky
  for (let j = -0; j < 5; j++) {
    row.push(0)
  }
  // grass
  for (let j = 5; j < 6; j++) {
    row.push(4)
  }
  // dirt
  matrix.push(row)
  for (let j = 7; j < 8; j++) {
    row.push(1)
  }
  matrix.push(row)
  for (let j = 8; j < 11; j++) {
    row.push(Math.floor(Math.random() * (3 - 1)) + 1)
  }
  matrix.push(row)
  for (let j = 11; j < 15; j++) {
    row.push(2)
  }
 }
}
generateTerrain()
console.log(matrix);

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
        if(matrix[i][j] === 2){
          let block = document.createElement('div');
          block.classList.add('block')
          block.classList.add('stone')
          row.append(block)
        }
        if(matrix[i][j] === 4){
          let block = document.createElement('div');
          block.classList.add('block')
          block.classList.add('grass')
          row.append(block)
        }
        if(matrix[i][j] === 5){
          let block = document.createElement('div');
          block.classList.add('block')
          block.classList.add('wood')
          row.append(block)
        }
        if(matrix[i][j] === 6){
          let block = document.createElement('div');
          block.classList.add('block')
          block.classList.add('leaves')
          row.append(block)
        }
      }
    }
  }
  generateWorld()
  







