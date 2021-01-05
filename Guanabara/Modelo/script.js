function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagen')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora < 12) {
    //Bom dia
    } else if (hora >= 12 && hora < 18 ){
    //Boa Tarde
    } else {
    //Boa Noite
    }
}