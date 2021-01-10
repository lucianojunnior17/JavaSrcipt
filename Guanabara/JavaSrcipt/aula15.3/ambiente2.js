// vetores ou variavel compostas

/* for (variavel a ser criada ; teste lógico ; oq a variavel vai fazer ) {
    console.log( variavel)

} */

let  valores = [8, 1, 8, 4, 8, 11]
valores.sort

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição: ${pos} tem o valor ${valores[pos]}`)
}

/* for (let pos in num) {
    console.log(num[pos])
}*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}