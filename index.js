let btc = prompt('What is Bitcoin price today?',)
if (btc < 0){
    alert('The currensy rate cannot be negative')
}else if (btc === null) {
    alert ('Good buy')
}else {
    let usd = prompt('How much $ do you have?',)
    let result = usd / btc
    if (isNaN(result)||result === Infinity){
        alert ('False, press F5 and try again')
    }else {
        alert (`You can buy ${result.toFixed(7)} BTC`)
    }
    
}








