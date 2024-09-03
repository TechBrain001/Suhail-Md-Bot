const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="techbrainm@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349158564687";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "TechBrain Bot",
  ownername:process.env.OWNER_NAME|| "TechBrain Media",

  sessionName:process.env.SESSION_ID || "SUHAIL_23_44_09_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU1LFxuICAgICAgICAzNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI2LFxuICAgICAgICA0MyxcbiAgICAgICAgNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTksXG4gICAgICAgIDQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzLFxuICAgICAgICA5NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzksXG4gICAgICAgIDMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDExOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDUsXG4gICAgICAgIDIxLFxuICAgICAgICAyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDk1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTksXG4gICAgICAgIDMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAxLFxuICAgICAgICA1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxLFxuICAgICAgICA1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDYxLFxuICAgICAgICAzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDk0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVzdGMWZVVVdpQ08vUnlRYzNXWHFrR0Y2UUR6c1VRNU93czVkY2xhdUFCTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiU1hOcE04NGZSTDJ3dUN2c2NZbTZPd1wiLFxuICBcInBob25lSWRcIjogXCIzYmVhM2I5Ny1iMmJkLTRkMDEtYmYwZC05YmI1NzcxNmM5NGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYzLFxuICAgICAgMTYsXG4gICAgICA1NyxcbiAgICAgIDE0OCxcbiAgICAgIDIwMSxcbiAgICAgIDIzNCxcbiAgICAgIDIwNCxcbiAgICAgIDEzLFxuICAgICAgNixcbiAgICAgIDI0NyxcbiAgICAgIDEwNyxcbiAgICAgIDIyMSxcbiAgICAgIDI1MSxcbiAgICAgIDY5LFxuICAgICAgMTQxLFxuICAgICAgMzksXG4gICAgICAzMixcbiAgICAgIDcsXG4gICAgICAxNTIsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzYsXG4gICAgICA3NyxcbiAgICAgIDIxMixcbiAgICAgIDI1LFxuICAgICAgMTk3LFxuICAgICAgMjMsXG4gICAgICAxMzgsXG4gICAgICAxNDEsXG4gICAgICAxNjcsXG4gICAgICA1NixcbiAgICAgIDgsXG4gICAgICAxMTQsXG4gICAgICAxMDIsXG4gICAgICAyMjIsXG4gICAgICAxMjUsXG4gICAgICA4NyxcbiAgICAgIDE0NCxcbiAgICAgIDY5LFxuICAgICAgODMsXG4gICAgICAyNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWUxYU0ZEMTZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTg1NjQ2ODc6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUZWNoQnJhaW4gTWVkaWFcIixcbiAgICBcImxpZFwiOiBcIjEwMDc3NzYxNjAwNzIxMjoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJRG04UTRReTc3ZXRnWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFPcDc5WjBqSUs0bmRuSUdURnBxZkI4TS95dEZkN3FDNk52SUd1UUJ0V2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMjk4bk01YTFMVkJNVWtnUnRnZk5Kd3RuT29Jbk1NcHB6cHY3WW9BK1BIZkdSdldpcWVJc2kzdDVOWW9iV0NzSHBhRkNTQXVUbWpKRTkvQkpMQjJ0QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT3ZkbW8zQStodW1aRnRGWUF4L3kvYjlUTkwvZThVR3g4T0IzK0FmQ2Q1M25jSXFKdzlha3BLcjFzb2c2TllFV2I1WlplUUFJbWVHWjkrcTk5Y3Jyanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1ODU2NDY4NzoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1NDA3MDU1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==" ,// PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
