async function process(){
const axios = require("axios");
const response = await axios.get("https://api.binance.com/api/v3/klines?symbol=BTCBUSD&interval=1m");
const candle = response.data[499]
const price = parseFloat(candle[4]); // mostra o preco da moeda 

console. log( Date()); 
console.log(price);

if (price > 37963)
    console.log("Vender!");
else if (price <  36662)
    console.log("Comprar");
else 
    console.log("Aguardar");
      
}

setInterval(process, 10000)

process();