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
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade Calculada : ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src','bebemenino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','jovemhomem.png')
            } else if (idade < 50) {
                    //adulto
                img.setAttribute('src','adultohomen.png')
            } else {
                //Idoso
                img.setAttribute('src','senhorhomen.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src','meninanova.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','meninajoven.png')
            } else if (idade < 50) {
                    //adulto
                img.setAttribute('src','adultamulher.png')
            } else {
                //Idoso
                img.setAttribute('src','semhoramulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos`
        res.appendChild(img)
    }

}