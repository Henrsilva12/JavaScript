/*
let amigo = {}
console.log(typeof amigo)
 são a mesma coisa
let amigo = []
console.log(typeof amigo)
*/
let amigo = {nome: "José", 
sexo: 'M', 
peso: 85.4, 
engordar(p=0) {
    console.log('Engordou')
    this.peso += p
} }
amigo.engordar(2) /*função dentro de variaveis*/
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)