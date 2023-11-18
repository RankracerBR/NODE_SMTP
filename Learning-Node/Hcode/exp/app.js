const express = require('express')
const app = express()
const adminRoutes = require('./routes/admin.js')
const usuarioRoutes = require('./routes/usuario.js')
const cookieParser = require('cookie-parser')

app.use('/static',express.static('public'))

app.use(express.json())
app.use(cookieParser())

app.use((req, res, next)=>{
    console.log('Executando o Middleware em nível de aplicação')

    return next()
})

app.get('/setcookie',(req,res)=>{
    res.cookie('user','Augusto Pontes', {maxAge: 90000, httpOnly: true})
    return res.send('Cookie foi gravado com sucesso!')
})

app.get('/getcookie',(req,res)=>{
    let user = req.cookies['user']
    if (user){
        return res.send(user)
    }
})

app.get('/',(req, res)=>{
    res.send('Hello World!')
})

app.use('/admin', adminRoutes)
app.use('/usuarios', usuarioRoutes)


app.get('*', (req,res,next)=>{
    setImmediate(()=>{
        next( new Error('Temos um problema'))
    })
})

app.use((err, req, res, next)=>{
    console.log('Geramos um erro, veja as instruções para corrigir!')
    res.status(500).json({message: err.message})
})

app.listen(8000, ()=>{
    console.log(`Server running: http://localhost:8000`)
})