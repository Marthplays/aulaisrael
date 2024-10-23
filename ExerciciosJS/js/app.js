/* ex1
let numeros = []

for (let i = 0; i < 5; i++) {
    numeros[i] = Math.round(Math.random()*100)
}
let cont = 0
for (let index = 0; index < 5; index++) {
    const element = numeros[index];
    console.log(element)
    if (numeros[index] > 10) {
        cont++
    }
}
console.log(`A quantidade de números maiores que 10 são: ${cont}`)
*/
/*ex2
let numeros = []
let soma = 0
let media = 0

for (let i = 0; i < 10; i++) {
    numeros[i] = Math.round(Math.random()*100)
    console.log(numeros[i])
}

for (let i = 0; i < 10; i++) {
    soma += numeros[i]
}

console.log(`A soma dos elementos da lista é: ${soma}`)

media = soma/10

console.log(`A média é: ${Math.round(media)}`)

for (let i = 0; i < 10; i++) {
    if (numeros[i] > media) {
        console.log(numeros[i])
    }
}
*/
/*ex3
let numero

numero = Math.floor(Math.random() * 501)

console.log(numero)

if (numero >= 100 && numero <= 300) {
    console.log("O número está no intervalo!")
}*/
/*
ex4
let pesoTerra = prompt("Digite o peso que deseja converter:")
let planeta = prompt("Digite para qual planeta que deseja converter:")
let pesoConvertido

if (planeta.toLowerCase() == "mercúrio") {
    pesoConvertido = (pesoTerra/100)*0.37
} 

if (planeta.toLowerCase() == "vênus") {
    pesoConvertido = (pesoTerra/100)*0.88
}

if (planeta.toLowerCase() == "marte") {
    pesoConvertido = (pesoTerra/100)*0.38
}

if (planeta.toLowerCase() == "júpiter") {
    pesoConvertido = (pesoTerra/100)*2.64
}

if (planeta.toLowerCase() == "saturno") {
    pesoConvertido = (pesoTerra/100)*1.15
}

if (planeta.toLowerCase() == "urano") {
    pesoConvertido = (pesoTerra/100)*1.17
}

alert(`A conversão é: ${pesoConvertido}`)
*/


