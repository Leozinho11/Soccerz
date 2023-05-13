userName.innerHTML = sessionStorage.NOME_USUARIO;

if (sessionStorage.TIME_USUARIO == "Flamengo") {
    var headerClass = document.getElementById("header")
    var headerLinksClass = document.getElementById("headerLinks")
    var headerImgClass = document.getElementById("headerImg")
    headerClass.classList.remove("header")
    headerClass.classList.add("flamengoHeader")
    headerLinksClass.classList.remove("headerLinks")
    headerLinksClass.classList.add("flamengoLinks")
    headerImgClass.classList.remove("headerImg")
    headerImgClass.classList.add("flamengoImg")

    headerImgTeam.innerHTML = `<img src="../Assets/logoIndividual.svg" alt="">
    <p>|</p>
    <img class="timeImg" src="../Assets/TimesImages/Flamengo.svg" alt="">`

    cardContainerImg.innerHTML = `<img src="../Assets/MenuImages/Zico.svg" alt="">`
}

if (sessionStorage.TIME_USUARIO == "Santos") {
    var headerClass = document.getElementById("header")
    var headerLinksClass = document.getElementById("headerLinks")
    var headerImgClass = document.getElementById("headerImg")
    headerClass.classList.remove("header")
    headerClass.classList.add("santosHeader")
    headerLinksClass.classList.remove("headerLinks")
    headerLinksClass.classList.add("santosLinks")
    headerImgClass.classList.remove("headerImg")
    headerImgClass.classList.add("santosImg")

    headerImgTeam.innerHTML = `<img src="../Assets/logoIndividual.svg" alt="">
    <p>|</p>
    <img class="timeImg" src="../Assets/TimesImages/Santos.svg" alt="">`

    cardContainerImg.innerHTML = `<img src="../Assets/MenuImages/Neymar.svg" alt="">`
}

if (sessionStorage.TIME_USUARIO == "Palmeiras") {
    var headerClass = document.getElementById("header")
    var headerLinksClass = document.getElementById("headerLinks")
    var headerImgClass = document.getElementById("headerImg")
    headerClass.classList.remove("header")
    headerClass.classList.add("palmeirasHeader")
    headerLinksClass.classList.remove("headerLinks")
    headerLinksClass.classList.add("palmeirasLinks")
    headerImgClass.classList.remove("headerImg")
    headerImgClass.classList.add("palmeirasImg")

    headerImgTeam.innerHTML = `<img src="../Assets/logoIndividual.svg" alt="">
    <p>|</p>
    <img class="timeImg" src="../Assets/TimesImages/Palmeiras.svg" alt="">`

    cardContainerImg.innerHTML = `<img src="../Assets/MenuImages/Marcos.svg" alt="">`
}

if (sessionStorage.TIME_USUARIO == "São Paulo") {
    var headerClass = document.getElementById("header")
    var headerLinksClass = document.getElementById("headerLinks")
    var headerImgClass = document.getElementById("headerImg")
    headerClass.classList.remove("header")
    headerClass.classList.add("saopauloHeader")
    headerLinksClass.classList.remove("headerLinks")
    headerLinksClass.classList.add("saopauloLinks")
    headerImgClass.classList.remove("headerImg")
    headerImgClass.classList.add("saopauloImg")

    headerImgTeam.innerHTML = `<img src="../Assets/logoIndividual.svg" alt="">
    <p>|</p>
    <img class="timeImg" src="../Assets/TimesImages/SaoPaulo.svg" alt="">`

    cardContainerImg.innerHTML = `<img src="../Assets/MenuImages/Ceni.svg" alt="">`
}

if (sessionStorage.TIME_USUARIO == "Corinthians") {
    var headerClass = document.getElementById("header")
    var headerLinksClass = document.getElementById("headerLinks")
    var headerImgClass = document.getElementById("headerImg")
    headerClass.classList.remove("header")
    headerClass.classList.add("corinthiansHeader")
    headerLinksClass.classList.remove("headerLinks")
    headerLinksClass.classList.add("corinthiansLinks")
    headerImgClass.classList.remove("headerImg")
    headerImgClass.classList.add("corinthiansImg")

    headerImgTeam.innerHTML = `<img src="../Assets/logoIndividual.svg" alt="">
    <p>|</p>
    <img class="timeImg" src="../Assets/TimesImages/Corinthians.svg" alt="">`

    cardContainerImg.innerHTML = `<img src="../Assets/MenuImages/Socrates.svg" alt="">`
}

if (sessionStorage.TIME_USUARIO == "Internacional") {
    var headerClass = document.getElementById("header")
    var headerLinksClass = document.getElementById("headerLinks")
    var headerImgClass = document.getElementById("headerImg")
    headerClass.classList.remove("header")
    headerClass.classList.add("internacionalHeader")
    headerLinksClass.classList.remove("headerLinks")
    headerLinksClass.classList.add("internacionalLinks")
    headerImgClass.classList.remove("headerImg")
    headerImgClass.classList.add("internacionalImg")

    headerImgTeam.innerHTML = `<img src="../Assets/logoIndividual.svg" alt="">
    <p>|</p>
    <img class="timeImg" src="../Assets/TimesImages/Internacional.svg" alt="">`

    cardContainerImg.innerHTML = `<img src="../Assets/MenuImages/Falcão.svg" alt="">`
}

if (sessionStorage.TIME_USUARIO == "Grêmio") {
    var headerClass = document.getElementById("header")
    var headerLinksClass = document.getElementById("headerLinks")
    var headerImgClass = document.getElementById("headerImg")
    headerClass.classList.remove("header")
    headerClass.classList.add("gremioHeader")
    headerLinksClass.classList.remove("headerLinks")
    headerLinksClass.classList.add("gremioLinks")
    headerImgClass.classList.remove("headerImg")
    headerImgClass.classList.add("gremioImg")

    headerImgTeam.innerHTML = `<img src="../Assets/logoIndividual.svg" alt="">
    <p>|</p>
    <img class="timeImg" src="../Assets/TimesImages/Gremio.svg" alt="">`

    cardContainerImg.innerHTML = `<img src="../Assets/MenuImages/RenatoPortaluppi.svg" alt="">`
}

if (sessionStorage.TIME_USUARIO == "Goiás") {
    var headerClass = document.getElementById("header")
    var headerLinksClass = document.getElementById("headerLinks")
    var headerImgClass = document.getElementById("headerImg")
    headerClass.classList.remove("header")
    headerClass.classList.add("goiasHeader")
    headerLinksClass.classList.remove("headerLinks")
    headerLinksClass.classList.add("goiasLinks")
    headerImgClass.classList.remove("headerImg")
    headerImgClass.classList.add("goiasImg")

    headerImgTeam.innerHTML = `<img src="../Assets/logoIndividual.svg" alt="">
    <p>|</p>
    <img class="timeImg" src="../Assets/TimesImages/Goias.svg" alt="">`

    cardContainerImg.innerHTML = `<img src="../Assets/MenuImages/Luvanor.svg" alt="">`
}

if (sessionStorage.TIME_USUARIO == "Coritiba") {
    var headerClass = document.getElementById("header")
    var headerLinksClass = document.getElementById("headerLinks")
    var headerImgClass = document.getElementById("headerImg")
    headerClass.classList.remove("header")
    headerClass.classList.add("coritibaHeader")
    headerLinksClass.classList.remove("headerLinks")
    headerLinksClass.classList.add("coritibaLinks")
    headerImgClass.classList.remove("headerImg")
    headerImgClass.classList.add("coritibaImg")

    headerImgTeam.innerHTML = `<img src="../Assets/logoIndividual.svg" alt="">
    <p>|</p>
    <img class="timeImg" src="../Assets/TimesImages/Coritiba.svg" alt="">`

    cardContainerImg.innerHTML = `<img src="../Assets/MenuImages/Kleber.svg" alt="">`
}

if (sessionStorage.TIME_USUARIO == "América-MG") {
    var headerClass = document.getElementById("header")
    var headerLinksClass = document.getElementById("headerLinks")
    var headerImgClass = document.getElementById("headerImg")
    headerClass.classList.remove("header")
    headerClass.classList.add("americamgHeader")
    headerLinksClass.classList.remove("headerLinks")
    headerLinksClass.classList.add("americamgLinks")
    headerImgClass.classList.remove("headerImg")
    headerImgClass.classList.add("americamgImg")

    headerImgTeam.innerHTML = `<img src="../Assets/logoIndividual.svg" alt="">
    <p>|</p>
    <img class="timeImg" src="../Assets/TimesImages/AmericaMG.svg" alt="">`

    cardContainerImg.innerHTML = `<img src="../Assets/MenuImages/JairBala.svg" alt="">`
}

if (sessionStorage.TIME_USUARIO == "Atlético-MG") {
    var headerClass = document.getElementById("header")
    var headerLinksClass = document.getElementById("headerLinks")
    var headerImgClass = document.getElementById("headerImg")
    headerClass.classList.remove("header")
    headerClass.classList.add("atleticomgHeader")
    headerLinksClass.classList.remove("headerLinks")
    headerLinksClass.classList.add("atleticomgLinks")
    headerImgClass.classList.remove("headerImg")
    headerImgClass.classList.add("atleticomgImg")

    headerImgTeam.innerHTML = `<img src="../Assets/logoIndividual.svg" alt="">
    <p>|</p>
    <img class="timeImg" src="../Assets/TimesImages/AtleticoMG.svg" alt="">`

    cardContainerImg.innerHTML = `<img src="../Assets/MenuImages/Victor.svg" alt="">`
}

if (sessionStorage.TIME_USUARIO == "Red Bull Bragantino") {
    var headerClass = document.getElementById("header")
    var headerLinksClass = document.getElementById("headerLinks")
    var headerImgClass = document.getElementById("headerImg")
    headerClass.classList.remove("header")
    headerClass.classList.add("rbbragantinoHeader")
    headerLinksClass.classList.remove("headerLinks")
    headerLinksClass.classList.add("rbbragantinoLinks")
    headerImgClass.classList.remove("headerImg")
    headerImgClass.classList.add("rbbragantinoImg")

    headerImgTeam.innerHTML = `<img src="../Assets/logoIndividual.svg" alt="">
    <p>|</p>
    <img class="timeImg" src="../Assets/TimesImages/RBBragantino.svg" alt="">`

    cardContainerImg.innerHTML = `<img src="../Assets/MenuImages/Claudinho.svg" alt="">`
}

if (sessionStorage.TIME_USUARIO == "Vasco") {
    var headerClass = document.getElementById("header")
    var headerLinksClass = document.getElementById("headerLinks")
    var headerImgClass = document.getElementById("headerImg")
    headerClass.classList.remove("header")
    headerClass.classList.add("vascoHeader")
    headerLinksClass.classList.remove("headerLinks")
    headerLinksClass.classList.add("vascoLinks")
    headerImgClass.classList.remove("headerImg")
    headerImgClass.classList.add("vascoImg")

    headerImgTeam.innerHTML = `<img src="../Assets/logoIndividual.svg" alt="">
    <p>|</p>
    <img class="timeImg" src="../Assets/TimesImages/Vasco.svg" alt="">`

    cardContainerImg.innerHTML = `<img src="../Assets/MenuImages/Dinamite.svg" alt="">`
}

if (sessionStorage.TIME_USUARIO == "Botafogo") {
    var headerClass = document.getElementById("header")
    var headerLinksClass = document.getElementById("headerLinks")
    var headerImgClass = document.getElementById("headerImg")
    headerClass.classList.remove("header")
    headerClass.classList.add("botafogoHeader")
    headerLinksClass.classList.remove("headerLinks")
    headerLinksClass.classList.add("botafogoLinks")
    headerImgClass.classList.remove("headerImg")
    headerImgClass.classList.add("botafogoImg")

    headerImgTeam.innerHTML = `<img src="../Assets/logoIndividual.svg" alt="">
    <p>|</p>
    <img class="timeImg" src="../Assets/TimesImages/Botafogo.svg" alt="">`

    cardContainerImg.innerHTML = `<img src="../Assets/MenuImages/Garrincha.svg" alt="">`
}

if (sessionStorage.TIME_USUARIO == "Fluminense") {
    var headerClass = document.getElementById("header")
    var headerLinksClass = document.getElementById("headerLinks")
    var headerImgClass = document.getElementById("headerImg")
    headerClass.classList.remove("header")
    headerClass.classList.add("fluminenseHeader")
    headerLinksClass.classList.remove("headerLinks")
    headerLinksClass.classList.add("fluminenseLinks")
    headerImgClass.classList.remove("headerImg")
    headerImgClass.classList.add("fluminenseImg")

    headerImgTeam.innerHTML = `<img src="../Assets/logoIndividual.svg" alt="">
    <p>|</p>
    <img class="timeImg" src="../Assets/TimesImages/Fluminense.svg" alt="">`

    cardContainerImg.innerHTML = `<img src="../Assets/MenuImages/Fred.svg" alt="">`
}

if (sessionStorage.TIME_USUARIO == "Fortaleza") {
    var headerClass = document.getElementById("header")
    var headerLinksClass = document.getElementById("headerLinks")
    var headerImgClass = document.getElementById("headerImg")
    headerClass.classList.remove("header")
    headerClass.classList.add("fortalezaHeader")
    headerLinksClass.classList.remove("headerLinks")
    headerLinksClass.classList.add("fortalezaLinks")
    headerImgClass.classList.remove("headerImg")
    headerImgClass.classList.add("fortalezaImg")

    headerImgTeam.innerHTML = `<img src="../Assets/logoIndividual.svg" alt="">
    <p>|</p>
    <img class="timeImg" src="../Assets/TimesImages/Fortaleza.svg" alt="">`

    cardContainerImg.innerHTML = `<img src="../Assets/MenuImages/Clodoaldo.svg" alt="">`
}

if (sessionStorage.TIME_USUARIO == "Bahia") {
    var headerClass = document.getElementById("header")
    var headerLinksClass = document.getElementById("headerLinks")
    var headerImgClass = document.getElementById("headerImg")
    headerClass.classList.remove("header")
    headerClass.classList.add("bahiaHeader")
    headerLinksClass.classList.remove("headerLinks")
    headerLinksClass.classList.add("bahiaLinks")
    headerImgClass.classList.remove("headerImg")
    headerImgClass.classList.add("bahiaImg")

    headerImgTeam.innerHTML = `<img src="../Assets/logoIndividual.svg" alt="">
    <p>|</p>
    <img class="timeImg" src="../Assets/TimesImages/Bahia.svg" alt="">`

    cardContainerImg.innerHTML = `<img src="../Assets/MenuImages/Bobo.svg" alt="">`
}

if (sessionStorage.TIME_USUARIO == "Athletico-PR") {
    var headerClass = document.getElementById("header")
    var headerLinksClass = document.getElementById("headerLinks")
    var headerImgClass = document.getElementById("headerImg")
    headerClass.classList.remove("header")
    headerClass.classList.add("athleticoprHeader")
    headerLinksClass.classList.remove("headerLinks")
    headerLinksClass.classList.add("athleticoprLinks")
    headerImgClass.classList.remove("headerImg")
    headerImgClass.classList.add("athleticoprImg")

    headerImgTeam.innerHTML = `<img src="../Assets/logoIndividual.svg" alt="">
    <p>|</p>
    <img class="timeImg" src="../Assets/TimesImages/AthleticoPR.svg" alt="">`

    cardContainerImg.innerHTML = `<img src="../Assets/MenuImages/Pablo.svg" alt="">`
}

if (sessionStorage.TIME_USUARIO == "Cuiabá") {
    var headerClass = document.getElementById("header")
    var headerLinksClass = document.getElementById("headerLinks")
    var headerImgClass = document.getElementById("headerImg")
    headerClass.classList.remove("header")
    headerClass.classList.add("cuiabaHeader")
    headerLinksClass.classList.remove("headerLinks")
    headerLinksClass.classList.add("cuiabaLinks")
    headerImgClass.classList.remove("headerImg")
    headerImgClass.classList.add("cuiabaImg")

    headerImgTeam.innerHTML = `<img src="../Assets/logoIndividual.svg" alt="">
    <p>|</p>
    <img class="timeImg" src="../Assets/TimesImages/Cuiaba.svg" alt="">`

    cardContainerImg.innerHTML = `<img src="../Assets/MenuImages/AndersonConceicao.svg" alt="">`
}

if (sessionStorage.TIME_USUARIO == "Cruzeiro") {
    var headerClass = document.getElementById("header")
    var headerLinksClass = document.getElementById("headerLinks")
    var headerImgClass = document.getElementById("headerImg")
    headerClass.classList.remove("header")
    headerClass.classList.add("cruzeiroHeader")
    headerLinksClass.classList.remove("headerLinks")
    headerLinksClass.classList.add("cruzeiroLinks")
    headerImgClass.classList.remove("headerImg")
    headerImgClass.classList.add("cruzeiroImg")

    headerImgTeam.innerHTML = `<img src="../Assets/logoIndividual.svg" alt="">
    <p>|</p>
    <img class="timeImg" src="../Assets/TimesImages/Cruzeiro.svg" alt="">`

    cardContainerImg.innerHTML = `<img src="../Assets/MenuImages/Alex.svg" alt="">`
}