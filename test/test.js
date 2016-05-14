/**
 * Created by hina on 2016/05/15.
 */
const Push7 = require('../').Push7;


const client = new Push7({
    appno: process.env.PUSH7_APPNO,
    apikey:process.env.PUSH7_APIKEY
});

// get app info
client.head().then(res=>console.log(res)).catch(rej=>console.error(`Error: ${rej.name} (${rej.message})`));

// send Push Notification
client.send({
    title:'Test Message',
    body:"Node-Push7 test message",
    icon:"http://push7.jp/notifycation_icon.png",
    url:'https://push7.jp/',
}).then(res=>console.log(res)).catch(rej=>console.error(`Error: ${rej.name} (${rej.message})`));