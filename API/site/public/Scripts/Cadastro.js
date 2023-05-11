function validacaoCadastro() {
    var nome = inputNome.value;
    var sobrenome = inputSobrenome.value;
    var CPF = inputCPF.value;
    var rua = inputRua.value;
    var numero = inputNumero.value;
    var bairro = inputBairro.value;
    var UF = selectUF.value;
    var email = inputEmail.value;
    var senha = inputSenha.value;
    var time = selectTime.value;


    if (nome == "") {
        classObj = document.getElementById("inputNome")
        classObj.classList.remove("inputNome")
        classObj.classList.add("inputError")
        alert("Insira seu nome")
    } else {
        classObj = document.getElementById("inputNome")
        classObj.classList.remove("inputError")
        classObj.classList.add("inputNome")
    };

    if (sobrenome == "") {
        classObj = document.getElementById("inputSobrenome")
        classObj.classList.remove("inputSobrenome")
        classObj.classList.add("inputError")
        alert("Insira seu sobrenome")
    } else {
        classObj = document.getElementById("inputSobrenome")
        classObj.classList.remove("inputError")
        classObj.classList.add("inputSobrenome")
    };

    if (CPF == "") {
        classObj = document.getElementById("inputCPF")
        classObj.classList.remove("inputCPF")
        classObj.classList.add("inputError")
        alert("Insira seu CPF")
    } else {
        classObj = document.getElementById("inputCPF")
        classObj.classList.add("inputCPF")
        classObj.classList.remove("inputError")
    };

    if (CPF[3] != "." || CPF[7] != "." || CPF[11] != "-") {
        classObj = document.getElementById("inputCPF")
        classObj.classList.remove("inputCPF")
        classObj.classList.add("inputError")
        alert("Insira a pontuação no CPF")
    } else {
        classObj = document.getElementById("inputCPF")
        classObj.classList.add("inputCPF")
        classObj.classList.remove("inputError")
    };

    if (rua == "") {
        classObj = document.getElementById("inputRua")
        classObj.classList.remove("inputRua")
        classObj.classList.add("inputError")
        alert("Insira sua rua")
    } else {
        classObj = document.getElementById("inputRua")
        classObj.classList.remove("inputError")
        classObj.classList.add("inputRua")
    };

    if (numero == "") {
        classObj = document.getElementById("inputNumero")
        classObj.classList.remove("inputNumero")
        classObj.classList.add("inputError")
        alert("Insira o número de sua casa")
    } else {
        classObj = document.getElementById("inputNumero")
        classObj.classList.remove("inputError")
        classObj.classList.add("inputNumero")
    };

    if (bairro == "") {
        classObj = document.getElementById("inputBairro")
        classObj.classList.remove("inputBairro")
        classObj.classList.add("inputError")
        alert("Insira seu bairro")
    } else {
        classObj = document.getElementById("inputBairro")
        classObj.classList.remove("inputError")
        classObj.classList.add("inputBairro")
    };

    if (UF == "Selecionar") {
        classObj = document.getElementById("selectUF")
        classObj.classList.remove("selectUF")
        classObj.classList.add("selectError")
        alert("Selecione seu estado")
    } else {
        classObj = document.getElementById("selectUF")
        classObj.classList.remove("selectError")
        classObj.classList.add("selectUF")
    };


    if (email == "") {
        classObj = document.getElementById("inputEmail")
        classObj.classList.remove("inputEmail")
        classObj.classList.add("inputError")
        alert("Insira seu E-mail!")
    } else {
        classObj = document.getElementById("inputEmail")
        classObj.classList.add("inputEmail")
        classObj.classList.remove("inputError")
    };

    if (senha == "") {
        classObj = document.getElementById("inputSenha")
        classObj.classList.remove("inputSenha")
        classObj.classList.add("inputError")
        alert("Crie uma senha!")
    } else {
        classObj = document.getElementById("inputSenha")
        classObj.classList.add("inputSenha")
        classObj.classList.remove("inputError")
    };

    if (senha.length < 8) {
        classObj = document.getElementById("inputSenha")
        classObj.classList.remove("inputSenha")
        classObj.classList.add("inputError")
        alert("Sua senha deve ter no mínimo 8 carecteres")
    } else {
        classObj = document.getElementById("inputSenha")
        classObj.classList.add("inputSenha")
        classObj.classList.remove("inputError")
    };

    if (time == "Selecionar") {
        classObj = document.getElementById("selectTime")
        classObj.classList.remove("selectTime")
        classObj.classList.add("selectError")
        alert("Selecione seu time")
    } else {
        classObj = document.getElementById("selectTime")
        classObj.classList.remove("selectError")
        classObj.classList.add("selectTime")
    };

    if (document.getElementsByClassName("inputError").length > 0) {

    } else {
        window.location = "../Pages/Login.html"
    }
}

function cadastro() {

    validacaoCadastro();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = inputNome.value;
    var sobrenomeVar = inputSobrenome.value;
    var cpfVar = inputCPF.value;
    var ruaVar = inputRua.value;
    var numeroVar = inputNumero.value;
    var bairroVar = inputBairro.value;
    var ufVar = selectUF.value;
    var emailVar = inputEmail.value;
    var senhaVar = inputSenha.value;
    var timeVar = selectTime.value;



    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            sobrenomeServer: sobrenomeVar,
            cpfServer: cpfVar,
            ruaServer: ruaVar,
            numeroServer: numeroVar,
            bairroServer: bairroVar,
            ufServer: ufVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            timeServer: timeVar,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.location = "../Pages/Login.html";
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}