// tools
const pickaxe = document.querySelector('#pickaxe')
const axe = document.querySelector('#axe')
const shovel = document.querySelector('#shovel')

// tools implement
const blockElements = document.querySelectorAll('.block');
const blocksArr = [...blockElements];


const useShovel = () => {
  if (shovel === document.activeElement) {
    console.log('1');
  }
  for (let i = 0; i < blocksArr.length; i++) {
    blocksArr[i].addEventListener('click',()=>{
      blocksArr[i].classList.replace('dirt','sky')
    })
  }
} 
shovel.addEventListener('click',useShovel)
