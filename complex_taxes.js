let payRate = 22.42
let hoursWorked = 58
let regularPay = payRate * (40)
let overtimePay = payRate * ((hoursWorked - 40)*1.5)
let annualGrossPay = regularPay + overtimePay
let filingStatus = 'Joint'
annualGrossPay = annualGrossPay * 52
console.log(annualGrossPay.toFixed(2))

if (filingStatus == 'Single'){
    if(annualGrossPay < 12000){
        taxWithholdings = annualGrossPay * (5/100)
        annualGrossPay = annualGrossPay - taxWithholdings
    } else if(annualGrossPay >= 12000 && annualGrossPay < 25000){
    taxWithholdings = annualGrossPay * (10/100)
    annualGrossPay = annualGrossPay - taxWithholdings
} else if(annualGrossPay >= 25000 && annualGrossPay <75000){
    taxWithholdings = annualGrossPay * (15/100)//(1.00-0.15)
    annualGrossPay = annualGrossPay - taxWithholdings
} else{
    taxWithholdings = annualGrossPay * (20/100) //(1.00-(20/100))
    annualGrossPay = annualGrossPay - taxWithholdings
}
} else //Joint status 
{
    if(annualGrossPay < 12000){
        // annualGrossPay = annualGrossPay * (1.00-0.00)
        taxWithholdings = annualGrossPay * (0.00)
        annualGrossPay = annualGrossPay - taxWithholdings

    } else if(annualGrossPay >= 12000 && annualGrossPay < 25000){
       
        taxWithholdings = annualGrossPay * (0.06)
        annualGrossPay = annualGrossPay - taxWithholdings

} else if(annualGrossPay >= 25000 && annualGrossPay <75000){
    taxWithholdings = annualGrossPay * (0.11)

    annualGrossPay = annualGrossPay - taxWithholdings

} else{
    taxWithholdings = annualGrossPay * (20/100) //(1.00-(20/100))
    annualGrossPay = annualGrossPay - taxWithholdings
}
}

console.log(`You worked:${hoursWorked} hours this period.`)
console.log(`Because you earn ${payRate} per hour, your gross pay is $${annualGrossPay.toFixed(2)}`)
console.log(`Your filing status is ${filingStatus}`)
console.log(`Your tax withholdings this period is $${taxWithholdings.toFixed(2)}`)

console.log(`Your net pay is $${annualGrossPay.toFixed(2)}`)

