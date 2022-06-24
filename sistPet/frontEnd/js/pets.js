if (sessionStorage.userLogin == " " || sessionStorage.userLogin == undefined || sessionStorage.userLogin == null || sessionStorage.userLogin == "null") {
    alert('Por favor efetue o login em nosso sistema')
    window.location.href = "/frontEnd/index.html"
}

//SISTEMA DE LOGOUT
$('#logout').click(() => {
    sessionStorage.userLogin = null
    sessionStorage.userNome = null
    sessionStorage.userCpf = null
    sessionStorage.userSexo = null
    sessionStorage.userEmail = null
    sessionStorage.userNascimento = null
    sessionStorage.userNascimento = null
    sessionStorage.userNascimento = null
    window.location.href = "/frontEnd/index.html"
})
