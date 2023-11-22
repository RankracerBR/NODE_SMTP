//Aplica CSRF_TOKEN e Delay
const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = 8000

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../templates/index.html'))
});

app.post('/send', (req, res) =>{
    const {from, subject, message} = req.body
    const to = 'rankracerbr21@gmail.com'

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'rankracerbr21@gmail.com',
            pass: ''
        }
});

    const mailOptions = {
        from,
        to,
        subject,
        html: `<p><strong>Remetente:</strong> ${from}</p><p><strong>Assunto:</strong> ${subject}</p><p>${message}</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) =>{
        if(error){
            console.log('Erro ao enviar o e-mail', error);
            res.send('Erro ao enviar o e-mail');
        }else{
            console.log('E-mail enviado com sucesso! Resposta do servidor:', info.response);
            res.send('E-mail enviado com sucesso!');
        }
    });
})

app.listen(port, ()=> {
    console.log(`Servidor rodando em http://localhost:${port}`)
})