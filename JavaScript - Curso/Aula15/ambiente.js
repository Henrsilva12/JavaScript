
let num = [5,2,6,4,7]
//num.push(1) //essa posição o comando vai por o num 1 na frente
num.sort()
num.push(1) //aqui q o num 1 vai pro final
console.log(`Nosso vetor é o ${num}`)
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
//posição isolada:
console.log(num[0])
//ou
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(2)
console.log(`O valor 2 está na posição ${pos}`) //vai dizer q o 2 está na posição 0, pois usamos o sort
//caso procure um valor q n existe
/*
let pos = num.indexOf(8)
if(pos== -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
*/


//se mudarmos o num.sort() e por o num.push(1), o resultado d index vai ser assim:

/*
let num = [5,2,6,4,7]
//num.push(1) //essa posição o comando vai por o num 1 na frente
num.push(1)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(num[0])
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(2)
console.log(`O valor 2 está na posição ${pos}`)
*/