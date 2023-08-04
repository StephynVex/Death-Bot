require('../config') 
  
 const fs = require('fs') 
 const util = require('util') 
  
 const { Json, removeAccents } = require('../lib/functions') 
 const { client, sms } = require('../lib/simple') 
  
 module.exports = async(sock, m, store) => { 
         try { 
                 sock = client(sock) 
                 v = await sms(sock, m) 
  
                 const prefix = global.prefix 
                 const isCmd = m.body.startsWith(prefix) 
                 const command = isCmd ? removeAccents(m.body.slice(prefix.length)).trim().split(' ').shift().toLowerCase() : '' 
  
                 const args = m.body.trim().split(/ +/).slice(1) 
                 const q = args.join(' ') 
                 const senderNumber = m.sender.split('@')[0] 
                 const botNumber = sock.user.id.split(':')[0] 
  
                 const groupMetadata = m.isGroup ? await sock.groupMetadata(v.chat) : {} 
                 const groupMembers = m.isGroup ? groupMetadata.participants : [] 
                 const groupAdmins = m.isGroup ? sock.getGroupAdmins(groupMembers) : false 
  
                 const isMe = (botNumber == senderNumber) 
                 const isBotAdmin = m.isGroup ? groupAdmins.includes(botNumber + '@s.whatsapp.net') : false 
                 const isOwner = owner.includes(senderNumber) || isMe 
                 const isStaff = staff.includes(senderNumber) || isOwner 
  
                 const isMedia = (m.type === 'imageMessage' || m.type === 'videoMessage') 
                 const isQuotedMsg = m.quoted ? (m.quoted.type === 'conversation') : false 
                 const isQuotedImage = m.quoted ? (m.quoted.type === 'imageMessage') : false 
                 const isQuotedVideo = m.quoted ? (m.quoted.type === 'videoMessage') : false 
                 const isQuotedSticker = m.quoted ? (m.quoted.type === 'stickerMessage') : false 
                 const isQuotedAudio = m.quoted ? (m.quoted.type === 'audioMessage') : false
                
                
                 switch (command) { 
case 'ping':
v.reply('pong')
break
  
 case 'test': 
 v.reply('test') 
 break 
                                     case body.startsWith('tag'): // TAG ----------------------------------- 
                 case body.startsWith('Tag'): 
                 case body.startsWith('TAG'): 
                     if (from.endsWith('@g.us')) { 
                         const groupMetadata = await sock.groupMetadata(from); 
                         console.log('groupMetadata:', groupMetadata); 
                         const groupAdmins = groupMetadata.participants.filter(participant => participant.isAdmin).map(admin => admin.id); 
                         const isGroupAdmin = groupAdmins.includes(sender) || sender === owner.number; 
  
                         if (isGroupAdmin) { 
                             const mentionedJids = groupMetadata.participants.map(participant => participant.id); 
                             console.log('mentionedJids:', mentionedJids); 
                             if (mentionedJids && mentionedJids.length > 0) { 
                                 const message = body.slice(4).trim(); 
                                 if (message.length > 0) { 
                                     const media = v.message.imageMessage || v.message.videoMessage || v.message.audioMessage || v.message.stickerMessage || v.message.pdfMessage; 
                                     if (media) { 
                                         takuMsg(from, media, mentionedJid: [ mentionedJid ] 
                                         }); 
                                     } else { 
                                         takuMsg(from, {text, contextInfo: {mentionedJid:[mentionedJids]}}); 
                                     } 
                                 } else { 
                                     await messageTaku('El mensaje está vacío. Por favor, incluye un mensaje después del comando "tag".'); 
                                 } 
                             } else { 
                                 await messageTaku('No se encontraron usuarios en el grupo para mencionar.'); 
                             } 
                         } else { 
                             await messageTaku('Este comando solo puede ser utilizado por los administradores del grupo o el propietario.'); 
                         } 
                     } else { 
                         await messageTaku('Este comando solo puede usarse en grupos.'); 
                     } 
                     break

  
                         default: 
                         if (isOwner) { 
                                 if (v.body.startsWith('+')) { 
                                         try { 
                                                 await v.reply(Json(eval(q))) 
                                         } catch(e) { 
                                                 await v.reply(String(e)) 
                                         } 
                                 } 
                         } 
                 } 
  
         } catch (e) { 
                 console.log(e) 
         } 
 } 
  
 let file = require.resolve(__filename) 
 fs.watchFile(file, () => { 
         fs.unwatchFile(file) 
         console.log(`Update ${__filename}`) 
         delete require.cache[file] 
         require(file) 
 })
