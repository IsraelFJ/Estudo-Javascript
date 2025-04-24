// craindo listas em JS
const listarNomes = ['martinha', 'tonho', 'vicente']
console.log('Exibindo nome na posição 0')
console.log(listarNomes[0])
console.log('Exibindo nome na posição 1')
console.log(listarNomes[1])
console.log('Exibindo nome na posição 2')
console.log(listarNomes[2])

// adicionando elemento no vetor 
console.log('Adicionando elemento no vetor')
listarNomes.push('Toré kiriki o cacique')
console.log(listarNomes)
console.log(listarNomes[3])

// percorrer todods os elementos do vetro
console.log('Lisntando todos os nomes do array usando forEach')
listarNomes.forEach((nome) => console.log(nome))

// removendo elementos do vetor 
console.log('Removendo um elemento no vetor')
// utilizando o vetor e o numero do elemento para remover a posição especificada 
listarNomes.splice(0,1)
console.log(listarNomes)

// removendo apenas o primeiro elemento 
console.log('Removendo o primeiro elemento no vetor')
listarNomes.shift()
console.log(listarNomes)

// removendo apenas o ultimeo elemento 
console.log('Removendo o ultimo elemento no vetor')
listarNomes.pop()
console.log(listarNomes)



