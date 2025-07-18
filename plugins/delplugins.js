const fs = require("fs")

let handler = async (m, { conn, isCreator, text, reply, example }) => {
  if (!isCreator) return reply(mess.creator)
  if (!text) return reply(example("namafile.js"))
  if (!text.endsWith(".js")) return reply("Nama file harus berformat .js")

  let filePath = "./plugins/" + text
  if (!fs.existsSync(filePath)) return reply("Plugin tidak ditemukan di folder plugins!")

  fs.unlinkSync(filePath)
  return reply(`Berhasil menghapus file plugins *${text}*`)
}

handler.command = ["delplugin", "deleteplugin", "hapusplugin"]
module.exports = handler
