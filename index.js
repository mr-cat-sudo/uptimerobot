//dont change this unless you know what your doing!!!

const keepAlive = require("./server")
   
const axios = require("axios")
const urls = ["YOUR SERVER OR SOMETHING"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
	keepAlive()
