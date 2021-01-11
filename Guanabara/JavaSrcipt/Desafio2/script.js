let nota = ''
let p1 = document.getElementById('num1')
let p2 = document.getElementById('num2')
let pp = document.getElementById('pp')
let res = document.getElementById('res')


function calcular() {
    let nota = p1 + p2 + pp
}

res.innerHTML += `<p> A nota foi ${nota} </p>`