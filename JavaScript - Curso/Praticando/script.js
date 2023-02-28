function Resultado() {
    var num1 = parseInt(prompt('Digite o primeiro valor'))
    var num2 = parseInt(prompt('Digite o segundo número'))
    var num3 = parseInt(prompt('Digite o terceiro valor'))
    var num4 = parseInt(prompt('Digite o quarto número'))
    var num5 = parseInt(prompt('Digite o quinto número'))

    var n1 = (Math.sqrt(num1))
    var n2 = (Math.sqrt(num2))
    var n3 = (Math.sqrt(num3))
    var n4 = (Math.sqrt(num4))
    var n5 = (Math.sqrt(num5))

    window.alert(`A raiz quadrada de ${num1} é ${n1}`)
    window.alert(`A raiz quadrada de ${num2} é ${n2}`)
    window.alert(`A raiz quadrada de ${num3} é ${n3}`)
    window.alert(`A raiz quadrada de ${num4} é ${n4}`)
    window.alert(`A raiz quadrada de ${num5} é ${n5}`) 
}