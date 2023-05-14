function calcularMediaGols() {
        var qtdPartidas = Number(inputQtdPartidas.value);
        var qtdGols = Number(inputQtdGols.value);
        var divisaoGols = qtdGols / qtdPartidas

        divMedia.innerHTML = `<p class="goalsAverageContainer">A sua média de gols por partida nesse mês foi de <span>${divisaoGols} gols</span></p>`
    }

    