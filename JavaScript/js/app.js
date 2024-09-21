// console - navegador

console.log("Olá, sou o console");

//varíaveis - JS é fracamente tipado (não precisa colocar int, double)
//tipagem ocorre no momento da atribuição
//let e const tem escopo de bloco e função

let nomeUsuario = "Matheus Rocha";
let emailUsuario = "ahnynib.mr@gmail.com";
let idUsuario = 789456;
let logado = true;
const DATA_NASCIMENTO = "03/08/2004";
console.log(nomeUsuario, emailUsuario);
console.log(idUsuario, logado);
console.log(DATA_NASCIMENTO);

// typeof - Exibe o tipo utilizado
console.log(typeof idUsuario);

// gera um erro pois data de nascimento é uma const
// dataNascimento = "02/11"
// var é muito antiquado, NUNCA USAR!!

// template string - template literal
// deve começar e terminar com crase ``
// placeholder ${variável - método - objeto - cálculo}
console.log(`Usuario ${nomeUsuario} Email ${emailUsuario} ${1*1000} ${idUsuario -100}`);

const minhaDiv = document.getElementById('divUsuario');
console.log(minhaDiv);

minhaDiv.innerHTML =`
                        <ul class="list-unstyled">
                            <li class="bg-warning p-3">${nomeUsuario}</li>
                            <li>${idUsuario}</li>
                            <li>${emailUsuario}</li>
                            <li>${logado}</li>
                        </ul>
                    `