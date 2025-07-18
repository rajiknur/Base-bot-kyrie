const fs = require("fs")

let handler = async (m, { conn, isCreator, text, reply, example }) => {
  if (!isCreator) return reply(mess.creator)
  if (!text) return reply(example("namafile.js"))
  if (!text.endsWith(".js")) return reply("Nama file harus berformat .js")

  let filePath = "./plugins/" + text
  if (!fs.existsSync(filePath)) return reply("Plugin tidak ditemukan di folder plugins!")

  let isi = fs.readFileSync(filePath, "utf8")
  return reply(`📄 Isi Plugin *${text}*:\n\n` + isi)
}

handler.command = ["getplugins", "lihatplugin", "showplugin"]
module.exports = handler
