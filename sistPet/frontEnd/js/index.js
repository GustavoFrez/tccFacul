$('#btnLogin').click(()=>{
    let login = {
        login: $('#inputLogin').val(),
        senha: $('#inputSenha').val()
    }
    axios.post('http://localhost:2424/adotante/login',login).then(response => {
        let dados = response.data
        console.log(dados)
        if(dados.Ok){
            sessionStorage.userLogin = dados.user.login
            sessionStorage.userNome = dados.user.nome
            sessionStorage.userCpf = dados.user.cpf
            sessionStorage.userSexo = dados.user.sexo
            sessionStorage.userEmail = dados.user.email
            sessionStorage.userNascimento = dados.user.dataDeNascimento
            sessionStorage.userNascimento = dados.user.tel
            sessionStorage.userNascimento = dados.user.endereco

            window.location.href = ('/frontEnd/pets.html') 
        }
        else{ alert(dados.erro)}
    })
}) 