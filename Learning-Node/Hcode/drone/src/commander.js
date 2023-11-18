class Commander{
    constructor(socket,host,port){
        this.socket = socket
        this.host = host
        this.port= port
    }
    sendInitCommand(){
        return new Promise((res, rej)=>{
            this.socket.send('command', 0, 'command'.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }
    sendTakeOff(){
        return new Promise((res, rej)=>{
            this.socket.send('takeoff', 0, 'takeoff'.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }
    sendLand(){
        return new Promise((res, rej)=>{
            this.socket.send('land', 0, 'land'.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }
    sendForward(distance=20){
        return new Promise((res, rej)=>{
            this.socket.send(`forward ${distance}`, 0, 'Foward'.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }
    sendBack(distance=20){
        return new Promise((res, rej)=>{
            this.socket.send(`Back ${distance}`, 0, 'Back'.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }
    sendRight(distance=20){
        return new Promise((res, rej)=>{
            this.socket.send(`Right ${distance}`, 0, 'Right'.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }
    sendLeft(distance=20){
        return new Promise((res, rej)=>{
            this.socket.send(`Left ${distance}`, 0, 'Left'.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }
    sendCw(distance=20){
        return new Promise((res, rej)=>{
            this.socket.send(`Left ${distance}`, 0, 'ccw'.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }
    sendCcw(distance=20){
        return new Promise((res, rej)=>{
            this.socket.send(`ccw ${distance}`, 0, 'ccw'.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }
    sendFlip(){
        return new Promise((res, rej)=>{
            this.socket.send('Flip f', 0, 'land'.length, this.port, this.host, (err)=>{ //Flip f, Flip b, Flip l, Flip r
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }
    getBattery(distance=20){
        return new Promise((res, rej)=>{
            this.socket.send('Battery?', 0, 'land'.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }

}

module.exports = Commander