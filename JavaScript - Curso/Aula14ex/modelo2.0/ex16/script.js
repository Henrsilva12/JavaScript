function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //o res.innerHTML... pode ser aqui tbm
        res.innerHTML = 'Impossível contar!'  
        //window.alert('[ERRO] Faltam dados!')
    } else {
        //usou o <br> para quebra de linha
      res.innerHTML = 'Contando: <br>'
     //aqui vai fazer a conversão dos números 
     let i = Number(inicio.value)
     let f = Number(fim.value)
     let p = Number(passo.value)
     // aqui vai aparecer o resultado da contagem
     if (p <= 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
     }
     if(i < f) {
    //Essa contagem só funciona se for do menor pro maior ai vai usar o if
     for (let c = i; c <= f; c+= p) {
        //mostrando a bandeira pra representar a chegada
        res.innerHTML += ` ${c} \u{1F449} `
     }
     } else {
        // Contagem regressiva
        for(let c = i; c >=f; c -= p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
     }
     res.innerHTML += `\u{1F3C1}`
    }
}
