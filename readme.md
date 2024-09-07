Um Bot de Sistema de Boas-Vindas fácil de configurar e usar para Discord.js com o pacote `canvas`

## (fachinello.glitch.me)

## Instalação | Como usar o Bot

**1.** Instale [node.js v12](https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode) ou superior

**2.** Baixe este repositório e descompacte-o    |    ou clone com git

**3.** Instale todos os pacotes com **`npm install`**     |  os pacotes são **`npm install node.js discord.js canvas`**

**3.1** Preencha tudo no arquivo config.json

**4.** Inicie o bot com **`node index.js`**

### Uso - index.js

```javascript
const Discord = require("discord.js");         //carrega a biblioteca Discord.js
const client = new Discord.Client();           //cria um novo cliente
const config = require("./config.json");       //carrega todos os arquivos de configuração
client.on("ready", ()=>console.log("PRONTO"));  //log quando o bot estiver pronto
const welcome = require("./welcome");          //carrega o arquivo transcript.js
welcome(client);                               //chama o arquivo transcript com o cliente, o COMANDO, e o máximo de mensagens a buscar 
client.login(config.TOKEN);                    //inicia o bot com o token do bot
```

### Uso - config.json
- "TOKEN"           ... é o token do seu bot
- "CHANNEL_WELCOME" ... é o ID do canal de boas-vindas
- "ROLES_WELCOME"   ... são todos os IDs de funções que você deseja adicionar ao usuário quando ele entrar no servidor, deve ser um array e pode ser ilimitado!

```json
{
  "TOKEN":  "",
  "CHANNEL_WELCOME": "",
  "ROLES_WELCOME": ["",""]
}
```

#### **NOTA:**

*Você pode editar a imagem de boas-vindas, mas certifique-se de que esteja no mesmo layout, caso contrário, isso bagunçará o posicionamento. Se você souber programar com canvas, pode corrigir isso, se não, sugiro que não altere o layout e não renomeie o arquivo de imagem.*

*Se você estiver tendo erros/problemas ao iniciar, exclua o arquivo package.json e, antes de instalar os pacotes, faça `npm init`.*

<br/>
  
## FACHINELLO

> Considere me seguir nas redes sociais fachinello.glitch.me
