const keepAlive = require("./server")
   
const axios = require("axios")
const urls = ["https://drago-working-automod-bot.clashwith2.repl.co"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
	keepAlive()
