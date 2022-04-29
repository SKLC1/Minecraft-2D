// tools
const pickaxe = document.querySelector('#pickaxe')
const axe = document.querySelector('#axe')
const shovel = document.querySelector('#shovel')
let using = 'hand';
let mined = []
// tools implement
const blockElements = document.querySelectorAll('.block');
const blocksArr = [...blockElements];
// 


// 
const useShovel = () => {
  using = 'shovel'
  console.log(using);
  for (let i = 0; i < blocksArr.length; i++) {
    if (blocksArr[i].classList == 'block dirt') {
      //  
      blocksArr[i].addEventListener('click',()=>{
        if(using==='shovel' && !(blocksArr[i].className.includes('sky'))){
        blocksArr[i].classList.replace('dirt','sky')
        mined.push('dirt')
        console.log(mined);
        }
      })
      // 
    }
    if (blocksArr[i].classList == 'block grass') {
      //  
      blocksArr[i].addEventListener('click',()=>{
        if(using==='shovel' && !(blocksArr[i].className.includes('sky'))){
        blocksArr[i].classList.replace('grass','sky')
        mined.push('grass')
        console.log(mined);
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
        if(using==='axe' && !(blocksArr[i].className.includes('sky'))) {
        blocksArr[i].classList.replace('wood','sky')
        mined.push('wood')
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
        if(using==='pickaxe' && !(blocksArr[i].className.includes('sky'))){
          blocksArr[i].classList.replace('stone','sky')
          blocksArr[i].classList.replace('block','sky')
          mined.push('stone')
          console.log(mined);
          lastMined.classList.add(mined)
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
      if(skyArr[i].className.includes('sky') && mined.length > 0){
        skyArr[i].classList.replace('sky','block')
        skyArr[i].classList.add(mined[mined.length-1])
        mined.pop() 
        console.log(mined);
        if(mined.length === 0) {
          lastMined.className = "lastMined";
        }
      }
    })
  }
}
placeBlock()

// last mined 
const lastMined = document.querySelector('.lastMined');
