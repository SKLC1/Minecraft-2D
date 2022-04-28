// tools
const pickaxe = document.querySelector('#pickaxe')
const axe = document.querySelector('#axe')
const shovel = document.querySelector('#shovel')
let using = 'hand';
let last = 'sky';
// tools implement
const blockElements = document.querySelectorAll('.block');
const blocksArr = [...blockElements];
let minedBlocks = 0;


const useShovel = () => {
  using = 'shovel'
  console.log(using);
  for (let i = 0; i < blocksArr.length; i++) {
    if (blocksArr[i].classList == 'block dirt') {
      //  
      blocksArr[i].addEventListener('click',()=>{
        if(using==='shovel'){
        blocksArr[i].classList.replace('dirt','sky')
        minedBlocks ++;
        last = 'dirt'
        }
      })
      // 
    }
    if (blocksArr[i].classList == 'block grass') {
      //  
      blocksArr[i].addEventListener('click',()=>{
        if(using==='shovel'){
        blocksArr[i].classList.replace('grass','sky')
        minedBlocks ++;
        last = 'grass'
        }
      })
      // 
    }
  }
}
shovel.addEventListener('click',useShovel);

const useAxe = () => {
  using = 'axe'
  console.log(using);
  for (let i = 0; i < blocksArr.length; i++) {
    if (blocksArr[i].classList == 'block wood') {
      //  
      blocksArr[i].addEventListener('click',()=>{
        if(using==='axe'){
        blocksArr[i].classList.replace('wood','sky')
        minedBlocks ++;
        }
      })
      // 
    }
  }
}
axe.addEventListener('click',useAxe);

const usePickaxe =()=>{
  using = 'pickaxe'
  console.log(using);
  for (let i = 0; i < blocksArr.length; i++) {
    if (blocksArr[i].classList == 'block stone') {
      //  
      blocksArr[i].addEventListener('click',()=>{
        if(using==='pickaxe'){
        blocksArr[i].classList.replace('stone','sky')
        minedBlocks ++;
        last = 'stone';
        }
      })
      // 
    }
  }
}

pickaxe.addEventListener('click',usePickaxe);

// place
const skyElements = document.querySelectorAll('.sky');
const skyArr = [...skyElements];

const placeBlock =()=>{
  for (let i = 0; i < skyArr.length; i++) {
    skyArr[i].addEventListener('click', ()=>{
      if(minedBlocks > 0){
        skyArr[i].classList.replace('sky','block')
        skyArr[i].classList.add(last)
        minedBlocks--;
      }
    })
  }
}
placeBlock()