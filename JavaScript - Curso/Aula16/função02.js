function soma(n1, n2) {
    return n1+n2
}
console.log(soma(2,9))
//pode predefinir os parametros
function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(9,10))  
// e se passar só um valor
console.log(soma(9))