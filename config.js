// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

gc1 = ''
gc2 = ''
gc3 = ''
global.linkGC = ['https://chat.whatsapp.com/LYKAIdkBeX97FK0jNsOMAx', ''] // ganti jadi group lu
global.owner = ['+62 812-7367-7810','+62 819-5929-3465','+66 98 660 9139'] // Put your number here //owner eval
global.kontak = ['+62 812-7367-7810','+62 819-5929-3465'] //Ketika ada yang ngetik #owner
global.mods = ['0'] // Want some help?
global.prems = ['84 796 102 942','62 812-7367-7810','62 819-5929-3465'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://api.lolhuman.xyz': 'RFK-Rey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'RFK-Rey'
zekskey = 'apivinz'
xteamkey = 'Dawnfrostkey'
//xteam        MIMINETBOT
namaig = 'arrezza20'
namagithub = 'Botwa021'
kasihcaption = `Follow Ig @arrezza20`
namakontak1 = 'Pb bot'
namakontak2 = 'Faiz'

//kasihcaption = `Follow Ig @arrezza20`

// Sticker WM
global.packname = 'PRATAMA MULTIDEVICE' // ganti aja
global.author = 'M.A.F.PRATAMA' // ganti aja

//yyy
bc = 'pratama multidevice' //Pratama Broadcast
footer = `\n©️ _*PRATAMA MULTIDEVICE*_`
namabot = `WhatsApp Bot`
namalu = 'M.A.F.PRATAMA'


// 
wait = '_*Wait...*_'
global.wait = '_*Wait...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/FnNAbem8o6r4pgLhSdO8Q9'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Server Error kak*_'

global.image = "https://telegra.ph/file/6f1b396c089ed57b85d8b.jpg"

// Ubah saja SC dari MursidXzy
global.image = 'https://telegra.ph/file/6f1b396c089ed57b85d8b.jpg'//thumbnail

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 36 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
