let payRate = 22.42
let hoursWorked = 58

if (hoursWorked>40){
let overtimePay = payRate * 1.5;
let overtimeHours = hoursWorked - 40;
let totalPay = (overtimePay * overtimeHours) + 40 * payRate
console.log('Worker worked: '+hoursWorked+' hours therefore worker earned: $'+ totalPay.toFixed(2))
} else{
    totalPay = hoursWorked *payRate
    console.log('Worker worked: '+hoursWorked+' hours therefore worker earned: $'+ totalPay.toFixed(2))
}
