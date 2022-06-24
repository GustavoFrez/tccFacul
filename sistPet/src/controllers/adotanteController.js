const Adotante = require('../models/Adotante')
const PassToken = require('../models/PasswordToken')

class adotanteController {
    constructor(name){
        this.name = name;
    }
    async create(req,res){   
         async function inserirUsuario(){
            try{
                let dataAdotante =  await {
                    login: req.body.login,
                    senha: req.body.senha,
                    nome: req.body.nome,
                    endereco: req.body.endereco,
                    dataDeNascimento: req.body.dataDeNascimento,
                    tel: req.body.tel,
                    sexo: req.body.sexo,
                    cpf: req.body.cpf,
                    email: req.body.email
                }
                let resultInsert = await Adotante.insertUser(dataAdotante)
                res.json(resultInsert.result)
            }catch(err){
                console.log(err)
                let catchErro = {erro:`Houve uma falha no servidor ao cadastrar um novo ${this.name}`}
                res.json(catchErro)
            }
         }       
         inserirUsuario() 
    };

    async showAll(req,res){
        try{
            let resultFindAll = await Adotante.findAll()
            res.json(resultFindAll.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar todos ${this.name}s `}
            res.json(catchErro)
        }     
    };

    async showById(req,res){    
        try{
            let resultFindId = await Adotante.findById(req.params.id)
            res.json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo id`}
            res.json(catchErro)
        }
    };

    async showByEmail(req,res){    
        try{
            let resultFindId = await Adotante.findByEmail(req.body.email)
            res.json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo email`}
            res.json(catchErro)
        }
    };

    async editById(req,res){
        try{
            let dataUpdate = await {
                id: req.body.id,
                login: req.body.login,
                senha: req.body.senha,
                nome: req.body.nome,
                endereco: req.body.endereco,
                dataDeNascimento: req.body.dataDeNascimento,
                tel: req.body.tel,
                sexo: req.body.sexo,
                cpf: req.body.cpf,
                email: req.body.email
            }
            let resultUpdate = await Adotante.updateById(dataUpdate)
            res.json(resultUpdate.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao editar ${this.name} pelo id`}
            res.json(catchErro)
        }
    };

    async removeById(req,res){
        try{
           let resultDelete = await Adotante.deleteById(req.params.id)
           res.json(resultDelete.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao remover ${this.name} pelo id`}
            res.json(catchErro)
        }
    }

    async recoveryPassword(req,res){
       try{
           let resultToken = await PassToken.tokenGenerationAdotante(req.body.email)
           res.json(resultToken.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao gerar token de recuperação por email`}
            res.json(catchErro)
        }
    }
    
    async changePassword(req,res){
        try{
            let email = await req.body.email
            let novaSenha = await req.body.novaSenha
            let resultRecovery = await Adotante.updatePassword(email,novaSenha)
            res.json(resultRecovery.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao mudar a senha do ${this.name} por token`}
            res.json(catchErro)
        }
    }

    async login(req,res){
        try{
            let {login , senha} = await req.body
            let resultLogin = await Adotante.login(login,senha)
            res.json(resultLogin.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao fazer login`}
            res.json(catchErro)
        }
    }
}

module.exports = new adotanteController('adotante')