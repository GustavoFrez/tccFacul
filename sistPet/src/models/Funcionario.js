const {database} = require('../database/connection')
const bcrypt = require('bcryptjs')
const Validation = require('../controllers/validations/userValidation')
const funcionarioValidation = new Validation('funcionario')

class Funcionario{
    constructor(table,name){
        this.table = table
        this.name = name
    }
    async insertUser(dataUser){
        try{
        // VALIDAR EMAIL LOGIN E SENHA
            let invalidEmail = await funcionarioValidation.validarEmail(dataUser.email)
            if(invalidEmail) return invalidEmail

            let invalidLogin = await funcionarioValidation.validarLogin(dataUser.login)
            if(invalidLogin) return invalidLogin
            
            let invalidPassword = await funcionarioValidation.validarSenha(dataUser.senha)
            if(invalidPassword) return invalidPassword
               
        // BCRYPT
            let salt = await bcrypt.genSaltSync(10)
            let hash = await bcrypt.hashSync(dataUser.senha,salt)
            dataUser.senha = hash

        // INSERT
            await database.insert(dataUser).into(this.table)
            return {status:200, result:{Ok:`${this.name} cadastrado com sucesso!`}}  
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método insertUser`)
        };
    };

    async findAll(){
        try{
           let users = await database.select().table(this.table)
           if(users.length > 0) return {status:200, result:users}          
           else return {status:404, result:{erro:`Nenhum ${this.name} foi encontrado`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método findAll`)
        };
    };

    async findAllByName(nome){
        try{
           let user = await database.select().table(this.table).where({nome:nome})
           if(user.length > 0) return {status:200, result:user} 
           else return {status:404, result:{erro:`O nome ${nome} não corresponde a nenhum ${this.name}`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método findAllByName`)
        };
    };

    async findById(id){
        try{
            let user = await database.select().table(this.table).where({id:id})
            if(user.length > 0) return {status:200, result:user[0]} 
            else return {status:404, result:{erro:`O id ${id} não corresponde a nenhum ${this.name}`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método  findById`)
        };
    };

    async findByEmail(email){
        try{
            let user = await database.select().table(this.table).where({email:email})
            if(user.length > 0) return {status:200, result:user[0]} 
            else return {status:404, result:{erro:`O email ${email} não corresponde a nenhum funcionário`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método findByEmail`)
        };
    };

    async findByLogin(login){
        try{
            let user = await database.select().table(this.table).where({login:login})
            if(user.length > 0) return {status:200, result:user[0]} 
            else return {status:404, result:{erro:`O login ${login} não corresponde a nenhum funcionário.`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método findByEmail`)
        };
    };

    async updateById(dataUpdate){
        try{
        // VALIDACAO   
            let userId = await this.findById(dataUpdate.id)
            if(userId.status == 404) return userId
            if(dataUpdate.senha){
                // BCRYPT
               let salt = await bcrypt.genSaltSync(10)
               let hash = await bcrypt.hashSync(dataUpdate.senha,salt)
               dataUpdate.senha = hash
           }
            await database.where({id:dataUpdate.id}).update(dataUpdate).table(this.table)
            return {status:200 , result:{Ok:`${this.name} atualizado com sucesso!`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método updateById`)
        };
    };

    async deleteById(id){
        try{
        // VALIDACAO
            let resultId = await this.findById(id)
            if(resultId.status == 404) return resultId
            await database.where({id:id}).delete().table(this.table)
            return {status:200, result:{Ok:`${this.name} deletado com sucesso!`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método deleteById`)
        }
    }

    async updatePassword(token,newPassword){
        try{
        // VALIDACAO
            let validToken = await funcionarioValidation.validarToken(token)
            if(validToken.status == 404) return validToken
            let validPassword = await funcionarioValidation.validarSenha(newPassword)
            if(validPassword) return validPassword
        // BCRYPT
            let salt = await bcrypt.genSaltSync(10)
            let hash = await bcrypt.hashSync(newPassword,salt)
            
            await database.where({id:validToken.result.id_Adotante}).update({senha:hash}).table(this.table)
            await database.where({token:validToken.result.token}).update({used:1}).table('passwordtoken')
            return {status:200 , result:{Ok:`senha atualizada com sucesso!`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método updatePassword`)
        }
    }

    async login(login,senha){
        try{
            let user = await this.findByLogin(login)
            if(user.status == 404) return user
            // BCRIPT
            console.log("model func")
            console.log(user.result)
            let correctSenha = bcrypt.compareSync(senha,user.result.senha) 
            if(correctSenha) return {status:200, result:{Ok:`Usuário logado com sucesso`,user:user.result}}
            else{return {status:404, result:{erro:`Senha incorreta`}}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model ${this.name}, método login`)
        }
    }
}

module.exports = new Funcionario('funcionario','funcionario')