const cards = document.querySelector('#paineis');

let totalPaineis = 0;
let maiorValor = 0;

paineis.forEach(painel => {
    if (painel.fabricante == 'Resun' || painel.fabricante == 'ZTROON') {
    cards.innerHTML += `
    <div class="col-12 col-md-6 my-2">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${painel.fabricante}</h5>
                <p>${painel.quantidade_celulas} células</p>
                <div class="d-flex">
                   <p class="me-auto">Tipo de placa: ${painel.tipo_placa}</p><p>Potência: ${painel.potencia}W</p>
                   </div>
                <h3>${formatarMoeda(painel.preco_unitario)}</h3>
                </div>
        </div>
    </div>
    `
    if (painel.preco_unitario > maiorValor) {
        maiorValor = painel.preco_unitario;
    }
    totalPaineis++;
    }
});

document.querySelector('#totalPaineis').textContent = totalPaineis;
document.querySelector('#maiorValor').textContent = formatarMoeda(maiorValor);


