let valor = [9,8,5,3]
valor.sort()
//console.log(valor) é uma maneira de fazer
/*
console.log(valor[0])
console.log(valor[1])
console.log(valor[2])
console.log(valor[3])


for(let pos=0; pos <valor.length; pos++) {
 console.log(`A posição ${pos} tem o valor ${valor[pos]}`)   
}
*/
for (let pos in valor) {
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}
   