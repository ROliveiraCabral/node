const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

console.log(args);

//no js um objeto pode ser acessado utilizando-se . ou []
const nome = args.nome;
const profissao = args["profissao"];

console.log(nome);
console.log(profissao);

console.log(`Meu nome é ${nome} e minha profissão é ${profissao}`);
