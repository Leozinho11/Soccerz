var pontuacoes = [0, 1, 3]
var contador = 1
var somaPontos = 0

function simular() {
    var time = selectTime.value
    var imagemTime = ""

    if (time == "Selecionar") {
        alert("Selecione um time")
        throw("Erro")
    } else if (time == "Santos") {
        imagemTime = `<img src="../Assets/TimesImages/Santos.svg" alt="">`
    } else if (time == "América-MG") {
        imagemTime = `<img src="../Assets/TimesImages/AmericaMG.svg" alt="">`
    }
     else if (time == "Athletico-PR") {
        imagemTime = `<img src="../Assets/TimesImages/AthleticoPR.svg" alt="">`
    }
     else if (time == "Atlético-MG") {
        imagemTime = `<img src="../Assets/TimesImages/AtleticoMG.svg" alt="">`
    }
     else if (time == "Bahia") {
        imagemTime = `<img src="../Assets/TimesImages/Bahia.svg" alt="">`
    }
     else if (time == "Botafogo") {
        imagemTime = `<img src="../Assets/TimesImages/Botafogo.svg" alt="">`
    }
     else if (time == "Corinthians") {
        imagemTime = `<img src="../Assets/TimesImages/Corinthians.svg" alt="">`
    }
     else if (time == "Coritiba") {
        imagemTime = `<img src="../Assets/TimesImages/Coritiba.svg" alt="">`
    }
     else if (time == "Cruzeiro") {
        imagemTime = `<img src="../Assets/TimesImages/Cruzeiro.svg" alt="">`
    }
     else if (time == "Cuiabá") {
        imagemTime = `<img src="../Assets/TimesImages/Cuiaba.svg" alt="">`
    }
     else if (time == "Flamengo") {
        imagemTime = `<img src="../Assets/TimesImages/Flamengo.svg" alt="">`
    }
     else if (time == "Fluminense") {
        imagemTime = `<img src="../Assets/TimesImages/Fluminense.svg" alt="">`
    }
     else if (time == "Fortaleza") {
        imagemTime = `<img src="../Assets/TimesImages/Fortaleza.svg" alt="">`
    }
     else if (time == "Goiás") {
        imagemTime = `<img src="../Assets/TimesImages/Goias.svg" alt="">`
    }
     else if (time == "Grêmio") {
        imagemTime = `<img src="../Assets/TimesImages/Gremio.svg" alt="">`
    }
     else if (time == "Internacional") {
        imagemTime = `<img src="../Assets/TimesImages/Internacional.svg" alt="">`
    }
     else if (time == "Palmeiras") {
        imagemTime = `<img src="../Assets/TimesImages/Palmeiras.svg" alt="">`
    }
     else if (time == "Red Bull Bragantino") {
        imagemTime = `<img src="../Assets/TimesImages/RBBragantino.svg" alt="">`
    }
     else if (time == "São Paulo") {
        imagemTime = `<img src="../Assets/TimesImages/SaoPaulo.svg" alt="">`
    }
     else if (time == "Vasco") {
        imagemTime = `<img src="../Assets/TimesImages/Vasco.svg" alt="">`
    }

    while (contador <= 38) {
        var rodada = parseInt(Math.random() * 3)
        var resultadoRodada = pontuacoes[rodada]
        
        if (resultadoRodada == 0) {
            resultado.innerHTML += `<p> Rodada ${contador} = Derrota</p><br>`
        } else if (resultadoRodada == 1) {
            resultado.innerHTML += `<p>Rodada ${contador} = Empate</p><br>`
        } else {
            resultado.innerHTML += `<p>Rodada ${contador} = Vitória</p><br>`
        }
        somaPontos = somaPontos + resultadoRodada
        contador++;
    }
    if (somaPontos <= 45) {
        somaTotal.innerHTML = `<p class="somaText">O ${imagemTime} ${time} foi rebaixado para serie B com <span>${somaPontos} pontos</span></p>`
    } else if (somaPontos > 45 && somaPontos <= 50) {
        somaTotal.innerHTML = `<p class="somaText">O ${imagemTime} ${time} se manteve na serie A com <span>${somaPontos} pontos</span></p>`
    } else if (somaPontos > 50 && somaPontos < 60) {
        somaTotal.innerHTML = `<p class="somaText">O ${imagemTime} ${time} se classificou para a Sulamericana com <span>${somaPontos} pontos</span></p>`
    } else if (somaPontos >= 60 && somaPontos < 65 ) {
        somaTotal.innerHTML = `<p class="somaText">O ${imagemTime} ${time} se classificou para a Libertadores com <span>${somaPontos} pontos</span></p>`
    } else{
        somaTotal.innerHTML = `<p class="somaText">O ${imagemTime} ${time} foi campeão com <span>${somaPontos} pontos</span></p>`
    }

    
}
