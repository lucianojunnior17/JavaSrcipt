function verificar() {
    //window.alert('foi?')
    var data = new Date()
    var ano = data.getUTCFullYear()
    var  fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente !!')
    } else {
        //window.alert('Ok')
        var fsex = document.getElementsByName('radsex')
    }

}