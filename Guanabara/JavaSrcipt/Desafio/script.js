let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }    

}

function calcular() {
    if (isNumero(num.value)  && !inlista(num.value, valores)) {
        valores.push(Number(num.value)) 
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado`
        lista.appendChild(item)
                
    } else {
        window.alert('Valor Invalido')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicone Valores por favor')
    } else {
        let tot = valores.length

        res.innerHTML = ''
        res.innerHTML += `<p> Ap todo foram ${tot} valores adicionados </p>`
    }
}