

// grab HTML elements
const grid = document.querySelector('.minecraft-container');

// world matrix data

let matrix = []

// world size by rows
const generateTerrain = () => {
  for (let i = 0; i < 20; i++) {
    let row = []
    // sky
    for (let i = 0; i < 8; i++) {
    row.push(0)
  }
  // grass
  for (let i = 0; i < 1; i++) {
    row.push(4)
  }
  // dirt
  for (let i = 0; i < 2; i++) {
    row.push(1)
  }
  // stone dirt mix
  for (let i = 0; i < 3; i++) {
    row.push(Math.floor(Math.random() * (3 - 1)) + 1)
  }
  // stone
  for (let i = 0; i < 3; i++) {
    row.push(2)
  }
  matrix.push(row)
}
}
//  tree generation
generateTerrain()
console.log(matrix);


// terran extras
let generationPlace = (Math.floor(Math.random() * (15 - 1)) + 1);

const generateTree = () =>{
  let chanceForTreeTwo = (Math.floor(Math.random() * (6 - 1)) + 1);
  let treeRow = matrix[generationPlace]
  // leaves
  for (let i = 4; i < 6; i++) {
    if (treeRow[i] === 0) {
      matrix[generationPlace-1][i] = 6
      matrix[generationPlace][i] = 6
      matrix[generationPlace+1][i] = 6
    }
  }
  // wood
  for (let i = 6; i < 8; i++) {
    if (treeRow[i] === 0) {
      treeRow[i] = 5
    }
  }
  if (chanceForTreeTwo == 3) {
    generateTree()
  }
}
generateTree()



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

   
  // reset button
  const reset = document.querySelector('.reset')
  
  const resetWorld = () => {
  const worldRow = document.querySelectorAll('.world-row')
  const worldRowArr = [...worldRow]
  
  worldRowArr.forEach((worldBlock)=> worldBlock.remove());
  matrix = [];
  generateTerrain()
  generateTree()
  generateWorld()
}
reset.addEventListener('click', resetWorld)

