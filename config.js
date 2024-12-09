const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "./lib/assets/Disinduphonk.mp3" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="disindudamsandu@gmail.com"
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


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "+94775704025";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+94775704025";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "./lib/assets/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "online" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_53_12_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI0LFxuICAgICAgICAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDM5LFxuICAgICAgICAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI2LFxuICAgICAgICA0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDc4LFxuICAgICAgICA3MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA1LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA2LFxuICAgICAgICA0OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1LFxuICAgICAgICA4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgODUsXG4gICAgICAgIDk3LFxuICAgICAgICAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMyLFxuICAgICAgICA2MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDM2LFxuICAgICAgICA4MixcbiAgICAgICAgMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDY2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODksXG4gICAgICAgIDIxLFxuICAgICAgICA2NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDY5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDc3LFxuICAgICAgICAxODUsXG4gICAgICAgIDU4LFxuICAgICAgICA2NixcbiAgICAgICAgMTM0LFxuICAgICAgICA5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDYxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3LFxuICAgICAgICAzNixcbiAgICAgICAgMTM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzksXG4gICAgICAgIDYxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDg3LFxuICAgICAgICA0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1LFxuICAgICAgICA2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYwLFxuICAgICAgICAxODYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK0hVekt6bzg1a2pBR1BMZ1VHWXh2NXBCVmxSdHVhVDRLVXgybVlRdmxRZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWGV2OTBwUEJUNHEteHNTRms1M1l5UVwiLFxuICBcInBob25lSWRcIjogXCJlMjRjOTQxNi1iYzAzLTQxYTUtOGY0Zi0wMGY4ZDRjNjIxMTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDIxMCxcbiAgICAgIDIzLFxuICAgICAgMTkwLFxuICAgICAgNjEsXG4gICAgICAxOTYsXG4gICAgICAxNjMsXG4gICAgICA3MyxcbiAgICAgIDE2MyxcbiAgICAgIDEzNyxcbiAgICAgIDc3LFxuICAgICAgNDEsXG4gICAgICAzNyxcbiAgICAgIDM0LFxuICAgICAgNTMsXG4gICAgICAxMTEsXG4gICAgICAxNDEsXG4gICAgICAxMzUsXG4gICAgICAyNixcbiAgICAgIDIwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDksXG4gICAgICAxMzksXG4gICAgICA5LFxuICAgICAgMTM2LFxuICAgICAgMjQ1LFxuICAgICAgOTMsXG4gICAgICA1MyxcbiAgICAgIDIyLFxuICAgICAgMTU3LFxuICAgICAgMTExLFxuICAgICAgMjIzLFxuICAgICAgNjksXG4gICAgICAxMDEsXG4gICAgICA2NSxcbiAgICAgIDgwLFxuICAgICAgMTY4LFxuICAgICAgOTksXG4gICAgICAxMzYsXG4gICAgICAxNTIsXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUR0xEVEExWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzU3MDQwMjU6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLhr77htIXhtIBzc+G0gCDhtI/Sk+G0hOC8hlwiLFxuICAgIFwibGlkXCI6IFwiMTA3MDc4MzgzMzE3MDMwOjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tLYzFwNEdFTnJRMjdvR0dBd2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTk54S2xBbVNSTndmTW54QWx2OTZLWnhzLzZMNWNhRkExSXo4MVJyYzMwYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkOGxyczhTSnJ4blRab3NnSzNZNG5DcFJ0SkhRSTBaZzE5cmo5bE5tTGYvYndNS0QyRHp4ZHVXTGZhcEFtdEczVnlQWWlCWmwvVE1rNlo4UytVVjhCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDU1l0NVlvRTBqbWc1RWkvaVJVbENRVlhrMk00blhMY3gzYnBGSHdwUjRoQVhFSEhmdXkvWDRSc2Z1RUhBWGIwMTB3dU1xc2xUN0I5UzAyK3F6VDNBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3NTcwNDAyNToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzc0ODgzMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhtQlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSG1CLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSThrMndtbU95SmZSY3o2Zm5uQ2QrU3N4Q2dsYjR3QStIeFFVMVdKc2NwND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjc0OTM5OTM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE1NjIyNTY4ODRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
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
