function calcularMediaGols() {
        var qtdPartidas = Number(inputQtdPartidas.value);
        var qtdGols = Number(inputQtdGols.value);
        var mediaAritimetica = qtdGols * qtdPartidas / 30

        divMedia.innerHTML = `A sua média de gols nesse mês foi de <span>${mediaAritimetica} gols</span>`
    }