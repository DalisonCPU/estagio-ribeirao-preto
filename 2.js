/*
Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
*/

let frase = 'Agora eu estou fazendo o segundo desafio solicitado.'
let quantidadeAMaiusculo = 0
let quantidadeAMinusculo = 0

for (let i = 0; i < frase.length; ++i) {

    if (frase[i] == 'a') quantidadeAMinusculo++
    else if (frase[i] == 'A') quantidadeAMaiusculo++

}

if (quantidadeAMaiusculo == 0 && quantidadeAMinusculo == 0) {
    console.log('A letra a em maiúsculo ou em minúsculo não está presente na frase.')
} else {

    console.log(`A em maiúsculo: ${quantidadeAMaiusculo}.\nA em minúsculo: ${quantidadeAMinusculo}.`)
}