function sum(x, callback){
    return setTimeout(()=>{
        return callback(null, x + 5000);
    },3000);
    
}

//Callback function
function resolveSum(err, resultado){
    if (err) throw err;
    console.log(resultado);
}

//Promise function
function sum2(x){
    return new Promise((resolve, reject)=>{
        if (Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject('Tá de Brincadeira >:/');
        }
        setTimeout(()=>{
            resolve(x + 5000);
        }, 3000);   
    })
}

/*
sum2(230)
.then((resultado)=>{
    console.log(`Resolvido, Resultado: ${resultado}`);
})
*/
//

async function main(){
    try{
        const resultado = await sum2('#')
        console.log(`Resultado com Async/Await: ${resultado}`)
    }catch (error){
        console.log(`Temos Problemas: ${error}`)
        console.log(process.env.USERNAME);
    }       
}

main();