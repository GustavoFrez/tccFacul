const Adocao = require('../models/Adocao')

class adocaoController {
    constructor(name){
        this.name = name;
    }
    async create(req,res){   
         async function inserirUsuario(){
            try{
                let dataAdocao =  await {
                    nomeFuncionario: req.body.nomeFuncionario,
                    nomePet: req.body.nomePet,
                    nomeAdotante: req.body.nomeAdotante,
                    data: req.body.data,     
                    statusAdocao: req.body.statusAdocao,
                    id_Visita: req.body.id_Visita || null,
                    id_Adotante: req.body.id_Adotante || null,
                    id_Funcionario: req.body.id_Funcionario || null,
                    id_Pet: req.body.id_Pet || null,
                }
                let resultInsert = await Adocao.insertUser(dataAdocao)
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
            let resultFindAll = await Adocao.findAll()
            res.json(resultFindAll.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar todos ${this.name}s `}
            res.json(catchErro)
        }     
    };

    async showById(req,res){    
        try{
            let resultFindId = await Adocao.findById(req.params.id)
            res.json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo id`}
            res.json(catchErro)
        }
    };


    async editById(req,res){
        try{
            let dataUpdate = await {
                id:req.body.id,
                nomeFuncionario: req.body.nomeFuncionario,
                nomePet: req.body.nomePet,
                nomeAdotante: req.body.nomeAdotante,
                data: req.body.data,     
                statusAdocao: req.body.statusAdocao,
                id_Adotante: req.body.id_Adotante || null,
                id_Funcionario: req.body.id_Funcionario || null,
                id_Pet: req.body.id_Pet || null
            }
            console.log(req.body.nomePet)
            let resultUpdate = await Adocao.updateById(dataUpdate)
            res.json(resultUpdate.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao editar ${this.name} pelo id`}
            res.json(catchErro)
        }
    };

    async removeById(req,res){
        try{
           let resultDelete = await Adocao.deleteById(req.params.id)
           res.json(resultDelete.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao remover ${this.name} pelo id`}
            res.json(catchErro)
        }
    }

    async relatorioAllAdotantes(req,res){
        try{
           let result= await Adocao.findAll()
           res.render('reports/adocoes',{dados:result.result})
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao remover ${this.name} pelo id`}
            res.json(catchErro)
        }
    }

}

module.exports = new adocaoController('adocao')