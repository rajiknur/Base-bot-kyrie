const fs = require("fs")

let handler = async (m, { conn, isCreator, text, reply, example }) => {
  if (!isCreator) return reply(mess.creator)
  if (!text) return reply(example("namafile.js & reply code"))
  if (!m.quoted || !m.quoted.text) return reply(example("namafile.js & reply code"))
  if (!text.endsWith(".js")) return reply("Nama file harus berformat .js")

  let filePath = "./plugins/" + text
  if (fs.existsSync(filePath)) return reply("Nama file plugins sudah terdaftar di dalam folder plugins!")

  let code = m.quoted.text
  await fs.writeFileSync(filePath, code)
  return reply(`Berhasil menambah file plugins *${text}*`)
}

handler.command = ["addplugins", "addplugin", "addp", "addplug"]
module.exports = handler
