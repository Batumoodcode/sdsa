const Discord = require("discord.js");
const db = require("croxydb")
var cller = []

//Patlatılma koruması altyapıyı ilk aldığınızda açık olarak gelir. Bu sistem yapılan botlar eğer bir kanal silerse, birini banlarsa atarsa v.b, o sunucudan ayrılır. Kapatmak istiyorsanız altta "açık" yazan yeri "kapalı" yapın. Sorumluluk size aittir!

/////////////////////////////////////////////////////////////////////

let patlamakorumasi = "açık"

///////////////////////////////////////////////////////////////////



//Müzik botu altyapısı ve müzik botu yapıcı altyapısı tamamen Ünlemboşlukünlem tarafından kodlanmıştır.

const YouTube = require("simple-youtube-api");
const buram = new Discord.Client();
let bupr = require("./ayarlar.json").prefix
if (!db.fetch(`onlaro`)) db.set(`onlaro`, [])
	${message.author.id}
setTimeout(() => {
    console.log("çıkılıyor")
    process.exit(0)
}, 43200000)

buram.login(require("./ayarlar.json").token)
ach()
const disbut = require("discord-buttons")
require('discord-buttons')(buram);
buram.on("clickButton", async (button) => {
	button.reply.defer()
	if (button.id == "tokap") {
		button.channel.send(new Discord.MessageEmbed().setTitle('Bot Açma Ve Token Alma')
				.setDescription(`**Adım 1:** [Discord Developers](https://discord.com/developers/applications) paneline gir.
**Adım 2:** Üstteki New Applications butonuna tıkla.
**Adım 3:** Açılacak botun ismini gir.
**Adım 4:** APP ICON kısmından botuna avatar koy.
**Adım 5:** Soldan Bot kısmına gel.
**Adım 6:** Add Bot'a tıkla ve Yes, do it! i seç.
**Adım 7:** Copy yazan butona tıkladığında token kopyalanacak.
**Adım 8:** Bu kanala \`${bupr}botyap Token : Prefix : OynuyorKısmı\` şeklinde yaz. Bot online olacak.
**Adım 9:** Discord Developers'de Soldan oAuth kısmına gel.
**Adım 10:** Client ID yazanı kopyala.
**Adım 11:** Bu kanala \`${bupr}davetal clientidsi\` yaz ve botun davet linkini al.
**Adım 12:** Botu o linkten istediğin sunucuya ekle.
:white_check_mark: **Müzik botun hazır.**`))
	}
})

const prettyMilliseconds = require("pretty-ms");
buram.on("ready", async () => {
	console.log("Hazır!")
	buram.user.setActivity(`${bupr}botyap | ${db.fetch(`onlaro`).length} Müzik Botu Yapıldı`, {type: "LISTENING"})
})
	let dubisch = new disbut.MessageButton().setStyle("blurple").setID("tokap").setLabel("Bot Açma & Token Alma")
buram.on("message", async (message) => {
	if (!message.content.startsWith(bupr)) return;
	const args = message.content.slice(bupr.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
     if (command === "i" || command === "istatistik" || command === "botbilgi" || command === "ping" || command === "gecikme" || command === "stats" || command === "botstats") {
const moment = require('moment')
require('moment-duration-format')
const duration = moment.duration(buram.uptime).format("D [gün], H [saat], m [dakika], s [saniye]")
const embed = new Discord.MessageEmbed()
.setColor('#2D3133')
.setAuthor(`${buram.user.username} İstatistikleri`, buram.user.displayAvatarURL({dynamic: true}))
.addField("📡 Gecikme", `**${buram.ws.ping}** ms`, true)
.addField("⏰ Çalışma Süresi", duration, true)
.addField("🫂 Kullanıcılar", buram.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
.addField("🎛️ Kanallar", buram.channels.cache.size, true)
.addField("🖥️ Sunucular", buram.guilds.cache.size.toLocaleString(), true)
.addField("☄️ `Discord.js` sürümü", Discord.version, true)
.setFooter(`${message.author.tag} istedi...`, message.author.displayAvatarURL({dynamic: true}))
.setTimestamp()
message.channel.send(embed)
}
    if (command == "say") {
        message.channel.send(new Discord.MessageEmbed().setDescription(`${db.fetch(`onlaro`).length} **bot şu anda açık.**`))
    }
    if (command == "davet") {
        message.channel.send(new Discord.MessageEmbed().setDescription(`${buram.user.username} botunu kendi sunucuna ekleyebilirsin.\n[Buraya Tıkla ve Davet Et](https://discord.com/api/oauth2/authorize?client_id=${buram.user.id}&permissions=805314622&scope=bot)\n\nKendi botunun linkini almak için __${bupr}davetal__ yaz.
`))
    }
	if (command == "davetal") {
		if (message.guild) return message.channel.send(`Bunu benim özel mesajlarımda kullanabilirsin.`)
		if (!args.join(" ")) return message.channel.send(`Bir bot client idsi gir.`)
			message.channel.send(`**Davet Linki:**\n\nhttps://discord.com/api/oauth2/authorize?client_id=${args.join("")}&permissions=805314622&scope=bot`)
	}
	if (command == "botyap" || command == "botaç") {
		if (message.guild) return message.channel.send(`Müzik botu yapmak için bana özel'den \`${bupr}${command}\` yazmalısın!`)
			if (!args.join(" ")) {
			return message.channel.send({content: "Bot Yapma", embed: new Discord.MessageEmbed().setTitle('Kendi Müzik Botunu Yap')
				.setDescription(`Kullanım:\n\`${bupr}${command} Token \: Prefix \: OynuyorKısmı\`\n\nÖrnek:\n\`${bupr}${command} OD4xmDEl... \: ! \: Bot %sunucusayisi% Sunucuda!\``), button: dubisch})
			}
		let omay = args.join(" ").split(":")
		if (omay.length != 3) return message.channel.send(new Discord.MessageEmbed().setDescription('Hatalı Kullanım!'))
			if (omay[1].trim().length > 5) return message.channel.send(new Discord.MessageEmbed().setDescription('Prefix 5 harften uzun olamaz!'))
				if (omay[2].trim().length > 40) return message.channel.send(new Discord.MessageEmbed().setDescription('Oynuyor 40 harften uzun olamaz!'))
					//if (db.fetch(`onlaro`).includes(omay[0].trim())) {
//						let c = db.fetch(`onlaro`).filter(bbu => {return bbu.token !== omay[0].trim()}).map(b => b)
	//	db.set(`onlaro`, c)
		if (cller.includes(omay[0].trim())) {
//			const index = cller.indexOf(omay[0].trim()));
//if (index > -1) {
//  cller.splice(index, 1);
//}
return message.channel.send("Bu bot zaten açık! Lütfen discord developers portal dan botunuzun tokenini yeniden oluşturun.")
		}
			//		}
				db.push(`onlaro`, {"token": omay[0].trim(), "sahip": message.author.id, "prefix": omay[1].trim(), "durum": omay[2].trim()})
				message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setDescription('Botunuz hazır. Botu kapatmak için discord developers kısmından tokeni yenileyin. Davet linki almak için !davetal clientid'))
  if (patlamakorumasi == "açık") message.channel.send("Bilgi: Yaptığınız botların patlatılma koruması vardır. Eğer ekli olduğu sunucularda bir kanal silerse, birini yasaklarsa, atarsa, rol silerse o sunucudan çıkar.\nBu nedenle bu sistemi kendi botunuza müzik özelliği kazandırmak için kullanmayın.")
        buram.user.setActivity(`${bupr}botyap | ${db.fetch(`onlaro`).length} Müzik Botu Yapıldı`, {type: "LISTENING"})
				ach()
	}
})




async function ach() {
	let onlaro = db.fetch(`onlaro`)
	if (!onlaro) db.set(`onlaro`, [])
onlaro.forEach(async (pokah) => {
    
	if (cller.includes(pokah.token)) return;
	const client = new Discord.Client({
		restTimeOffset: 0
	});
    console.log(`Bekleyin.`)
	try{await client.login(pokah.token)} catch(e) {
        
		let c = db.fetch(`onlaro`).filter(bbu => {return bbu.token !== pokah.token}).map(b => b)
		db.set(`onlaro`, c)
		console.log(`[X] Botun birine bağlanılamadı.`)
		return;
		}
    
	cller.push(client.token)
	console.log(`[-] ${client.user.tag} bağlanıyor (Sahip: ${pokah.sahip})`)
                



//Müzik sistemi
//Burası Ünlemboşlukünlem tarafından distube isimli modül ile kodlanmıştır.
//Lütfen kendi botunuzda kullanmayın ve paylaşmayın.




	const DisTube = require('distube')
const distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true, leaveOnFinish: false, autoplay: false});
	//const disbut = require("discord-buttons")
//	disbut.multipleImport(client)
//	const disbut = require("discord-buttons")
//require('discord-buttons')(client);
const fert = new Set();
let { MessageEmbed } = require("discord.js");
//const { MessageButton } = require('discord-buttons')
//const { MessageActionRow } = require('discord-buttons')
//const { Menu, Button } = require('discord-menu-buttons');
let PREFIX = pokah.prefix
client.on("ready", async () => {
	console.log(`[V] ${client.user.tag} bağlandı`)
  let durummybreadpro = pokah.durum
                .replace(`%sunucusayisi%`, `${client.guilds.cache.size}`)
                .replace(`%prefix%`, `${pokah.prefix}`)
await client.user.setActivity(durummybreadpro, {type: "LISTENING"})
  })

//Butonlu yapmayı denedik... ama olmadı.
///////////////////////////////
    
    const dlinal = new disbut.MessageButton()
                .setLabel("Beni Sunucuna Ekle")
                .setStyle("url")
                .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
    
//Patlama Koruması
//Eğer bir bot kanal silerse, ban atarsa direk o sunucudan çıkar. Böyle birşey istemiyorsanız üstten bunu kaldırın. Sorumluluk size aittir.

    client.on('guildBanAdd', async (guild, user) => {
if (patlamakorumasi !== "açık") return;
    const modId = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first()).executor.id;
        if (modId == client.user.id) return guild.leave()
});

    client.on('roleCreate', async (role) => {
if (patlamakorumasi !== "açık") return;
    const modId = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first()).executor.id;
        if (modId == client.user.id) return role.guild.leave()
});
    
    client.on('roleDelete', async (role) => {
if (patlamakorumasi !== "açık") return;
    const modId = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first()).executor.id;
        if (modId == client.user.id) return role.guild.leave()
});
    
    client.on('channelDelete', async (channel) => {
if (patlamakorumasi !== "açık") return;
    const modId = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first()).executor.id;
        if (modId == client.user.id) return channel.guild.leave()
});
    
//Patlama koruması son...
    
client.on("message", async (message) => {
    if (message.guild && !message.author.bot && message.content == `<@!${client.user.id}>` || message.content.toLowerCase() == client.user.username) return message.channel.send(`:drum: | ${message.author}, prefixim \`${PREFIX}\``)
  if (!message.content.startsWith(PREFIX)) return;
  const args = message.content.slice(pokah.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
  if (command == "yardım" || command == "help" || command == "h" || command == "y") {
    if (!message.guild) return;
    if (message.author.bot == true) return;
    const embed = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} Yardım Menüsü`, client.user.avatarURL())
.setColor("BLACK") 
    .setThumbnail(client.user.avatarURL())
    .setDescription(`
📌 Botumuzu Sunucunuza Davet Etmek İçin __\`${PREFIX}davet\`__ Yazabilirsiniz.

🎵 __Müzik Komutları__

> 🏆 __${PREFIX}oynat:__ **Bir şarkı başlatır.**
> 🎯 __${PREFIX}atla:__ **Sıradaki şarkıya atlar.**
> ⛳ __${PREFIX}durdur:__ **Şarkı sırasını durdurur.**
> 🎶 __${PREFIX}karıştır:__ **Şarkı sırasını karıştırır.**
> 🎉 __${PREFIX}duraklat:__ **Şarkıyı duraklatır.**
> 💈 __${PREFIX}devam:__ **Şarkıyı devam ettirir.**
> 🎧 __${PREFIX}sıra:__ **Şarkı sırasını gösterir.**
> 🔊 __${PREFIX}yinele:__ **Şarkıyı tekrarlar.**
> 🎻 __${PREFIX}ses:__ **Şarkının sesini ayarlar.**
> 🎬 __${PREFIX}önerilen:__ **Sıraya önerilen videolar ekler.**

📕 __Bilgi Komutları__

> 📕 __${PREFIX}istatistik:__ **Botun istatistiklerine bakarsınız.**
> 📘 __${PREFIX}davet:__ **Botu sunucunuza eklersiniz.**
> 📗 __${PREFIX}yardım:__ **Yardım sayfasını açar.**

> [Botu Sunucuna Davet Et](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)
`)
    message.channel.send(' ', {
      component: dlinal,
      embed: embed
    })
}
  

  
  
  
  
  
  

  
  
    if (["repeat", "loop", "döngü", "yinele", "yineleme"].includes(command)) {
    if (!message.guild) return;
    if (message.author.bot == true) return;
    if (!message.member.voice.channel) return message.channel.send(":x: **Bir ses kanalında bulunmalısınız!**")
    let queue = distube.getQueue(message);
    if (!queue) return message.channel.send(":x: **Şu anda hiçbir şarkı oynatılmıyor!**")
   // if (SarkiCaliomu.has(message.guild.id)) {
  //   if (queue) {
       if (message.guild.me.voice.channel && message.guild.me.voice.channel.id != message.member.voice.channel.id) return message.channel.send(`:x: **Şu anda başka bir kanalda müzik çalınıyor! Kanal: <#${message.guild.me.voice.channel.id}>**`)
   //   if (db.fetch(`kanalmea_${message.guild.id}`) != message.member.voice.channel.id) return message.channel.send(`:x: **Şu anda başka bir kanalda müzik çalınıyor! Kanal: <#${db.fetch(`kanalmea_${message.guild.id}`)}>**`)
  //   } else {
  //     db.delete(`kanalmea_${message.guild.id}`)
  //     SarkiCaliomu.delete(message.guild.id)
  //   }
   // }
       // let mode = distube.setRepeatMode(message, parseInt(args[0]));
    let mode = distube.setRepeatMode(message, 1)
       mode = mode ? mode == 2 ? "Sırayı Yinele" : "Aktif" : "Kapalı";
        message.channel.send("🔃 **Yineleme modu** `" + mode + "` **durumuna getirildi!**");
  }
  
  
  if(command == "play" || command == "oynat" || command == "çal" || command == "dinle" || command == "p" || command == "o") {
    if (!message.guild) return;
    if (message.author.bot == true) return;
    if (!message.member.voice.channel) return message.channel.send(":x: **Bir ses kanalında bulunmalısınız!**")
    if (!args.join(" ")) return message.channel.send(`:x: **KULLANIM:**\n\`${PREFIX}${command} <Şarkı İsmi/YouTube Şarkı Linki>\``)
    
    let queue = distube.getQueue(message);
    if (message.guild.me.voice.channel && message.guild.me.voice.channel.id != message.member.voice.channel.id) return message.channel.send(`:x: **Şu anda başka bir kanalda müzik çalınıyor! Kanal: <#${message.guild.me.voice.channel.id}>**`)
    if (fert.has(message.channel.id)) return message.channel.send(`:x: **Zaten şu anda arama yapılıyor!**`)
    message.react("⏳")
    fert.add(message.channel.id)
    setTimeout(() => {
      fert.delete(message.channel.id)
      message.reactions.removeAll()
    }, 3220)
    distube.play(message, args.join(" "));
      message.guild.me.voice.setSelfDeaf(true);   
    }
  if (command == "queue" || command == "sıra" || command == "liste" || command == "list") {
    if (!message.guild) return;
    if (message.author.bot == true) return;
        let queue = distube.getQueue(message);
    if (!queue) return message.channel.send(":x: **Şu anda hiçbir şarkı oynatılmıyor!**")
        message.channel.send(new Discord.MessageEmbed()
                             
  .setAuthor("Müzik Sıra Listesi", message.guild.iconURL())
  .setColor(`BLACK`)
  .setDescription(queue.songs.map((song, id) =>
            `> \`${id + 1}.\` **[${song.name}](${song.url})** - \`${song.formattedDuration}\``
        ).slice(0, 100).join("\n")));
    }
  
  if (command == "skip" || command == "geç" || command == "atla" || command == "s") {
    if (!message.guild) return;
    if (message.author.bot == true) return;
    if (!message.member.voice.channel) return message.channel.send(":x: **Bir ses kanalında bulunmalısınız!**")
    let queue = distube.getQueue(message);
    if (!queue) return message.channel.send(":x: **Şu anda hiçbir şarkı oynatılmıyor!**")
    if (message.guild.me.voice.channel && message.guild.me.voice.channel.id != message.member.voice.channel.id) return message.channel.send(`:x: **Şu anda başka bir kanalda müzik çalınıyor! Kanal: <#${message.guild.me.voice.channel.id}>**`)
        message.channel.send("⏩ | **Şarkı atlandı.**").then(m => { m.delete({timeout: 3220})})
        distube.resume(message);
        distube.skip(message);
    }
  
  if (command == "stop" || command == "durdur" || command == "müzikdurdur" || command == "st") {
    if (!message.guild) return;
    if (message.author.bot == true) return;
    if (!message.member.voice.channel) return message.channel.send(":x: **Bir ses kanalında bulunmalısınız!**")
    let queue = distube.getQueue(message);
    if (message.guild.me.voice.channel && message.guild.me.voice.channel.id != message.member.voice.channel.id) return message.channel.send(`:x: **Şu anda başka bir kanalda müzik çalınıyor! Kanal: <#${message.guild.me.voice.channel.id}>**`)
        distube.resume(message);
        distube.stop(message);
        message.channel.send("⏹️ **Şarkı sırası durduruldu!**");
    }
  
  if (command == "devam" || command == "resume" || command == "devamet" || command == "res" || command == "devamettir") {
    if (!message.guild) return;
    if (message.author.bot == true) return;
    if (!message.member.voice.channel) return message.channel.send(":x: **Bir ses kanalında bulunmalısınız!**")
        let queue = distube.getQueue(message);
    if (!queue) return message.channel.send(":x: **Şu anda hiçbir şarkı oynatılmıyor!**")
    if (message.guild.me.voice.channel && message.guild.me.voice.channel.id != message.member.voice.channel.id) return message.channel.send(`:x: **Şu anda başka bir kanalda müzik çalınıyor! Kanal: <#${message.guild.me.voice.channel.id}>**`)
    //let queue = distube.getQueue(message);
  //  if (SarkiCaliomu.has(message.guild.id)) {
  //   if (queue) {
  //    if (db.fetch(`kanalmea_${message.guild.id}`) != message.member.voice.channel.id) return message.channel.send(`:x: **Şu anda başka bir kanalda müzik çalınıyor! Kanal: <#${db.fetch(`kanalmea_${message.guild.id}`)}>**`)
  //   } else {
  //     db.delete(`kanalmea_${message.guild.id}`)
  //     SarkiCaliomu.delete(message.guild.id)
  //   }
  //  }
  message.channel.send(`▶️ **Şarkı** ${message.author} **tarafından devam ettirildi!**`);
        await distube.resume(message);
        
    }
  
   if (command == "duraklat" || command == "pause") {
    if (!message.guild) return;
    if (message.author.bot == true) return;
    if (!message.member.voice.channel) return message.channel.send(":x: **Bir ses kanalında bulunmalısınız!**")
    let queue = distube.getQueue(message);
    if (!queue) return message.channel.send(":x: **Şu anda hiçbir şarkı oynatılmıyor!**")
     if (message.guild.me.voice.channel && message.guild.me.voice.channel.id != message.member.voice.channel.id) return message.channel.send(`:x: **Şu anda başka bir kanalda müzik çalınıyor! Kanal: <#${message.guild.me.voice.channel.id}>**`)
 //   if (SarkiCaliomu.has(message.guild.id)) {
 //    if (queue) {
 //     if (db.fetch(`kanalmea_${message.guild.id}`) != message.member.voice.channel.id) return message.channel.send(`:x: **Şu anda başka bir kanalda müzik çalınıyor! Kanal: <#${db.fetch(`kanalmea_${message.guild.id}`)}>**`)
//     } else {
//       db.delete(`kanalmea_${message.guild.id}`)
//       SarkiCaliomu.delete(message.guild.id)
  //   }
  //  }
        distube.pause(message);
        message.channel.send(`⏸️ **Şarkı** ${message.author} **tarafından duraklatıldı!**`);
    }
  
  if (command == "shuffle" || command == "karıştır") {
    if (!message.guild) return;
    if (message.author.bot == true) return;
    if (!message.member.voice.channel) return message.channel.send(":x: **Bir ses kanalında bulunmalısınız!**")
    let queue = distube.getQueue(message);
    if (!queue) return message.channel.send(":x: **Şu anda hiçbir şarkı oynatılmıyor!**")
  if (message.guild.me.voice.channel && message.guild.me.voice.channel.id != message.member.voice.channel.id) return message.channel.send(`:x: **Şu anda başka bir kanalda müzik çalınıyor! Kanal: <#${message.guild.me.voice.channel.id}>**`)
  //  if (SarkiCaliomu.has(message.guild.id)) {
 //    if (queue) {
 //     if (db.fetch(`kanalmea_${message.guild.id}`) != message.member.voice.channel.id) return message.channel.send(`:x: **Şu anda başka bir kanalda müzik çalınıyor! Kanal: <#${db.fetch(`kanalmea_${message.guild.id}`)}>**`)
 //    } else {
 //      db.delete(`kanalmea_${message.guild.id}`)
 //      SarkiCaliomu.delete(message.guild.id)
//     }
//    }
        distube.shuffle(message);
        message.channel.send(`🔀 **Şarkı listesi** ${message.author} **tarafından karıştırıldı!**`);
    }
  
  if (command == "autoplay" || command == "önerilen" || command == "otomatikoynatma" || command == "otooynatma" || command == "otomatik") {
    if (!message.guild) return;
    if (message.author.bot == true) return;
    if (!message.member.voice.channel) return message.channel.send(":x: **Bir ses kanalında bulunmalısınız!**")
    let queue = distube.getQueue(message);
    if (!queue) return message.channel.send(":x: **Şu anda hiçbir şarkı oynatılmıyor!**")
    if (message.guild.me.voice.channel && message.guild.me.voice.channel.id != message.member.voice.channel.id) return message.channel.send(`:x: **Şu anda başka bir kanalda müzik çalınıyor! Kanal: <#${message.guild.me.voice.channel.id}>**`)
  //  if (SarkiCaliomu.has(message.guild.id)) {
  //   if (queue) {
  //    if (db.fetch(`kanalmea_${message.guild.id}`) != message.member.voice.channel.id) return message.channel.send(`:x: **Şu anda başka bir kanalda müzik çalınıyor! Kanal: <#${db.fetch(`kanalmea_${message.guild.id}`)}>**`)
  //   } else {
  //     db.delete(`kanalmea_${message.guild.id}`)
  //     SarkiCaliomu.delete(message.guild.id)
 //   }
 //   }
        let mode = distube.toggleAutoplay(message);
        message.channel.send("⤴️ **Önerilen video oynatma özelliği** `" + (mode ? "aktif edildi." : "kapatıldı.") + "`");
    }
  
  
  if (command == "davet") {
    let dfa = `https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`
    message.channel.send(new Discord.MessageEmbed()
                        .setTitle(`📥 ${client.user.username} Davet`)
                        .setColor(`GREEN`)
                        .setDescription(`**Botu eklemek için [buraya tıkla!](${dfa})**`))
       
    }
  
  
  if (command === "i" || command === "istatistik" || command === "botbilgi" || command === "ping" || command === "gecikme" || command === "stats" || command === "botstats") {
const moment = require('moment')
require('moment-duration-format')
const duration = moment.duration(client.uptime).format("D[g] H[s] m[dk] s[sn]")
const embed = new Discord.MessageEmbed()
.setColor('#2D3133')
.setAuthor(`${client.user.username} İstatistikleri`, client.user.displayAvatarURL({dynamic: true}))
.addField("📡 Gecikme", `**${client.ws.ping}** ms`, true)
.addField("⏰ Çalışma Süresi", duration, true)
.addField("🫂 Kullanıcılar", client.users.cache.size.toLocaleString(), true)
//.addField("🫂 Kullanıcılar", client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
.addField("🎛️ Kanallar", client.channels.cache.size, true)
.addField("🖥️ Sunucular", client.guilds.cache.size.toLocaleString(), true)
.addField("☄️ `Discord.js` sürümü", Discord.version, true)
.setFooter(`${message.author.tag} istedi...`, message.author.displayAvatarURL({dynamic: true}))
.setTimestamp()
message.channel.send(embed)
}
// 
  
  
  if (command == "volume" || command == "ses"|| command == "sound") {
    if (!message.guild) return;
    if (message.author.bot == true) return;
    if (!message.member.voice.channel) return message.channel.send(":x: **Bir ses kanalında bulunmalısınız!**")
    let queue = distube.getQueue(message);
    if (!queue) return message.channel.send(":x: **Şu anda hiçbir şarkı oynatılmıyor!**")
    if (!args.join(" ")) return (":x: **Lütfen bir ses değeri giriniz!**")
    if (message.guild.me.voice.channel && message.guild.me.voice.channel.id != message.member.voice.channel.id) return message.channel.send(`:x: **Şu anda başka bir kanalda müzik çalınıyor! Kanal: <#${message.guild.me.voice.channel.id}>**`)
  //  if (SarkiCaliomu.has(message.guild.id)) {
  //   if (queue) {
  //    if (db.fetch(`kanalmea_${message.guild.id}`) != message.member.voice.channel.id) return message.channel.send(`:x: **Şu anda başka bir kanalda müzik çalınıyor! Kanal: <#${db.fetch(`kanalmea_${message.guild.id}`)}>**`)
  ///   } else {
  //     db.delete(`kanalmea_${message.guild.id}`)
  //     SarkiCaliomu.delete(message.guild.id)
  //   }
 //   }
    if (args[0] > 100) return message.channel.send(`:x: **Ses 100'den yüksek olamaz!**`)
    if (args[0] < 0) return message.channel.send(`:x: **Ses 0'dan küçük olamaz!**`)
        distube.setVolume(message, args[0])
    message.channel.send(`🔉 **Ses seviyesi** \`${args[0]}\` **olarak ayarlandı!**`)
  };
  
 
//   };
//}
  
  
})

distube.on("empty", message => {
//Kanal boş olunca ne olmasını istiyorsanız kod yazın
    //Ünlemboşlukünlem
})

distube.on("noRelated", message => message.channel.send(":x: **Önerilen video bulunamadı. Sıra durduruldu.**"));

distube.on("playSong", async (message, queue, song) => {
  message.guild.me.voice.setSelfDeaf(true);
  //if (queue.repeatMode == 0) {
  message.channel.send(`🎶 \`${song.name}\` **oynatılıyor.**`)
  
  let selm = new Discord.MessageEmbed()
  .setTitle(song.name, song.user.avatarURL())
  .setURL(song.url)
  .setColor('BLURPLE')
  .setThumbnail(song.thumbnail)
  //.setDescription(`**Oynatan:** 👥 ${song.user}`)
  .addField(`**Oynatan**`, `👥 ${song.user}`, true)
  .addField(`**Uzunluk**`, `🕓 ${song.formattedDuration}`, true)
  .addField(`**Like'lar**`, `👍 ${song.likes.toLocaleString()}`, true)
  .addField(`**Dislike'lar**`, `👎 ${song.dislikes.toLocaleString()}`, true)
  .addField(`**Görüntülenme**`, `🎶 ${song.views.toLocaleString()}`, true)
  .addField(`**Video Linki**`, `🔗 [Tıkla](${song.url})`, true)
  const mesaj = await message.channel.send(selm)
  
  let emojis = ["⏭️", "⏯️", "🔈", "🔊", "🔃", "⏹️"]
  const collector = mesaj.createReactionCollector((reaction, user) => emojis.includes(reaction.emoji.name));
  for(let emoji of emojis) await mesaj.react(emoji)

  collector.on("collect", async (reaction, user) => {
	  const member = message.guild.member(user)
	  if (!member.voice.channel) return;
	  if (message.guild.me.voice.channel && member.voice.channel.id != message.guild.me.voice.channel.id) return;
	  let queue = distube.getQueue(message);
    if (!queue) return;
  //  message.channel.send(user.username)
    
  //  message.channel.send(member.voice.channel.name)
     reaction.users.remove(user);
	 if (reaction.emoji.name == "⏭️") {
      message.channel.send(`${user} ⏭️ **şarkıyı atladı.**`)
        distube.resume(message);
        distube.skip(message);
  }
  
  if (reaction.emoji.name == "⏯️") {
    if (distube.isPaused(message)) {
		message.channel.send(`${user} ▶️ **şarkıyı devam ettirdi.**`)
      await distube.resume(message)
      
      } else {
    message.channel.send(`${user} ⏸️ **şarkıyı duraklattı.**`)
        distube.pause(message);
        }
  }
  
   if (reaction.emoji.name == "⏹️") {
    message.channel.send(`${user} ⏹️ **şarkıyı durdurdu.**`)
        distube.resume(message);
        distube.stop(message);
  }
  
  if (reaction.emoji.name == "🔊") {
//let queue = distube.getQueue(message);
    if (queue.volume == 100) return;
    if (Number(queue.volume) + 20 >= 100) queue.volume = 100;
    else queue.volume = Number(queue.volume) + 20;
    distube.setVolume(message, queue.volume);
message.channel.send(`${user} 🔊 **sesi arttırdı. Ses seviyesi** \`${queue.volume}%\``).then(m => { m.delete({timeout: 5220})})
  //  button.channel.send(`${button.clicker.user} ⏹️ **şarkıyı durdurdu.**`)
  }
  
   if (reaction.emoji.name == "🔈") {
if (queue.volume == 0) return;
    if (Number(queue.volume) - 20 <= 0) queue.volume = 0;
    else queue.volume = Number(queue.volume) - 20;
    distube.setVolume(message, queue.volume);
message.channel.send(`${user} 🔈 **sesi azalttı. Ses seviyesi** \`${queue.volume}%\``).then(m => { m.delete({timeout: 5220})})
  //  button.channel.send(`${button.clicker.user} ⏹️ **şarkıyı durdurdu.**`)
  }
  
  if (reaction.emoji.name == "🔃") {
    let mode = distube.setRepeatMode(message, 1)
    mode = mode ? mode == 2 ? "Sırayı Yinele" : "Aktif" : "Kapalı";
        message.channel.send(`🔃 **Yineleme modu** ${user} **tarafından** __${mode}__ **durumuna getirildi!**`);
  }
  
  
  })
  const dispatcher = queue.connection
  queue.dispatcher.on("finish", () => {
	  collector.stop();
    if (!mesaj.deleted) mesaj.delete({ "REASON": "Şarkı Bitti" })
  })
    //olmadı
    /*
  distube.on("finish", message => {
	  collector.stop();
    if (!mesaj.deleted) mesaj.delete({ "REASON": "Şarkı Bitti" })
  })
  */
     })
//})
  
//})

//////////////////////////////////////////////////////////////////////////////////////////////
distube.on("finish", message => {
  message.channel.send("⏹️ | **Sıradaki tüm şarkılar oynatıldı, ses kanalından çıkılıyor...**");
  message.guild.me.voice.channel.leave()
})

distube.on("initQueue", queue => {
    queue.autoplay = false
   queue.volume = 100
});
//////////////////////////////////////////////////////////////////////
distube.on("addList", (message, queue, playlist) => {
           message.channel.send(new Discord.MessageEmbed()
                                .setTitle("Oynatma Listesi Eklendi")
                                .setColor("ORANGE")
                                .setDescription(`\`${playlist.name}\` **adlı oynatma listesi** \`${playlist.songs.length} müzik\` **sıraya eklendi.**`)
                               )
               }
    )
////////////ŞARKI EKLEME///////////
distube.on("addSong", (message, queue, song) => {
  message.guild.me.voice.setSelfDeaf(true);
    
  message.channel.send(new Discord.MessageEmbed()

.setColor("WHITE")                                    
.setThumbnail(song.thumbnail)                               
.setDescription(`__[${song.name}](${song.url})__ adlı şarkı ${message.author} tarafından sıraya eklendi!`)
    )})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
distube.on("error", (message, err) => {
  console.error(err)
return message.channel.send(":x: Sonuç bulunamadı!");
})
  })
  }
