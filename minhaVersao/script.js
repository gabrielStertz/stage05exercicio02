const weight = document.getElementById('weight')
const height = document.getElementById('height')
const button = document.getElementById('calc')
const result = document.getElementById('result')
const error = document.getElementById('error')
const resultText = document.getElementById('result-text')
const xFigure = document.getElementById('xFigure')
height.value = undefined
weight.value = undefined
weight.focus()
button.addEventListener('click', handleClick)
xFigure.addEventListener('click', handleXClick)
function handleClick(e){
  e.preventDefault()
  const valA = weight.value
  let valB = height.value
  if(valA != "" && valB != ''){
    if(valB > 3){
      valB = valB / 100
    }
    error.classList.add('hide')
    const result = calcImc(valA, valB).toFixed(2)
    return handleResult(result)
  } else handleError(valA)
}
function handleXClick(){
  result.classList.add('hide')
  height.value = undefined
  weight.value = undefined
  weight.focus()
}
function handleError(a){
  error.classList.remove('hide')
  if(a == '') {
    weight.value = undefined
    weight.focus()
  }
  else {
    height.value = undefined
    height.focus()
  }
}
function calcImc(weight, height){
  let imc = weight / (height * height)
  return imc
}
function handleResult(res){
  result.classList.remove('hide')
  resultText.innerText = `Seu IMC é de ${res}`
}