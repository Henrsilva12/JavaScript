function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours() //ou o de baixo
//var hora =  12
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12) {
   //  BOM DIA! 
   img.src = 'mp11.png'
   document.body.style.background = '#798086'
} else if(hora >=12 && hora < 18) {
    // BOA TARDE!
    img.src = 'mp2.png'
    document.body.style.background = '#4C0D0E'
} else {
    //BOA NOITE!
    img.src = 'mp3.png'
    document.body.style.background = '#93C0F4'
}
}