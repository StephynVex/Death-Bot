

module.exports = async(sock, update) => {
    try {
        const groupId = update.id;
        const participants = update.participants;
        const action = update.action;

        const groupMetadata = await sock.groupMetadata(groupId);
        const groupName = groupMetadata.subject;
        
        for (const participant of participants) {
            const user = participant.split('@')[0];
            console.log(`participant update: ${participant}, action: ${action}, user: ${user}, group: ${groupId}`);
            if (action === 'add') {
                sock.sendMessage(groupId, {
                    text: `¡Hola @${user}! Bienvenido/a al grupo. ¡Esperamos que te diviertas y disfrutes tu estancia aquí! 🎉`,
                    contextInfo: {
                        mentionedJid: [ participant ],
                        externalAdReply: {
                            title: `DEATH BOT`,
                            body: ``,
                            sourceUrl: '',
                            renderLargerThumbnail: false, 
                            mediaType: 1, 
                            thumbnailUrl: 'https://telegra.ph/file/d6fd8fbc2f7cdd01d77c1.jpg'
                        }
                    }
                });
            } else if (action === 'remove') {
                sock.sendMessage(groupId, {
                    text: `Adiós @${user}. Esperamos que hayas tenido una buena experiencia en el grupo. ¡Te echaremos de menos! 👋`,
                    contextInfo: {
                        mentionedJid: [ participant ],
                        externalAdReply: {
                            title: `DEATH BOT`,
                            body: ``,
                            sourceUrl: '',
                            renderLargerThumbnail: false, 
                            mediaType: 1, 
                            thumbnailUrl: 'https://telegra.ph/file/d6fd8fbc2f7cdd01d77c1.jpg'
                        },
                    }
                });
            }
        }
    } catch (e) {
        console.log(`Error : ${e}`)
    }
          }
