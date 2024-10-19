// recuperar  o tbody da pagina
const tbody = document.querySelector('#historicoContas');
console.log(tbody);

// recuperar o formulário (preciso controlar o retorno dos dados) - atribuir um listener para o submit
// o envio será cancelado - criar uma função para colocar os dados na tabela

document.querySelector('form').addEventListener('submit', function(e) /*é comum representar parametros
com e,event ou evento*/ {
    //cancelar o submit
    e.preventDefault();

    // criar um array contendo os campos do formulário
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataDoCadastro'),
        document.querySelector('#tipoDeConta')
    ];

    // criar uma tr
    const tr = document.createElement('tr');

    // percorrer o array campos
    campos.forEach(campo => {
        // criar uma td, cada campo terá uma td especifica
        const td = document.createElement('td');

        // passar o valor do formulário para uma td
        td.textContent = campo.value;
        
        // colocar a td dentro da tr
        tr.appendChild(td);
    });

    // colocar a tr dentro do tbody
    tbody.appendChild(tr);

    //limpar o formulário
    this.reset();
    // sempre que recebemos algum dado, este dado é STRING
});
