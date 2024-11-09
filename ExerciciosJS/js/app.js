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
/*
ex7
let megaBytes = prompt("Digite quantos MegaBytes deseja converter em Bytes:");
let bytes = megaBytes / 1000000;
alert(bytes);
/*
ex8
let sim = 0;
let nao = 0;

let telefonou = prompt("Você telefonou para a vítima?");
if (telefonou == "sim") {
    sim++;
} else {
    nao++;
}

let esteve = prompt("Você esteve no local do crime?");
if (esteve == "sim") {
    sim++;
} else {
    nao++;
}

let mora = prompt("Você mora perto da vítima?");
if (mora == "sim") {
    sim++;
} else {
    nao++;
}

let devia = prompt("Você devia para a vítima?");    
if (devia == "sim") {
    sim++;
} else {
    nao++;
}

let trabalhou = prompt("Você trabalhou para a vítima?")
if (trabalhou == "sim") {
    sim++;
} else {
    nao++;
}

if (sim == 2) {
    alert("Você é um suspeito!");
} else if (sim == 3 || sim == 4) {
    alert("Você é um cúmplice!");
} else if (sim == 5) {
    alert("Você é o assassino!");
} else {
    alert("Você é inocente");
}
*/
/*
ex9
let somaNotas = 0;
let notas = [];

for (let index = 0; index < 4; index++) {
    let nota = parseFloat(prompt("Digite sua nota:"));  
    notas.push(nota); 
    somaNotas += nota; 
}

let media = somaNotas / 4;

if (media <= 10 && media >= 9) {
    for (let i = 0; i < 4; i++) {
        alert("Nota " + (i + 1) + ": " + notas[i]);
    }
    alert("A média foi " + media + ", e seu conceito foi A. Parabéns, você foi aprovado!");
} else if (media < 9 && media > 7.5) {
    for (let i = 0; i < 4; i++) {
        alert("Nota " + (i + 1) + ": " + notas[i]);
    }
    alert("A média foi " + media + ", e seu conceito foi B. Parabéns, você foi aprovado!");
} else if (media < 7.5 && media > 9) {
    for (let i = 0; i < 4; i++) {
        alert("Nota " + (i + 1) + ": " + notas[i]);
    }
    alert("A média foi " + media + ", e seu conceito foi C. Parabéns, você foi aprovado!");
} else if (media < 6 && media > 4) {
    for (let i = 0; i < 4; i++) {
        alert("Nota " + (i + 1) + ": " + notas[i]);
    }
    alert("A média foi " + media + ", e seu conceito foi D. Infelizmente, você foi reprovado!");
} else {
    for (let i = 0; i < 4; i++) {
        alert("Nota " + (i + 1) + ": " + notas[i]);
    }
    alert("A média foi " + media + ". Infelizmente, você foi reprovado!");
}
*/
/*
ex10
let diaria = 360;
let taxa = 0;
let total = 0;

let dias = parseInt(prompt("Digite quantos dias você ficou:"));

if (dias > 15) {
    taxa = dias * 35.5;
    total = dias * diaria + taxa;
} else if (dias == 15) {
    taxa = dias * 46;
    total = dias * diaria + taxa;
} else {
    taxa = dias * 58;
    total = dias * diaria + taxa;
}

alert(`Você ficou ${dias} dias e terá que pagar R$ ${total} (taxa de serviço foi de R$ ${taxa})`)
*/
ex
