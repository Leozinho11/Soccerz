function validacaoLogin() {
    var email = inputEmail.value;
    var senha = inputSenha.value;

    if (email == "" || senha == "") {
        alert("Insira seu email e senha !!")
    }
}



function entrar() {

    validacaoLogin();

    

    var emailVar = inputEmail.value;
    var senhaVar = inputSenha.value;

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.SOBRENOME_USUARIO = json.sobrenome;
                sessionStorage.TIME_USUARIO = json.fkTime;
                sessionStorage.ID_USUARIO = json.idUsuario;

                window.location = "UserPage.html";

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");
            alert("Email e/ou senha incorretos")
            inputEmail.value = ""
            inputSenha.value = ""
            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}