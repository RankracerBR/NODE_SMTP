const  readline  = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual a melhor marca de Drone no Mundo?: ', (answer)=>{
    console.log(`A melhor marca de Drones é: ${answer}`)
        switch(answer){
            case "command":
                console.log('Ligando o Drone')
                break;
            case "takeoff":
                console.log('Decolando o Drone!')
                break;
            default:
                console.log('Ligue o Drone!')
        }
    rl.close()
})
