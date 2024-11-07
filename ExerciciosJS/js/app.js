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
/*
ex5
let saldoMedio = prompt("Digite seu saldo médio para descobrir seu Crédito Especial:");

if (saldoMedio <= 2000) {
    alert("Você não possui Crédito Especial");
} else if (saldoMedio > 2000 && saldoMedio < 10000) {
    alert(`Seu saldo médio é: ${Math.round(saldoMedio * .2)}`);
} else if (saldoMedio > 10000 && saldoMedio < 20000) {
    alert(`Seu saldo médio é: ${Math.round(saldoMedio * .3)}`);
} else {
    alert(`Seu saldo médio é: ${Math.round(saldoMedio * .4)}`);
}
*/
/*
ex6
let peso = prompt("Digite seu peso:");
let altura = prompt("Digite sua altura:");
let IMC = peso / altura * altura;

if (IMC < 18.5) {
    alert("Você está abaixo do peso!");
} else if (IMC > 18.5 && IMC <= 25) {
    alert("Você está no peso normal!");
} else if (IMC > 25 && IMC <= 30) {
    alert("Você está com sobrepeso");
} else if (IMC > 30 && IMC <= 35) {
    alert("Você está com obesidade leve");
} else if (IMC > 35 && IMC <= 40) {
    alert("Você está com obesidade moderada");
} else if (IMC > 40) {
    alert("Você está com obesidade mórbida");
}
*/
let megaBytes = prompt("Digite quantos MegaBytes deseja converter em Bytes:");
let bytes = megaBytes / 1000000;
alert(bytes);




