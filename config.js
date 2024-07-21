global.owner = ['6281331184338']  
global.mods = ['6281331184338'] 
global.prems = ['6281331184338']
global.nameowner = 'breaksek'
global.numberowner = '6281331184338'
global.mail = 'admin@breaksek.com' 
global.gc = 'https://chat.whatsapp.com/DFbXQpRf2Cu4eVPUBvJof6'
global.instagram = 'https://instagram.com/{gak punya}'
global.wm = '© breaksek-bot'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'breaksek-bot'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.lann = 'tu7EerQU' 
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'ZxqvhBXp'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': 'APIKEY', 
  'https://api.botcahx.eu.org': 'APIKEY'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
