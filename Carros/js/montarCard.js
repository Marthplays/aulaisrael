const gridCard = document.querySelector('#gridCards');

let totalCarroLoja = 0;

//para selecionar especificos
//if(carro.cor.toLowerCase() == 'vermelho') {

carros.forEach(carro => {
    gridCard.innerHTML += `
    <div class = "col-md-6 col-lg-4 my-2">
        <div class="card">
            <img src="${carro.foto}" class="card-img-top" alt="${carro.modelo} - ${carro.marca}">
            <div class="card-body">
                <h5 class="card-title">${carro.modelo} - ${carro.marca}</h5>
                <div class = "d-flex justify-content-between">
                <p>${carro.ano}</p>
                <p>${carro.cor}</p>
                </div>
                <h4 class = "text-primary">${formatarMoeda(carro.preco)}</h4>
            </div>
        </div>
    </div>
    `;
    totalCarroLoja++;
})

document.querySelector('#totalEstoque').textContent = totalCarroLoja;