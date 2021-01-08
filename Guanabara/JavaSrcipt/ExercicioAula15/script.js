function contar() {
    var ini = document.getElementById('txt1')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO falta dados Por favor indira um número')

    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f) { //contangem crescente
            for (let c = i; c <=f; c += p) {
                res.innerHTML  += ` ${c} \u{1F923} `//emogi do site lista de emoji
        }         
        } else {
            for (let c = i; c >= f; c -= p) { //contangem regresiva
                res.innerHTML += ` ${c} \u{1F449}`    
            }
    }
    res.innerHTML += `\u{1f3c1}`
    }    
}