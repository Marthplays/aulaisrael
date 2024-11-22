const tbody = document.querySelector('#paineis');

document.querySelector('#dados').addEventListener('submit', function(e){

    e.preventDefault();

    let consumo = document.querySelector('#consumo').value;
    let potenciaPainel = document.querySelector('#potenciaPainel').value;
    let irradiacaoSolar = document.querySelector('#irradiacaoSolar').value;
    let eficienciaSistema = document.querySelector('#eficienciaSistema').value;

    let numeroPlacas = (parseInt(consumo) / (parseFloat(potenciaPainel) * parseInt(irradiacaoSolar) * parseFloat(eficienciaSistema) * 30));



    console.log(numeroPlacas)

    const campos = [
        {
            consumo: consumo,
            potenciaPainel: potenciaPainel,
            irradiacaoSolar: irradiacaoSolar,
            eficienciaSistema: eficienciaSistema,
            numeroPlacas: numeroPlacas
        }
    ]

    campos.forEach(campo => {
        tbody.innerHTML += `
        <tr>
            <td>${campo.consumo}</td>
            <td>${campo.potenciaPainel}</td>
            <td>${campo.irradiacaoSolar}</td>
            <td>${campo.eficienciaSistema}</td>
            <td>${Math.round(campo.numeroPlacas)}</td>
        </tr>
        `
    });
    this.reset();
})