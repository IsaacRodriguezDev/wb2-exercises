let annualRateReturn = 6.25
let rule = 72
let accountBalance = 650.34

let doubledAccountBalance = accountBalance.toFixed(2) * 2
let yearsToDouble = rule / annualRateReturn

console.log("Your account balance is currently "+"$"+accountBalance+" and with a "+ annualRateReturn+'% interest rate, your savings account will be worth $'+ doubledAccountBalance+ ' in ' + yearsToDouble.toFixed(1)+' years')
