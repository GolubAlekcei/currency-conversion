let btc = prompt('What is Bitcoin price today?',)
if (btc < 0){
    alert('Курс не може бути відємний')
}else if (btc === null) {
    alert ('Good buy')
}else {
    let usd = prompt('How much $ do you have?',)
    let result = usd / btc
    if (isNaN(result)||result === Infinity){
        alert ('false')
    }else {
        alert (`You can buy ${result.toFixed(7)} BTC`)
    }
    
}








