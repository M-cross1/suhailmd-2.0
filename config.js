const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/M-cross1/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "M-CROSS" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347049602299";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347049602299";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_36_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDk1LFxuICAgICAgICA4NixcbiAgICAgICAgMTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NSxcbiAgICAgICAgNTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzEsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDczLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxOSxcbiAgICAgICAgOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMyLFxuICAgICAgICA3MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NixcbiAgICAgICAgMTg0LFxuICAgICAgICAzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2LFxuICAgICAgICA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NixcbiAgICAgICAgOSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA4OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUzLFxuICAgICAgICAyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExLFxuICAgICAgICAyNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjksXG4gICAgICAgIDU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExLFxuICAgICAgICA4NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDYxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNixcbiAgICAgICAgMzksXG4gICAgICAgIDc1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDY4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDM2LFxuICAgICAgICA0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicWQrK1pWYWprNUFuOEQzTFlaZnFzMitXai8xVG51RXRPamRXVXVYTGNuRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTUJZdEhPZUJSN202SFhVVmNzOGNVQVwiLFxuICBcInBob25lSWRcIjogXCI4YTM4NjczYi0yYjgxLTQyYTEtOTkzZi03YzRiNjg0NjkwMWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE5LFxuICAgICAgMjIxLFxuICAgICAgMTA5LFxuICAgICAgOTIsXG4gICAgICAyMDQsXG4gICAgICA0MCxcbiAgICAgIDgzLFxuICAgICAgMTIsXG4gICAgICAxOSxcbiAgICAgIDI0MCxcbiAgICAgIDE2MixcbiAgICAgIDIzMyxcbiAgICAgIDI0NixcbiAgICAgIDE0MCxcbiAgICAgIDkwLFxuICAgICAgMTY1LFxuICAgICAgMTI4LFxuICAgICAgMjI3LFxuICAgICAgMTMwLFxuICAgICAgMTU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNCxcbiAgICAgIDI1NCxcbiAgICAgIDIzMCxcbiAgICAgIDExMCxcbiAgICAgIDIzNCxcbiAgICAgIDE4NSxcbiAgICAgIDE1NixcbiAgICAgIDY5LFxuICAgICAgMTQ3LFxuICAgICAgNDcsXG4gICAgICAyMzUsXG4gICAgICA2OSxcbiAgICAgIDEwMSxcbiAgICAgIDc1LFxuICAgICAgMTUzLFxuICAgICAgNTUsXG4gICAgICAyMixcbiAgICAgIDE5NyxcbiAgICAgIDgwLFxuICAgICAgNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRFRFTU00UTFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDk2MDIyOTk6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjcwMzU2NTk3NjM5MzI6MjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkhCdnRjQ0VNaTNvN2tHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3MGpUZ0RPZmx3b0hWQmo0VGlMTXM1enRTdktmV29icmNMUGNEcEN3c1RrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkgwTjAzbWswY3NHZ0tpYmlwSnBIYWY0dnJ6dGRraXFBUjhjVXExMEFSN2hwb2owRHIvSVk5S04wOURxSFMwdmRNN1pSWm91aVRmS1lQRVVGUXNqdkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlRac0kzUlQ5aHRSUnJ6Z3JXMFI0Znlldndsa2s5L1JDYVg1cnpFSCtOTkdxNGdMNjc0QmhDK0p3WHl6TlBhQ1ZhU3lGRFBzZStBZnc4aU1OYU9ERERnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDk2MDIyOTk6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDczMDk1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhuZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSG5nLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVmFTeEtreVhhb0hGWTJNYTBIcHpPMGZCbVpDNzdpa2syY0Zoa0RVWk45Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MjAzNDcyODEsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDRdfSxcInRpbWVzdGFtcFwiOlwiMTczMDI2OTg0Mjk3OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "KING M-CROSS",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
