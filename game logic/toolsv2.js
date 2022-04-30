// tools
const pickaxe = document.querySelector('#pickaxe')
const axe = document.querySelector('#axe')
const shovel = document.querySelector('#shovel')
const hand = document.querySelector('#hand')
let using = 'hand';
let selectedTool = [hand]
let mined = []
let lastListCur = mined.reverse()
// tools implement
const blocksArr2 = document.querySelectorAll('.world-row div') 
const allBlocks = [...blocksArr2]

// tool select
const usePickaxe =()=>{
  using = 'pickaxe'
  selectedTool.push(pickaxe);
  highlightTool()
}
pickaxe.addEventListener('click',usePickaxe);
const useShovel =()=>{
  using = 'shovel'
  selectedTool.push(shovel);
  highlightTool()
}
shovel.addEventListener('click',useShovel);
const useAxe =()=>{
  using = 'axe'
  selectedTool.push(axe);
  highlightTool()
}
axe.addEventListener('click',useAxe);
const useHand =()=>{
  using = 'hand'
  selectedTool.push(hand);
  highlightTool()
}
hand.addEventListener('click',useHand);

const highlightTool = () =>{
  selectedTool[selectedTool.length-1].classList.add('selected-tool')
  selectedTool[selectedTool.length-2].classList.remove('selected-tool')
}

// mine function
let toolsArr = ['pickaxe','shovel','shovel','axe','axe']
let blockTypeArr = ['stone','dirt','grass','wood','leaves']

for (let i = 0; i < allBlocks.length; i++) {
  allBlocks[i].addEventListener('click', ()=>{
    console.log(allBlocks[i]);
    for (let j = 0; j < toolsArr.length; j++) {
      if (using === toolsArr[j] && allBlocks[i].className.includes(blockTypeArr[j])) {
        mined.push(blockTypeArr[j]) 
        allBlocks[i].className = 'sky'
        hand.className = 'lastMined' +' '+ mined[mined.length-1]
        //
        console.log(`${toolsArr[j]} can mine ${blockTypeArr[j]}`);
        console.log(mined);
      }
    }
  })
}

//  place function

for (let i = 0; i < allBlocks.length; i++) {
  allBlocks[i].addEventListener('click', ()=>{
    if(using === 'hand' && allBlocks[i].className.includes('sky') && (mined.length > 0) ) {
      // 
      console.log('changed');
      // 
      allBlocks[i].className = '';
      allBlocks[i].classList.add('block');
      allBlocks[i].classList.add(mined[mined.length-1]);
      hand.className = 'lastMined' +' '+ mined[mined.length-1]
      mined.pop()
      if (mined.length === 0) {
        hand.className = 'lastMined'
      }
    }
  })
}