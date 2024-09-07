const config = require("./config");
const Canvas = require("canvas");
const Discord = require("discord.js");

module.exports = function (client) {

    const description = {
        name: "WelcomeImages",
        filename: "welcome.js",
        version: "4.8"
    }
    //log que o módulo foi carregado
    console.log(` :: ⬜️ Módulo: ${description.name} | Versão carregada ${description.version} de ("${description.filename}")`)
    //dispara toda vez que alguém entra no servidor
    client.on("guildMemberAdd", async member => {
      //Se não estiver em uma guilda, retorna
      if(!member.guild) return;
      //cria um novo Canvas
      const canvas = Canvas.createCanvas(1772, 633);
      //define como "2D"
      const ctx = canvas.getContext('2d');
      //define o fundo como welcome.png
      const background = await Canvas.loadImage(`./welcome.png`);
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#f2f2f2';
      ctx.strokeRect(0, 0, canvas.width, canvas.height);
      //define o primeiro texto
      var textString3 = `${member.user.username}`;
      //se o texto for muito grande, diminui o tamanho da fonte
      if (textString3.length >= 14) {
        ctx.font = 'bold 100px Genta';
        ctx.fillStyle = '#f2f2f2';
        ctx.fillText(textString3, 720, canvas.height / 2 + 20);
      }
      //caso contrário, não altera
      else {
        ctx.font = 'bold 150px Genta';
        ctx.fillStyle = '#f2f2f2';
        ctx.fillText(textString3, 720, canvas.height / 2 + 20);
      }
      //define o Tag Discriminador
      var textString2 = `#${member.user.discriminator}`;
      ctx.font = 'bold 40px Genta';
      ctx.fillStyle = '#f2f2f2';
      ctx.fillText(textString2, 730, canvas.height / 2 + 58);
      //define o número de membros
      var textString4 = `Membro #${member.guild.memberCount}`;
      ctx.font = 'bold 60px Genta';
      ctx.fillStyle = '#f2f2f2';
      ctx.fillText(textString4, 750, canvas.height / 2 + 125);
      //obtém o nome da guilda
      var textString4 = `${member.guild.name}`;
      ctx.font = 'bold 60px Genta';
      ctx.fillStyle = '#f2f2f2';
      ctx.fillText(textString4, 700, canvas.height / 2 - 150);
      //cria uma "máscara" circular
      ctx.beginPath();
      ctx.arc(315, canvas.height / 2, 250, 0, Math.PI * 2, true); //posição da imagem
      ctx.closePath();
      ctx.clip();
      //define o avatar do usuário
      const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
      //desenha o avatar
      ctx.drawImage(avatar, 65, canvas.height / 2 - 250, 500, 500);
      //gera um anexo para o Discord
      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
      //define o embed de boas-vindas
      const welcomeembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Bem-vindo", member.guild.iconURL({ dynamic: true }))
        .setDescription(`**Bem-vindo a ${member.guild.name}!**
      Olá <@${member.id}>! Leia e aceite as regras!`)
        .setImage("attachment://welcome-image.png")
        .attachFiles(attachment);
      //define o canal de boas-vindas
      const channel = member.guild.channels.cache.find(ch => ch.id === config.CHANNEL_WELCOME);
      //envia o embed de boas-vindas para lá
      channel.send(welcomeembed);
      //adiciona os cargos ao membro ao entrar, para cada cargo
      let roles = config.ROLES_WELCOME;
      for(let i = 0; i < roles.length; i++ )
      member.roles.add(roles[i]);
    })
}


//Código por FACHINELLO#5601
