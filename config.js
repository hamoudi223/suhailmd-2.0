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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "22395064497" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "22395064497";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "243824056207";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/lcDNlMs.jpeg" // "image" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_49_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA3OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDI3LFxuICAgICAgICA2NixcbiAgICAgICAgMTAzLFxuICAgICAgICA2NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDM4LFxuICAgICAgICA4NixcbiAgICAgICAgNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc5LFxuICAgICAgICA0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDksXG4gICAgICAgIDU0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDc4LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIwLFxuICAgICAgICA5MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDczLFxuICAgICAgICA0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYyLFxuICAgICAgICA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxODYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzksXG4gICAgICAgIDc3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgOSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NixcbiAgICAgICAgODUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzksXG4gICAgICAgIDMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDkwLFxuICAgICAgICA3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA4LFxuICAgICAgICAzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxLFxuICAgICAgICA2MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9pbjVkV2xaMlYxQXZFTlhCYUJqMGtTTnk0SndNV3NBSWlzQW1lWDlHMlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkg4US15dlU2UzhlTXNrNUs0Z2hqWndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzk1Y2QxNzUtOTgwZi00YWQwLWJhOWItMzBjYjNjZWVhZmM3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDMyLFxuICAgICAgMjM2LFxuICAgICAgMzYsXG4gICAgICAyNDIsXG4gICAgICA5NixcbiAgICAgIDU3LFxuICAgICAgMTc1LFxuICAgICAgMTY2LFxuICAgICAgMjAyLFxuICAgICAgNjgsXG4gICAgICAxNyxcbiAgICAgIDI4LFxuICAgICAgNzksXG4gICAgICAxOTksXG4gICAgICAxMTAsXG4gICAgICAyMjUsXG4gICAgICA4NixcbiAgICAgIDczLFxuICAgICAgMTEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDU0LFxuICAgICAgODYsXG4gICAgICAxOSxcbiAgICAgIDIxNSxcbiAgICAgIDE1LFxuICAgICAgMTI5LFxuICAgICAgMjM5LFxuICAgICAgMjUxLFxuICAgICAgMjUxLFxuICAgICAgMjAyLFxuICAgICAgODMsXG4gICAgICAxMTgsXG4gICAgICA3MSxcbiAgICAgIDExOSxcbiAgICAgIDExMCxcbiAgICAgIDg3LFxuICAgICAgMjksXG4gICAgICAxNTQsXG4gICAgICAyMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUtUVlJHR1NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI0MzgyNDA1NjIwNzoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI0NTQxNTY5MzM1NTA2OjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AzVDkrMEJFT3VDcGJrR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidTVhRkJLa1h0WlExSEk4VUFla3I4ZWNyRjQ3cWR5akJ6VFB2Ym1HRll3MD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYS0JmdGc2WDlVRmNOR2lkRDdUWGJhV2hyL1JVeVFma1hxWGlGYUdTMW5QWUY4cFpiUW5yRWxmcGRMN2RIU21IeTMvM3lzUzVnZEoySTZYdVNqSndCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLQ0UrUCs5VkU5bUhOQTlZZFFkTUZ1OFZxVGlrOUNlcDQvTFo2TGdldmtkbjUvOGZ5MVZRZE9YVmlVbVF0RTRkVEVscXJqTE1TbzFPNDhZV0RUYXVodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNDM4MjQwNTYyMDc6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDc1Njk3NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUsvZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSy9mLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "✨🔮ⁱᵐᵃ𝓚𝓪𝓮𝓭𝓮𝓱𝓪𝓻𝓪 𝓜𝓾𝓻𝓪𝓼𝓪𝓴𝓲🔮✨",
  packname: process.env.PACK_NAME || "✨🔮ⁱᵐᵃ𝓚𝓪𝓮𝓭𝓮𝓱𝓪𝓻𝓪 𝓜𝓾𝓻𝓪𝓼𝓪𝓴𝓲🔮✨",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
