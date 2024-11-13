const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="bwabymoudy@gmail.com"
global.location="Bamako,Mali."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://zokou_uszr_user:Kdua1qrtgMYaq9buyLYLMcn4gmLuR7gi@dpg-csioredsvqrc73ehetp0-a.oregon-postgres.render.com/zokou_uszr"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Mali";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/KnVwkSJKwJcKuE4rhR5CfX";
global.website=process.env.GURL || "https://chat.whatsapp.com/KnVwkSJKwJcKuE4rhR5CfX" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/2zrKwGf.jpg" || "https://iili.io/2zragCx.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴜɴ ʙᴏᴛ ᴅᴇᴘʟᴏʏé ᴘᴀʀ ᴛʜᴀᴛᴋɪᴅ•" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "22547869771";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22395064497";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://iili.io/22kpOMv.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_16_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDgyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMixcbiAgICAgICAgMTk3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcwLFxuICAgICAgICA1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM4LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDExLFxuICAgICAgICAyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI3LFxuICAgICAgICAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA0LFxuICAgICAgICA3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgODMsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDcsXG4gICAgICAgIDksXG4gICAgICAgIDg0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDg0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNixcbiAgICAgICAgODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUUFhKY0xXUjh4Nlk0NjJYRjcyRW56MXZoa215dXBCYW5NVXJVQS9yVklRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiTDZyeXAyMlJ6V1lwVVNyMlFNMkJBXCIsXG4gIFwicGhvbmVJZFwiOiBcImM2ZTc1Mzg5LTg2ZWMtNGIzYi04YWFjLWRmNWU0OGJhMzg3OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NixcbiAgICAgIDE4NixcbiAgICAgIDI0MCxcbiAgICAgIDkwLFxuICAgICAgOTcsXG4gICAgICAxOTUsXG4gICAgICA1MyxcbiAgICAgIDM3LFxuICAgICAgMTYsXG4gICAgICAxNjEsXG4gICAgICAxMzcsXG4gICAgICAxMzQsXG4gICAgICAxNDcsXG4gICAgICAxNTYsXG4gICAgICA5NyxcbiAgICAgIDI0NyxcbiAgICAgIDk2LFxuICAgICAgMTk0LFxuICAgICAgMTc1LFxuICAgICAgMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNCxcbiAgICAgIDcwLFxuICAgICAgMTEwLFxuICAgICAgMjgsXG4gICAgICAyMzIsXG4gICAgICAyNyxcbiAgICAgIDc1LFxuICAgICAgMjUyLFxuICAgICAgMSxcbiAgICAgIDE1MixcbiAgICAgIDQ4LFxuICAgICAgMjEzLFxuICAgICAgMTE2LFxuICAgICAgMTcxLFxuICAgICAgMTAxLFxuICAgICAgNTIsXG4gICAgICAyMDUsXG4gICAgICAyMzIsXG4gICAgICAxODMsXG4gICAgICAyMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWDNMNjFKTlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyMzk1MDY0NDk3OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzI1NDU5MDc0OTQ5Mjc6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2IxbHIwTUVKaXRtcmtHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQREhqcXlmUlk0c1dzWGhZcTFlWkxWNE45ODdPWVhCemtIeThlTlJZS1RJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlkxNHpsclg1bGg3eWV0d29QSXVHazlMOTNpSVlqMWhFYlhYZmM3MUlQR050dVpuM1I3RWc5NHpTdmdvSGx2TWZLejEwUFZEOHNnanJDR1ZzL1F3R2dRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInoxUitnZzl0NjE1emthUmF1U0czK0FmOHpuQWFQZnd4SHVnZnJqdFljSzhNb2ZIL0pFQUV5ZDNQUXJFTmVyUU5kSldXZjJpYmIxNEdTMmdjeW1rM2pnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyMzk1MDY0NDk3OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNTgyMTcyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQkFnXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCQWcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwWGRqa0F0TWZoSW5kU0ZwOVZ3d092ejNNanlCTndYaFNlMWJuNCt1VmRJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMzNDk1MjcyMDYsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNF19LFwidGltZXN0YW1wXCI6XCIxNzMwNTY1MTI2OTk0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Suhail-Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "TEST-BOT",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "ᴛʜᴀᴛᴋɪᴅ•",
  packname: process.env.PACK_NAME || "ᴛʜᴀᴛᴋɪᴅ•",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "ᴛʜᴀᴛᴋɪᴅ•",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-hmdY9XmrfIROBAuKhX7OT3B|bkFJfKO5STsjxGn7UDLMWzn9",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
  //MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
