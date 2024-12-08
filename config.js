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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_14_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NyxcbiAgICAgICAgNDksXG4gICAgICAgIDkyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgODksXG4gICAgICAgIDY1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNixcbiAgICAgICAgMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODYsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDczLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2OSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI3LFxuICAgICAgICA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyLFxuICAgICAgICA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzLFxuICAgICAgICA2MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU0LFxuICAgICAgICA4NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyLFxuICAgICAgICA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN04zbW9pSEJvMjh6ZzdFMEJKUkJ4ZU4ycUlaL25jRUtoNWdkOHZ1L2l6ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTGJ5SEUxQ0FTN2E4R1B1VVVsZXpiQVwiLFxuICBcInBob25lSWRcIjogXCIyMDRlMjlkOS1lNGIxLTRiMzktOTFlYS0xODNhZTQ3NWU4ZDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgOTksXG4gICAgICAxODIsXG4gICAgICAxMCxcbiAgICAgIDE3NCxcbiAgICAgIDE1NyxcbiAgICAgIDE4OCxcbiAgICAgIDExMSxcbiAgICAgIDE2MCxcbiAgICAgIDEyOSxcbiAgICAgIDIxNyxcbiAgICAgIDMsXG4gICAgICAxMSxcbiAgICAgIDExNCxcbiAgICAgIDEwNyxcbiAgICAgIDE4NyxcbiAgICAgIDEyLFxuICAgICAgMzcsXG4gICAgICAyMTMsXG4gICAgICAxOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDIyMCxcbiAgICAgIDEzMSxcbiAgICAgIDQwLFxuICAgICAgNzEsXG4gICAgICA2NyxcbiAgICAgIDM2LFxuICAgICAgMTE0LFxuICAgICAgMjMzLFxuICAgICAgMTc1LFxuICAgICAgMTQsXG4gICAgICA5NixcbiAgICAgIDE3LFxuICAgICAgOTcsXG4gICAgICAzOSxcbiAgICAgIDQ2LFxuICAgICAgNTQsXG4gICAgICAxNTcsXG4gICAgICAxODEsXG4gICAgICAxMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWFZTM0EzUkVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc1NzA0MDI1OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2UqvCdlK8uIOG0hcmqc3NBIOG0j9KT4bSEXCIsXG4gICAgXCJsaWRcIjogXCIxMDcwNzgzODMzMTcwMzA6MTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0tjMXA0R0VJbTYxTG9HR0FvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOTnhLbEFtU1JOd2ZNbnhBbHY5NktaeHMvNkw1Y2FGQTFJejgxUnJjMzBjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlI3a1o2WTZRQkZlRzR2Nk1kaUJsL1NKRnNYYnV5elMyb0hxa094RkRmcFptVm00VjBCWGxXTDZyeDBtNjNjcjlyaCtUcmNpRVlvbjNHZTVuanVsMkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInptam95b1NsS0hlZVpraHNJYUc4K1ZhaTlpWjB1N25TSE8vZVFDSUcrOE8vU01uQ0E5NTJqNXlYSjZ5MnFsQ05LOXh4Qzh1cTNjK055Q3U4SjVPNEFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc1NzA0MDI1OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNjMxMjQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSG1CXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIbUIuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
