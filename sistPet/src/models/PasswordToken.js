const {database} = require('../database/connection')
const Adotante = require('./Adotante')
const { v4: uuidv4 } = require('uuid');
const Email = require('../public/email/email')


class PasswordToken{
    async tokenGenerationAdotante(email){
        try{
            let resultEmail = await Adotante.findByEmail(email)
            if(resultEmail.status != 200) return resultEmail
            let token = await uuidv4()
            let data = await {
                id_Adotante: resultEmail.result[0].id,
                used:0,
                token: token
            }
            await database.insert(data).into('passwordtoken')
            console.log(resultEmail.result[0])
            let sendToken = await Email.sendToken(token,resultEmail.result[0])
            if(sendToken.status == 200) return {status:200, result:{Ok:`token foi gerado com sucesso e encaminhado para o email: ${email}`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro no model PasswordToken, método tokenGeneration`)
        }
    }
}

module.exports = new PasswordToken()