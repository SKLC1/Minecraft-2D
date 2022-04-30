// tools
const pickaxe = document.querySelector('#pickaxe')
const axe = document.querySelector('#axe')
const shovel = document.querySelector('#shovel')
let using = 'hand';
let mined = []
let lastListCur = mined.reverse()
// tools implement
const blockElements = document.querySelectorAll('.block');
const blocksArr = [...blockElements];
// 


// 
const useShovel = () => {
  using = 'shovel'
  console.log(using);
  for (let i = 0; i < blocksArr.length; i++) {
    if (blocksArr[i].className == 'block dirt') {
      //  
      blocksArr[i].addEventListener('click',()=>{
        if(using==='shovel' && !(blocksArr[i].className.includes('sky'))){
        blocksArr[i].classList.replace('dirt','sky')
        blocksArr[i].classList.remove('block')
        mined.push('dirt')
        console.log(mined);
        lastMined.className ='lastMined';
        lastMined.classList.add(mined[mined.length-1])
        }
      })
      // 
    }
    if (blocksArr[i].className == 'block grass') {
      //  
      blocksArr[i].addEventListener('click',()=>{
        if(using==='shovel' && !(blocksArr[i].className.includes('sky'))){
        blocksArr[i].classList.replace('grass','sky')
        blocksArr[i].classList.remove('block')
        mined.push('grass')
        console.log(mined);
        lastMined.className ='lastMined';
        lastMined.classList.add(mined[mined.length-1])
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
    if (blocksArr[i].className == 'block wood') {  
      blocksArr[i].addEventListener('click',()=>{
        if(using==='axe' && !(blocksArr[i].className.includes('sky'))) {
        blocksArr[i].classList.replace('wood','sky')
        blocksArr[i].classList.remove('block')
        mined.push('wood')
        lastMined.className ='lastMined';
        lastMined.classList.add(mined[mined.length-1])
        }
      })
    }
    if (blocksArr[i].className == 'block leaves') {
      blocksArr[i].addEventListener('click',()=>{
        if(using==='axe' && !(blocksArr[i].className.includes('sky'))) {
        blocksArr[i].classList.replace('leaves','sky')
        blocksArr[i].classList.remove('block')
        mined.push('leaves')
        lastMined.className ='lastMined';
        lastMined.classList.add(mined[mined.length-1])
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
    if (blocksArr[i].className == 'block stone') {
      //  
      blocksArr[i].addEventListener('click',()=>{
        if(using==='pickaxe' && !(blocksArr[i].className.includes('sky'))){
          blocksArr[i].classList.replace('stone','sky')
          blocksArr[i].classList.remove('block')
          mined.push('stone')
          console.log(mined);
          lastMined.className ='lastMined';
          lastMined.classList.add(mined[mined.length-1])
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
const lastMined = document.querySelector('.lastMined');

const placeBlock =()=>{
  for (let i = 0; i < skyArr.length; i++) {
    skyArr[i].addEventListener('click', ()=>{
      if(skyArr[i].className.includes('sky') && mined.length > 0){
        skyArr[i].classList.replace('sky','block')
        skyArr[i].classList.add(mined[mined.length-1])
        mined.pop() 
        console.log(mined);
        if(mined.length === 0) {
          lastMined.className ='lastMined';
        } else if (mined.length > 0){
          lastMined.className ='lastMined';
          lastMined.classList.add(mined[mined.length-1])
        }
      }
    })
  }
}
placeBlock()

// last mined 
