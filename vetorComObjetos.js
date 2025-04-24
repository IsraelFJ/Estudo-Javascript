const usuarios = [
    {nome: 'Tonho', idade: 70},
    {nome: 'Martinha', idade: 60},
    {nome: 'Vicente', idade: 30},
    {nome: 'Toré Kiriki o cacique', idade: 100}
]

// perconrrendo o vetor 
usuarios.forEach((usuario) => 
    console.log(`\nNome: ${usuario.nome} Tem ${usuario.idade} anos de idade` ))

// condiciponal com arrow 
const menorIdade = usuarios.filter((usuario) => usuario.idade < 31)
  menorIdade.forEach((usuario) => 
    console.log(`\nNome ${usuario.nome} Tem ${usuario.idade} anos é um fresco` ))

 // exibir a lista de usuarios salvos na lista 
const listarNomes = usuarios.map(usuario => usuario.nome)
 listarNomes.forEach((nome, index) => 
console.log(`\n${++index}° Nome:  ${nome}`))
 
 // encontrar usuario especifico na lista 
 console.log('\nEncontrar usuario na lista')
 const usuarioEnconatrado = usuarios.find(usuario => usuario.nome === 'Tonho' )
 console.log(usuarioEnconatrado)// Em forma de objeto
 console.log(`\nNome: ${usuarioEnconatrado.nome}, Idade: ${usuarioEnconatrado.idade}`)

 console.log('\nSomando a idade dos usuarios na lista')
 const somarIdades = usuarios.reduce((total, usuario) => total + usuario.idade, 0)
 console.log(`Soma: ${somarIdades}`)