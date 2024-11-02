function formatarMoeda(valor) {
    const valorFormatado = new Intl.NumberFormat('pt-BR', {

        // estilo de formatação
        style:'currency',

        //qual moeda será convertida
        currency:'BRL'
    }).format(valor);

    return valorFormatado;
}