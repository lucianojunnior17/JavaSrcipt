
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagen')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 21
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora < 12) {
    //Bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#D5D6DB'
    } else if (hora >= 12 && hora <= 18 ){
    //Boa Tarde
        imagen.src = 'fototarde.png'
        document.body.style.background = '#FB6F01'
    } else {
    //Boa Noite
        imagen.src = 'fotonoite.png'
        document.body.style.background = '#357DB7'
    }
}