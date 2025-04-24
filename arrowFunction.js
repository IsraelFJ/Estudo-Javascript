// exemplo de arrow function 
const somar = (a, b) => a + b
const subtracao = (a, b) => a - b
const multiplicacao = (a, b) => a * b
const divisao = (a, b) => a / b
const modulo = (a, b) => a % b


const soma = somar (70, 30)
const sub = subtracao (70, 30)
const mult = multiplicacao (10, 30)
const div = divisao (60, 30)
const mod = modulo (60, 30)


console.log(`Soma ${soma}`)
console.log(`Subtração ${sub}`)
console.log(`Multiplicação ${mult}`)
console.log(`Divisão ${div}`)
console.log(`Resto da divisão ${mod}`)


const verificarvalor = (numero) => numero > 0 ? 'Nao é um numero negativo' : 'É um numero negativo'

const resultado = verificarvalor(-5)

console.log(resultado)
 
 
 
