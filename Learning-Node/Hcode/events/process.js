require('./subdirectory/sub')
console.log('------------------------')
console.log(`Nome do Arquivo: `, __filename)
console.log(`Diretório do Arquivo: `, __dirname)
console.log(`Diretório em que foi invocado: `,process.cwd())
console.log(`Usuário do SO: `,process.env.USERNAME)
console.log(`Idioma: `,process.env.LANG)
console.log(`Nome do Server: `,process.env.COMPUTERNAME)

switch(process.argv[2]){

    case '-a':
        console.log('Execute rotina principal');
        break;
    case '-i':
        console.log('Execute a instalação');
    case '-q':
        console.log('Encerrando Aplicação');
        process.exit(); //interrompe imediatamente o código
        break;
    default:
        console.log('Parâmetro inválido')
}

console.log(`Ambiente do Servidor:`,process.platform)