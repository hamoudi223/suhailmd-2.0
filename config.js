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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_06_11_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU1LFxuICAgICAgICA3MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDU4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDgzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTczLFxuICAgICAgICA1OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2OCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDk1LFxuICAgICAgICAxOCxcbiAgICAgICAgODgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDk0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgyLFxuICAgICAgICA2MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM3LFxuICAgICAgICA3MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICA2NCxcbiAgICAgICAgODAsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDkxLFxuICAgICAgICAyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MSxcbiAgICAgICAgODksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMxLFxuICAgICAgICA1NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODQsXG4gICAgICAgIDQwLFxuICAgICAgICA4NixcbiAgICAgICAgNzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5bXdNTUpBcGk1QTQrdTBOM2FuQmI2bTc4aElVMVg2ckZFMEtULzZGYmhjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGSERFRFZ2TVREdW81U0dsdi1sRktnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY2NzgwMWIwLTIwNTktNDRhMC05ZDExLWQxZjNjNmJhNzU4YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTUsXG4gICAgICAxMTksXG4gICAgICAxNjQsXG4gICAgICAxNzQsXG4gICAgICA4NSxcbiAgICAgIDIxMyxcbiAgICAgIDIxNyxcbiAgICAgIDE2NSxcbiAgICAgIDIxOCxcbiAgICAgIDE1OSxcbiAgICAgIDE2OCxcbiAgICAgIDgxLFxuICAgICAgMjIzLFxuICAgICAgMTY4LFxuICAgICAgMTM2LFxuICAgICAgODIsXG4gICAgICAxMTksXG4gICAgICAxOTgsXG4gICAgICAxMTksXG4gICAgICAyNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMzLFxuICAgICAgNyxcbiAgICAgIDg1LFxuICAgICAgMTI3LFxuICAgICAgMjEwLFxuICAgICAgNzMsXG4gICAgICAzNyxcbiAgICAgIDIwLFxuICAgICAgOTgsXG4gICAgICAxNTQsXG4gICAgICAyMzEsXG4gICAgICAwLFxuICAgICAgNDAsXG4gICAgICA5OSxcbiAgICAgIDEwLFxuICAgICAgMjIyLFxuICAgICAgMTMyLFxuICAgICAgOCxcbiAgICAgIDIwMCxcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRDMTFaU0Y0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjM5NTA2NDQ5NzoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjcyNTQ1OTA3NDk0OTI3OjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tiMWxyME1FSVRiejdrR0dBc2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUERIanF5ZlJZNHNXc1hoWXExZVpMVjROOTg3T1lYQnprSHk4ZU5SWUtUST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpb3pEbXVIODlrNmZ5cHlNYmJUcnc3c2J1SlRyOXVwdEptSFpHbmZRRXhDRVJDVEhqRlc4bnFMd2ZHTEthYzdvS1VVdmVycXpvT0ZYQkppL2YyM1ZqUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXYURyaTNrVFRPOUgwM3M4NlNjMEozdXdjamRKOHRDcXdDbjZyQitXNmJFSE5LWW15cS96a083WHdxUkI2VlV0RWVlUU0wMlJyNzcrUWpXQ3hXVGpoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjM5NTA2NDQ5NzoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTQ1NjM5MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJBY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkFjLmpzb24iOiAie1wia2V5RGF0YVwiOlwicjhtWUdJYzVZNEV3bEN3OEhKenZsTjN3Y1puZXBkUUtLbnp4OVRkU3cvQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMzQ5NTI3MjA2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA1NTQ4Njk1MDFcIn0iCn0="

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
