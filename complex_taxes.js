let filingStatus = 'Single'
let annualGrossIncome = 0

let taxesPercent = 0.23
let weeklyIncome = 2350.65
let weeklyTaxes = weeklyIncome*taxesPercent
let weeklyIncomeAfterTax = (weeklyIncome - weeklyTaxes) 

annualGrossIncome = weeklyIncomeAfterTax * 52
console.log(annualGrossIncome.toFixed(2))

if (filingStatus == 'Single'){
    if(annualGrossIncome < 12000){
        annualGrossIncome = annualGrossIncome * (1.00-0.05)
    } else if(annualGrossIncome >= 12000 && annualGrossIncome < 25000){
    annualGrossIncome = annualGrossIncome * (1.00-0.10)

} else if(annualGrossIncome >= 25000 && annualGrossIncome <75000){
    annualGrossIncome = annualGrossIncome * (1.00-0.15)

} else{
    annualGrossIncome = (annualGrossIncome)* (1.00-0.20)
}
}
console.log(annualGrossIncome.toFixed(2))
