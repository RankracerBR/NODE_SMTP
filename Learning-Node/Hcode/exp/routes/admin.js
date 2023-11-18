const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
    res.send('Acessando a Administração')
})

router.get('/:id',(req, res)=>{
    res.send('Acessando a Administração com o id'+req.params.id)
})

router.post('/',(req, res)=>{
    const corpo = `Login: ${req.body.login}\n
    Senha: ${req.body.senha}`
    res.send('Acessando a Administração via POST'+ corpo)
})

router.patch('/:id',(req,res)=>{
    res.send('Acessando a Administração via PATCH')
})

router.put('/:id', (req,res)=>{
    res.send('Acessando a Administração via PUT')
})

router.delete('/admin/:id', (req,res)=>{
    res.send('Acessando a Administração via DELETE')
})

router.get('/:id',(req, res)=>{
    res.send('Acessando a Administração com o id: '+req.params.id)
})

module.exports = router