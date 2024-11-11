// BTC
let btcNgn=document.getElementById('btcNgn');
let btcUsd=document.getElementById('btcUsd');
let btcMc=document.getElementById('btcMc');

// Etheruem
let ethNgn=document.getElementById('ethNgn');
let ethUsd=document.getElementById('ethUsd');
let ethMc=document.getElementById('ethMc');

// Dogecoin
let doNgn=document.getElementById('doNgn');
let doUsd=document.getElementById('doUsd');
let doMc=document.getElementById('doMc');

// Solana
let solNgn=document.getElementById('solNgn');
let solUsd=document.getElementById('solUsd');
let solMc=document.getElementById('solMc');

// BUSD
let bNgn=document.getElementById('bNgn');
let bUsd=document.getElementById('bUsd');
let bMc=document.getElementById('bMc');

let request = new XMLHttpRequest();
setInterval(() => {
    
request.open('GET','https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Csolana%2Cbusd&vs_currencies=usd%2Cngn&include_market_cap=true&precision=4');

request.onerror =function(){
    document.title='Poor Internet Connection';
}

request.onload = function(){
    console.log(request);
    console.log(request.responseText);

    let myData=JSON.parse(request.responseText);
    console.log(myData);
    // Btc
    btcNgn.innerHTML= 'N ' + myData.bitcoin.ngn;
    btcUsd.innerHTML=myData.bitcoin.usd;
    btcMc.innerHTML=myData.bitcoin.ngn_market_cap;

    // Etheruem
    ethNgn.innerHTML=myData.ethereum.ngn;
    ethUsd.innerHTML=myData.ethereum.usd;
    ethMc.innerHTML=myData.ethereum.ngn_market_cap;   
    
    // Dogecoin
    doNgn.innerHTML=myData.dogecoin.ngn;
    doUsd.innerHTML=myData.dogecoin.usd;
    doMc.innerHTML=myData.dogecoin.ngn_market_cap;  

    // solana

    solNgn.innerHTML=myData.solana.ngn;
    solUsd.innerHTML=myData.solana.usd;
    solMc.innerHTML=myData.solana.ngn_market_cap;  

    // bu
    bNgn.innerHTML=myData.busd.ngn;
    bUsd.innerHTML=myData.busd.usd;
    bMc.innerHTML=myData.busd.ngn_market_cap;  
};

request.send();

}, 5000);
