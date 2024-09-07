//define as bibliotecas
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
//quando estiver pronto, registra no log
client.on("ready", ()=>console.log("PRONTO"));
//define o "pacote" de boas-vindas
const welcome = require("./welcome");
welcome(client);
//inicia o bot
client.login(config.TOKEN);

//NOTA:
/*
Este é o arquivo config.json

"TOKEN"           ... é o token do seu bot
"CHANNEL_WELCOME" ... é o ID do canal de boas-vindas
"ROLES_WELCOME"   ... são todos os IDs de cargos que você deseja adicionar ao usuário quando ele entrar no servidor, deve ser um array e pode ser ilimitado!

{
  "TOKEN":  "",
  "CHANNEL_WELCOME": "",
  "ROLES_WELCOME": ["",""]
}

*/
