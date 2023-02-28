function GerarTabuada () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0 ) {
        window.alert('Por favor, digite um número meu anjo!')
    } else {
        let n = Number(num.value)
        let c = 1
        //esse comando vai limpar a tabuada escolhida e depois fazer de outro número
        tab.innerHTML = ''
        while (c <=10) {
            //criado o elemento option de forma dinâmica
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}