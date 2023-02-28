let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valor = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valor)) {
      valor.push(Number(num.value))
      let item = document.createElement('option')
      item.text = `Valor ${num.value} adicionado.`
      lista.appendChild(item)
      res.innerHTML=''
    } else {
        window.alert('Valor inválido ou já entrado na lista')
}
num.value = ''
num.focus()
}

function finalizar() {
    if(valor.length == 0 ) {
        window.alert('Adicione valores antes de finalizar')
    } else {
    let tot = valor.length
    let maior =valor[0]
    let menor = valor[0]
    let soma = 0
    let media = 0
    for(let pos in valor) {
        soma += valor[pos]
        if(valor[pos] > maior)
      maior = valor[pos]
      if(valor[pos] < menor)
      menor = valor[pos]
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadrastrados.</p>`
    res.innerHTML += `<p>O maior valor é ${maior}.<p/>`
    res.innerHTML += `<p>O menor valor é ${menor}.<p/>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A médoa dos valores é ${media}.</p>`

    }
    
}