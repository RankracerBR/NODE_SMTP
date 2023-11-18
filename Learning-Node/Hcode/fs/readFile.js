const fs = require('fs')

//Não Bloqueante
fs.readFile('Texto.txt', (err, data)=>{
    if (err) throw err

    console.log(data.toString())
})

//Bloqueante
const texto = fs.readFileSync("Texto.txt")

console.log(`Texto: ${texto}`)