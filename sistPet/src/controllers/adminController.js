const Administrador = require('../models/Administrador')
const PassToken = require('../models/PasswordToken')


class administradorController {
    constructor(name){
        this.name = name;
    }
    async create(req,res){   
         async function inserirUsuario(){
            try{
                let dataAdmin =  await {
                    login: req.body.login,
                    senha: req.body.senha,
                    nome: req.body.nome,
                }
                let resultInsert = await Administrador.insertUser(dataAdmin)
                res.json(resultInsert.result)
            }catch(err){
                console.log(err)
                let catchErro = {erro:`Houve uma falha no servidor ao cadastrar um novo ${this.name}`}
                res.status(500).json(catchErro)
            }
         }       
         inserirUsuario() 
    };

    async showAll(req,res){
        try{
            let resultFindAll = await Administrador.findAll()
            res.json(resultFindAll.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar todos ${this.name}s `}
            res.json(catchErro)
        }     
    };

    async showById(req,res){    
        try{
            let resultFindId = await Administrador.findById(req.params.id)
            res.json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo id`}
            res.json(catchErro)
        }
    };

    async showByEmail(req,res){    
        try{
            let resultFindId = await Administrador.findByEmail(req.body.email)
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
            }
            let resultUpdate = await Administrador.updateById(dataUpdate)
            res.json(resultUpdate.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao editar ${this.name} pelo id`}
            res.json(catchErro)
        }
    };

    async removeById(req,res){
        try{
           let resultDelete = await Administrador.deleteById(req.params.id)
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
            let token = await req.body.token
            let newPassword = await req.body.newPassword
            let resultRecovery = await Administrador.updatePassword(token,newPassword)
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
            let resultLogin = await Administrador.login(login,senha)
            res.json(resultLogin.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao fazer login`}
            res.json(catchErro)
        }
    }
}

module.exports = new administradorController('administrador')