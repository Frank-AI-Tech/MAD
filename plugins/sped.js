const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { getBuffer } = require("../framework/dl/Function");
const { default: axios } = require('axios');
const speed = require("performance-now");

zokou({
  nomCom: 'uptime2',
  aliases: ["runtime"], 
  desc: 'To check runtime',
  Categorie: 'General',
  reaction: '⚙️',
  fromMe: 'true',
}, async (dest, zk, commandeOptions) => {
  const { ms, arg, repondre, auteurMessage } = commandeOptions;

  // Calculate the custom uptime
  let currentTime = Date.now();
  let uptimeMilliseconds = currentTime - botStartTime;
  let uptimeSeconds = Math.floor(uptimeMilliseconds / 1000);
  const formattedUptime = runtime(uptimeSeconds);

  // Create the message to be sent
  const message = `*_Uptime of BELTAH XBOT : ${formattedUptime}_*`;

  // Send the message with contextInfo
  await zk.sendMessage(dest, {
    text: message,
    contextInfo: {
      mentionedJid: [auteurMessage],
      externalAdReply: {
        sourceUrl: 'https://whatsapp.com/channel/0029VaTbb3p84Om9LRX1jg0P',
        mediaType: 1,
      }
    }
  });
});

// WORKING 
let timestamp = speed();

zokou({
    nomCom: 'ping2',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '⚙️',
    fromMe: 'true',
},
async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

    // Update timestamp and flashspeed each time the command is executed
    const currentTimestamp = speed();
    const flashspeed = (currentTimestamp - timestamp).toFixed(0);

    await repondre(`*BELTAH XBOT SPEED!!*\n*_${flashspeed} ms_* `);
    
    // Update the timestamp to the current time after calculating speed
     timestamp = currentTimestamp;

    // Sending the edited message after the initial response
   await repondre(`*Success:* The ping originated from sever.`);
});
