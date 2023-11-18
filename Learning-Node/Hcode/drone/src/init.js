const readline = require('readline')
const { createSocket } = require('dgram')
const CommandParser = require('./commandparser')
const Commander = require('./commander')
const { create } = require('domain')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const TELLO_CMD_PORT = 8889
const TELLO_HOST = '192.169.10.1'

const getSocket = ()=>{
    const socket = createSocket('udp4')
    socket.bind(TELLO_CMD_PORT)
    return socket
}

(async function start(){
    const socket = getSocket()
    const cmder = new Commander(socket, TELLO_HOST, TELLO_CMD_PORT)
    await cmder.sendInitCommand()
    const cmdp = new CommandParser({
        onTakeoff: async () => {await cmder.sendTakeOff()},
        onLand: async () => {await cmder.sendLandf()},
        onFoward: async () => {await cmder.sendForward()},
        onBack: async () => {await cmder.sendBack()},
        onRight: async () => {await cmder.sendRight()},
        onLeft: async () => {await cmder.sendLeft()},
        onCw: async () => {await cmder.sendCw()},
        onCcw: async () => {await cmder.sendCcw()},
        onFlip: async () => {await cmder.sendFlip()},
        onBattery: async () => {await cmder.getBattery()},
    })
    console.log(`Iniciando!`)
    socket.on('message', (msg)=>{
        console.log(`Dji tello: ${msg.toString()}`)
    })
    socket.on('error', (err)=>{
        console.log(`Dji tello ERROR: ${err}`)
    })
    socket.on('listening', (err)=>{
        console.log(`Socket is listening!`)
    })
    console.log("Enter a command: ")
    rl.on('line', (line)=>{
        if(!cmdp.parseCommand(line)){
            if(line == 'exit'){
                console.log('Bye')
            }
            console.log('Not valid command')
        }
    })
})()