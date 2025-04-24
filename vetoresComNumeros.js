// aplicando o conceito de vetor com numeros 
const listarNumeros =[2,4,6,8]

console.log('Lista dos valores ')
console.log(listarNumeros)

console.log('\nMultiplicando pos valores da lista')
const multiplicados = listarNumeros.map( numeros => numeros * 2)
console.log(multiplicados)

console.log('\nFilttrando elementos em pares')
const pares = listarNumeros.filter(numeros => numeros %  2 == 0)
console.log(pares)

console.log('\nSomando todos os numeros da lista ')
const soma = listarNumeros.reduce((soma, atual) => soma + atual, 0)
console.log(soma)




