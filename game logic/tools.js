// tools
const pickaxe = document.querySelector('#pickaxe')
const axe = document.querySelector('#axe')
const shovel = document.querySelector('#shovel')
let using = null;

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
      if(using==='shovel'){
      blocksArr[i].addEventListener('click',()=>{
        blocksArr[i].classList.replace('dirt','sky')
        minedBlocks ++;
      })
      }
      // 
    }
  }
}
shovel.addEventListener('click',useShovel)

const usePickaxe = () => {
  using = 'pickaxe'
  console.log(using);
  for (let i = 0; i < blocksArr.length; i++) {
    blocksArr[i].addEventListener('click',()=>{
      console.log(using);
      if (using === 'pickaxe' && blocksArr[i].classList == 'block stone') {
        // 
        blocksArr[i].classList.replace('stone','sky')
        minedBlocks ++;
      }
    })
  }
} 
pickaxe.addEventListener('click',usePickaxe)
