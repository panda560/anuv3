let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(image + 'donasi')).buffer(), `
╭──『 _*Donasi*_ 』──⬣
│⬡ *_Dana/Gopay_* :
│⬡ *+62 812-7367-7810*
 ⬡ *+62 819-5929-3465*
│⬡ *_Pulsa_* :
│⬡ *081959293465*
╰─────────⬣
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
