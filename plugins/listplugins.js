const fs = require("fs")

let handler = async (m, { conn, isCreator, reply }) => {
  if (!isCreator) return reply(mess.creator)

  let files = fs.readdirSync("./plugins/").filter(file => file.endsWith(".js"))
  if (!files.length) return reply("Tidak ada file plugin ditemukan di folder plugins.")

  let list = files.map((file, i) => `📁 ${i + 1}. ${file}`).join("\n")
  return reply(`📂 Daftar Plugin:\n\n${list}`)
}

handler.command = ["liatplugins", "listplugin", "cekplugins"]
module.exports = handler
