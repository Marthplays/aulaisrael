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
/*
ex11

let intervalo = parseInt(prompt("Digite quantos números deseja ter nesse intervalo:"));
let fi = prompt("Digite um inicio de intervalo Farenheit para converter em celsius:");
let fs = prompt("Digite o fim do intervalo Farenheit para converter em celsius:");

for (let index = 0; index < intervalo; index++) {
    let c = (fi - 32) * 5/9;
    alert(Math.round(c));
    fi++;
}*/
/*
ex12
function formatarMoeda(valor) {
    const valorFormatado = new Intl.NumberFormat ('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
    return valorFormatado;
}

let salarios = [300];
let idades = [300];
let sexo = [300];

let contadorMulher = 0;
let contadorHomem = 0;

for (let index = 0; index < 300; index++) {
    salarios[index] = Math.floor(Math.random() * 20000);
    idades[index] = parseInt(Math.random() * 100);
    sexo[index] = Math.floor(Math.random() * 2);
    if (sexo[index] == 1) {
        sexo[index] = "Mulher";
        contadorMulher++;
    } else {
        sexo[index] = "Homem";
        contadorHomem++;
    }
}

let mediaSalarial = 0;
salarios.forEach(salario => {
    mediaSalarial += salario / salarios.length;
});

let maiorSalario = 0;
let menorSalario = 0;

salarios.forEach(salario => {
    if (maiorSalario < salario) {
        maiorSalario = salario;
    }
});

salarios.forEach(salario => {
    if (menorSalario > salario) {
        menorSalario = salario;
    }
});

let mediaIdade = 0;
idades.forEach(idade => {
    mediaIdade += idade / idades.length;
});

alert(`Média salarial do grupo: ${formatarMoeda(mediaSalarial)}`);
alert(`Menor salário do grupo: ${formatarMoeda(menorSalario)} e o Maior salário do grupo ${formatarMoeda(maiorSalario)}`);
alert(`Homems: ${contadorHomem} e Mulheres: ${contadorMulher}`);
alert(`Média de idade do grupo: ${parseInt(mediaIdade)}`);
*/
/*
ex13
let numero = prompt("Digite um número maior que zero para exibição dos quadrados");

if (numero <= 0) {
    alert("Digite um número válido!");
}

let cont = 0;
let numeros = [numero];

for (let index = 0; index < numero; index++) {
    numeros[index] = cont * cont;
    cont++;
}

console.log(numeros);
*/
/*
ex14
function soma() {
    let somaTotal = 0;
    for (let i = 0; i < 100; i++) {
        somaTotal += i;
        alert(`Número: ${i}, Somatória: ${somaTotal}`);
    }
} 

soma();
*/
/*
ex15
let limite = prompt("Digite quantos números pares deseja visualizar:");
let numero = 2;

for (let index = 0; index < limite; index++) {
    alert(`Números: ${numero}`);
    numero += 2;
}
*/
/*
ex16
let par = 0;
let impar = 0;
let maior500 = 0;
let menor500 = 0;
let entre300e700 = 0;

let numeros = [];

for (let index = 0; index < 200; index++) {
    numeros[index] = parseInt(Math.random() * 1000);
    
    if (numeros[index] % 2 == 0) {
        par++;
    } else {
        impar++;
    }

    if (numeros[index] > 500) {
        maior500++;
    } else {
        menor500++;
    }

    if (numeros[index] >= 300 && numeros[index] <= 700) {
        entre300e700++;
    }
}

alert(`Números pares: ${par} e Números ímpar: ${impar}`);
alert(`Números maiores que 500: ${maior500} e Números menores que 500: ${menor500}`);
alert(`Números entre 300 e 700 são: ${entre300e700}`);
*/
/*
ex17
let lancamentos =  new Array(10);
let somatoria = 0;

function gerarAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let index = 0; index < lancamentos.length; index++) {
    lancamentos[index] = gerarAleatorio(1,6);
    somatoria += lancamentos[index]; 
}

alert(lancamentos);
alert(somatoria);
*/
/*
ex18
for (let index = 1; index < 10; index++) {
    alert(`${index}/${index+index}`);
}
*/
/*
ex19
function fibonacci(n) {
    let fib = [0, 1];  

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; 
    }
    return fib;
}

let n = 20;
let fibonacciSequence = fibonacci(n);
alert(fibonacciSequence);
*/
/*
ex20
let numeroAleatorio = Math.floor(Math.random() * 10);
let numeros = [];

if (numeroAleatorio % 2 === 0) {
    numeroAleatorio += 1;
}

for (let i = 0; i < 10; i++) {
    numeros[i] = numeroAleatorio + (i * 2);
}

console.log(`Número sorteado: ${numeroAleatorio}`);
console.log(`10 números ímpares consecutivos: ${numeros}`);
*/
/*
ex1
let vetor = new Array(50);
let quantidade3e7 = 0;
let menor3 = 0;
let par = 0;
let impar = 0;

for (let index = 0; index < vetor.length; index++) {
    vetor[index] = Math.floor(Math.random() * 10);
    if (vetor[index] > 3 && vetor[index] < 7) {
        quantidade3e7++;
    }

    if (vetor[index] < 3) {
        menor3++;
    }

    if (vetor[index] % 2 == 0) {
        par++;
    } else {
        impar++;
    }
}

alert(`
    ${vetor}
    A quantidade de números entre 3 e 7: ${quantidade3e7}
    A quantidade de números menores que 3: ${menor3}
    Quantidade números pares: ${par}
    Quantidade números impares: ${impar}
    `)

*/
/*
ex1
let vetor = new Array(5);
let multiplo2 = [];
let multiplo5 = [];
let multiplo2e5 = [];

for (let index = 0; index < vetor.length; index++) {
    vetor[index] = Math.floor(Math.random() * 100);
    if (vetor[index] % 2 == 0) {
        multiplo2 = vetor[index];
        multiplo2e5 = vetor[index];
    }

    if (vetor[index] % 5 == 0) {
        multiplo5 = vetor[index];
        multiplo2e5 = vetor[index];
    }

}

alert(`Vetor de 5:
    ${vetor}
    Múltiplos de 2: 
    ${multiplo2}
    Múltiplos de 5: 
    ${multiplo5}
    Múltiplos de 2 e 5: 
    ${multiplo2e5}`);
*/
