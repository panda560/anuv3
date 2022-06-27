const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "ᴏᴡɴᴇʀ",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:pratama ;Owner;;;\nFN:Creator Faiz ԅ( ͒ ۝ ͒ )ᕤ\nitem1.TEL;waid=6281273677810:6281273677810\nitem1.X-ABLabel:📍 Owner\nitem2.EMAIL;type=INTERNET:akunsesi021@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://hardianto.xyz/\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Lampung 🇮🇩\nitem5.X-ABLabel:───────[ M.A.F.PRATAMA ]───────\nEND:VCARD"
  }, {
    "displayName": "ᴏᴡɴᴇʀ",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Run;Jasa;;;\nFN:+62 819-5929-3465\nitem1.TEL;waid=6281959293465:6281959293465\nitem1.X-ABLabel:📍 Owner\nitem2.EMAIL;type=INTERNET:mursidmulo@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:donasi chat owner ya></\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Indonesia 🇮🇩\nitem5.X-ABLabel:───────[ ANGGRA ]───────\nEND:VCARD"
  }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler
