import yts from "yt-search"
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!text) throw `*[âððððâ] ð½ð¾ð¼ð±ðð´ ð³ð´ ð»ð° ð²ð°ð½ð²ð¸ð¾ð½ ðµð°ð»ðð°ð½ðð´, ð¿ð¾ð ðµð°ðð¾ð ð¸ð½ð¶ðð´ðð´ ð´ð» ð²ð¾ð¼ð°ð½ð³ð¾ ð¼ð°ð ð´ð» ð½ð¾ð¼ð±ðð´/ðð¸ððð»ð¾ ð³ð´ ðð½ð° ð²ð°ð½ð²ð¸ð¾ð½*\n\n*ââ ð´ð¹ð´ð¼ð¿ð»ð¾:*\n*${usedPrefix + command} Farruko beba`    
try {
let search = await yts(args.join(" "))
let listSerch = []
let listSerch2 = []
let listSerch3 = []
let listSerch4 = []
let teskd = `ðð®ð¬ð¢ðð ð«ðð¥ððð¢ð¨ð§ððð ðð¨ð§: ${args.join(" ")}`
const sections = [{
title: `ââãâï¸ AUDIOS ð±âã`,
rows: listSerch },
{              
title: `ââãðVIDEOSð´âãï¸`,
rows: listSerch2 },
{              
title: `ââãâ¨DOCUMENTO MP3ðâãï¸`,
rows: listSerch3 },
{              
title: `ââãðDOCUMENTO MP4âï¸âã`,
rows: listSerch4 }]
const listMessage = {
text: teskd,
footer: 'ðð¥ð¢ð£ð ð®ð§ð ð¨ð©ðð¢ð¨ð§ ð² ð©ð«ððð¢ð¨ð§ð ðð§ð¯ð¢ðð«',
title: " ã ð ð¨ð¦ððð ð¥ðððððð¢ð¡ððð ã",
buttonText: "[â¦ ðððððððððð â¦]",
sections}
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3 ${i.url}`})
listSerch2.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4 ${i.url}`})
listSerch3.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3doc ${i.url}`})
listSerch4.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4doc ${i.url}`})}
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*[âððððâ] ð´ððð¾ð, ð¿ð¾ð ðµð°ðð¾ð ððð´ð»ðð° ð° ð¸ð½ðð´ð½ðð°ðð»ð¾ ð²ð¾ð½ ð¾ððð¾ ð½ð¾ð¼ð±ðð´ ð³ð´ ðð½ð° ð²ð°ð½ð²ð¸ð¾ð½*')
}}
handler.command = /^playdocumento|documento$/i

export default handler
