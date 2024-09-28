// sorteando o número
//let primeiroNumero = Math.random();
//console.log(primeiroNumero);

//gerando uma parte inteira para o número
//primeiroNumero*=100;

//retornando apenas a parte inteira do numero
//primeiroNumero = parseInt(primeiroNumero);


//retornando o próximo numero inteiro
//primeiroNumero = Math.cell(primeiroNumero)

//retornando a parte inteira do numero
//primeiroNumero = Math.floor(primeiroNumero);

//retornando o proximo inteiro caso decimal seja maior ou igual a 50
//retornando o mesmo inteiro caso decimal seja maior ou igual a 49
//primeiroNumero = Math.round(primeiroNumero);

const primeiroNumero = Math.round(Math.random()*100);
const segundoNumero = Math.round(Math.random()*100);

document.querySelector("#primeironumero").textContent = primeiroNumero;
document.querySelector("#segundonumero").textContent = segundoNumero;

let resultado = (primeiroNumero + segundoNumero);
document.querySelector("#soma").textContent = resultado;

resultado = (primeiroNumero - segundoNumero);
document.querySelector("#subtracao").textContent = resultado;

resultado = (primeiroNumero * segundoNumero);
document.querySelector("#multiplicacao").textContent = resultado;

resultado = (primeiroNumero / segundoNumero);
document.querySelector("#divisao").textContent = resultado.toFixed(2);

resultado = (Math.pow(primeiroNumero,segundoNumero));
document.querySelector("#potencia").textContent = resultado.toFixed(2);

//metodo construtor
//const MeuArray = new Array();

const numeros = [];
//pegar o o botão, adicionar um listener(o qual percebe as ações do usuario) para o click e criar uma função
//para gerar o array quando o botão for clicado
document.querySelector("#btnArray").addEventListener("click",function() {
    for (let i = 0; i < 9; i++) {
        numeros[i] = Math.round(Math.random()*100);
    }
    document.querySelector("#array").textContent = numeros;
})

document.querySelector("#btnMaior").addEventListener("click", () => {
    //...(arrayList) = operador para esparramar a lista, passando todos os valores nela
    let maior = Math.max(...numeros);
    //for (let i = 0; i < numeros.length; i++) {
    //    if (numeros[i] > maior) {
    //        maior = numeros[i];
    //    }
    //}

    document.querySelector("#maiorArray").textContent = maior;
})

document.querySelector("#btnMenor").addEventListener("click", () => {
    let menor = Math.min(...numeros);
    document.querySelector("#menorArray").textContent = menor;
})

const arrayMultiplicado = [];
document.querySelector("#btnMultiplica").addEventListener("click", () => {
    arrayMultiplicado.splice(0);
    numeros.forEach(numero => {
        arrayMultiplicado.push(numero * 2)
    });
    document.querySelector("#arrayMultiplicado").textContent = arrayMultiplicado;
})

const arrayPessoas = [];
document.querySelector("#btnPessoas").addEventListener("click", () => {
    numeros.forEach(numero => {
        arrayMultiplicado.push("João")
    });
    document.querySelector("#arrayPessoas").textContent = arrayPessoas;
})



