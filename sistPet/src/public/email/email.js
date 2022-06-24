const nodemailer = require('nodemailer')
const ejs = require('ejs')

let transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    auth:{
        user:'email@gmail.com',
        pass:'senha'
    }
})

class Email {
    async sendToken (token,recipient){
        try{
            let emailHtml = await ejs.renderFile('./public/email/templateEmail.ejs',{token:token, user:recipient})
            await transporter.sendMail({
                from:'SistPet <email@gmail.com>',
                to: `${recipient.email}`,
                subject:"Recuperação de Senha",
                html: emailHtml,
            })
            return {status:200 , result:{Ok:`Email enviado com sucesso`}}
        }catch(err){
            console.log(err)
            throw new Error(`Erro na classe Email, método sendToken`)
        }
    }
}
   

module.exports = new Email()
