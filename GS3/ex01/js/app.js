const tbody = document.querySelector('#paineis');

document.querySelector('#dados').addEventListener('submit', function(e){

    e.preventDefault();

    let consumo = Number(document.querySelector('#consumo').value);
    let potenciaPainel = Number(document.querySelector('#potenciaPainel').value);
    let irradiacaoSolar = Number(document.querySelector('#irradiacaoSolar').value);
    let eficienciaSistema = Number(document.querySelector('#eficienciaSistema').value);

    let numeroPlacas = ((consumo) / ((potenciaPainel) * (irradiacaoSolar) * (eficienciaSistema)) * 30) / 1000;



    console.log(numeroPlacas)

    const campos = [
        {
            consumo: consumo,
            potenciaPainel: potenciaPainel,
            irradiacaoSolar: irradiacaoSolar,
            eficienciaSistema: eficienciaSistema,
            numeroPlacas: numeroPlacas
        }
    ];

    campos.forEach(campo => {
        tbody.innerHTML += `
        <tr>
            <td>${campo.consumo}</td>
            <td>${campo.potenciaPainel}</td>
            <td>${campo.irradiacaoSolar}</td>
            <td>${campo.eficienciaSistema}</td>
            <td>${Math.ceil(campo.numeroPlacas)}</td>
        </tr>
        `
    });
    this.reset();
})