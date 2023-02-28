function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    //var res = document.getElementById('res') //ou o de baixo
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else {
        //window.alert('tudo ok')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        //para criar a imagem dinamincamente é assim:
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'kidman.png')
            } else if (idade <21) {
                //Jovem
                img.setAttribute('src', 'manjovem.png')
            } else if (idade <50) {
                //Adulto
                img.setAttribute('src', 'manadulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'manvelho.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'kidgirl.png')
            } else if (idade <21) {
                //Jovem
                img.setAttribute('src', 'girl.png')
            } else if (idade <50) {
                //Adulto
                img.setAttribute('src', 'girladulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center' //pra centralizar a imagem
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //esse codigo vai fazer q a imagem apareça no site
    }

}