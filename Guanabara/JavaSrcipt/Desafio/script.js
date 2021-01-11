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
        res.innerHTML = ''
                
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
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media =0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor) {
                menor = valores[pos]                               
            }
        }
        media = soma /tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo foram ${tot} valores adicionados </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}`
        res.innerHTML += `<p> O menor valor informado foi ${menor}`
        res.innerHTML += `<p> Somando todos os valore temos ${soma}`
        res.innerHTML += `<p>  A média dos valores cadastrados é ${media}`
        
    }
}