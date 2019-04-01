const numberUp = document.getElementById('numberUp')
const number = document.getElementById('number')
const numberDown = document.getElementById('numberDown')

numberDown.addEventListener('click',() =>{
  
  const currentNumber = number.innerHTML
  if(currentNumber >= 1){
  const NewNumber = currentNumber - 1
  number.innerHTML = NewNumber
  }
})



numberUp.addEventListener('click', () =>{
  
  const currentNumber = parseInt(number.innerHTML)
  const NewNumber = currentNumber + 1
  number.innerHTML = NewNumber
})