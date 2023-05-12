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


