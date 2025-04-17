let dia = Math.floor(Math.random() * 6);
let semana = ["Domingo", "Segunda","Terça","Quarta","Quinta","Sexta","Sabado"];
let diasDaSemana = semana[dia]

if (diasDaSemana == 1){
    console.log('domingo não é dia util', diasDaSemana, dia)
}else if(dia == 6){
    console.log('Sabado não é dia util', diasDaSemana, dia)
}
else{
    console.log('Dia util', diasDaSemana, dia)
}

let idadeVotacao = 20

if(idadeVotacao < 16){
    console.log('é nemo de 16 não pode votar ')
}
else if(idadeVotacao == 16 || idadeVotacao == 17 ){
    console.log('Entre 16 e 17 anos o voto é opcional')
}
else if(idadeVotacao > 18 && idadeVotacao < 65){
    console.log('A partir dos 18 o voto é obrigatorio')
}
else if(idadeVotacao > 65 ){
    console.log('O voto a partir dos 65 é opcional')
}

let a = 10
let b = 10
let c = 15

if(a + b < c){
    console.log(`A soma de ${a} + ${b} é menor que ${c}`)
}
else if(a + b > c ){
    console.log(`A soma de ${a} + ${b} é maior que ${c}`)
}


// modulado 
let par = Math.floor(Math.random() * 10) + 1 ;

if(par %2 == 0 ){
    console.log('O numero é par', par)
}else{
    console.log('O numero é impar', par)
}