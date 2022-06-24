const router = require('express').Router()
const upload = require('../middlewares/multer')
const adotanteController = require('../controllers/adotanteController')
const funcionarioController = require('../controllers/funcionarioController')
const petController = require('../controllers/petController')
const adminController = require('../controllers/adminController')
const visitaController = require('../controllers/visitaController')
const adocaoController = require('../controllers/adocaoController')

// ADMIN
router.post('/admins', adminController.create)
router.get('/admins', adminController.showAll)
router.get('/admin/:id', adminController.showById)
router.put('/admin', adminController.editById)
router.delete('/admin/:id', adminController.removeById)
router.post('/admin/login', adminController.login)
router.post('/recovery', adminController.recoveryPassword)

// ADOTANTE
router.post('/adotantes', adotanteController.create)
router.get('/adotantes', adotanteController.showAll)
router.get('/adotante/:id', adotanteController.showById)
router.put('/adotante', adotanteController.editById)
router.delete('/adotante/:id', adotanteController.removeById)
router.post('/adotante/login', adotanteController.login)
router.post('/recovery', adotanteController.recoveryPassword)
router.post('/newpassword', adotanteController.changePassword)

// FUNCIONARIO
router.post('/funcionarios', funcionarioController.create)
router.get('/funcionarios', funcionarioController.showAll)
router.get('/funcionario/:id', funcionarioController.showById)
router.put('/funcionario', funcionarioController.editById)
router.delete('/funcionario/:id', funcionarioController.removeById)
router.post('/funcionario/login', funcionarioController.login)
router.post('/recovery', funcionarioController.recoveryPassword)

// PET
router.post('/pets', petController.create)
router.get('/pets', petController.showAll)
router.get('/pet/:id', petController.showById)
router.get('/pet/name/:name?', petController.showByName)
router.put('/pet', petController.editById)
router.delete('/pet/:id', petController.removeById)

// VISITA
router.post('/visitas', visitaController.create)
router.get('/visitas', visitaController.showAll)
router.get('/visita/:id', visitaController.showById)
router.get('/relatorio/visitas', visitaController.relatorioAllVisitantes)
router.put('/visita', visitaController.editById)
router.delete('/visita/:id', visitaController.removeById)

// ADOCAO
router.post('/adocaos', adocaoController.create)
router.get('/adocaos', adocaoController.showAll)
router.get('/adocao/:id', adocaoController.showById)
router.get('/relatorio/adocoes', adocaoController.relatorioAllAdotantes)
router.put('/adocao', adocaoController.editById)
router.delete('/adocao/:id', adocaoController.removeById)

// UPLOAD IMAGES
router.post('/upload',upload.single("inputUpload"),(req,res)=>{
    res.json({Ok:"Imagem enviada com sucesso!"})
})


module.exports = router