
// create welcome menu

const menu = document.querySelector('.menu')
const start = document.querySelector('.start')
const tutorial = document.querySelector('#tutorial')

const handleStart = () => {
  const game = document.querySelector('.main-container')
  game.style.display = "flex";
  menu.style.display = "none";
}
start.addEventListener('click',handleStart)

const handleHowTo = () => {
  const inst =document.createElement('div')
  inst.classList.add('inst')
  inst.innerText = 
  `here are the instructions:
   Pickaxe mines stone, Axe mines leaves and wood, Shovel mines dirt and grass
   To place an item you need to select
   the block below the tools`
  tutorial.append(inst)
}

tutorial.addEventListener('click',handleHowTo)

