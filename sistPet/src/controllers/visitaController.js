const Visita = require('../models/Visita')

class visitaController {
    constructor(name){
        this.name = name;
    }
    async create(req,res){   
         async function inserirUsuario(){
            try{
                let dataVisita =  await {
                    horario: req.body.horario,
                    dia: req.body.dia,
                    nomeAdotante: req.body.nomeAdotante,
                    cpfAdotante: req.body.cpfAdotante,
                    id_Adotante: req.body.id_Adotante || null  
                }
                let resultInsert = await Visita.insertUser(dataVisita)
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
            let resultFindAll = await Visita.findAll()
            res.json(resultFindAll.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar todos ${this.name}s `}
            res.json(catchErro)
        }     
    };

    async showById(req,res){    
        try{
            let resultFindId = await Visita.findById(req.params.id)
            res.json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo id`}
            res.json(catchErro)
        }
    };

    async showByDia(req,res){    
        try{
            let resultFindId = await Visita.findAllByDia(req.body.dia)
            res.json(resultFindId.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo dia`}
            res.json(catchErro)
        }
    };

    async editById(req,res){
        try{
            let dataUpdate = await {
                id:req.body.id,
                horario: req.body.horario,
                dia: req.body.dia,
                nomeAdotante: req.body.nomeAdotante,
                cpfAdotante: req.body.cpfAdotante, 
                id_Adotante: req.body.id_Adotante || null                
            }
            let resultUpdate = await Visita.updateById(dataUpdate)
            res.json(resultUpdate.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao editar ${this.name} pelo id`}
            res.json(catchErro)
        }
    };

    async removeById(req,res){
        try{
           let resultDelete = await Visita.deleteById(req.params.id)
           res.json(resultDelete.result)
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao remover ${this.name} pelo id`}
            res.json(catchErro)
        }
    }

    async relatorioAllVisitantes(req,res){    
        try{
            let resultFindAll = await Visita.findAll()
            res.render('reports/visitas',{dados:resultFindAll.result})
        }catch(err){
            console.log(err)
            let catchErro = {erro:`Houve uma falha no servidor ao listar ${this.name} pelo id`}
            res.json(catchErro)
        }
    };

}

module.exports = new visitaController('visita')