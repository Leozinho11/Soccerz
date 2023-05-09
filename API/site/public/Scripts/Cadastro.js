function cadastro() {
    
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = inputNome.value;
    var sobrenomeVar = inputSobrenome.value;
    var cpfVar = inputCPF.value;
    var ruaVar = inputRua.value;
    var numeroVar = inputNumero.value;
    var bairroVar = inputBairro.value;
    var ufVar = inputUF.value;
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