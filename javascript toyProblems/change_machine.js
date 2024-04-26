let amount = 55
// let change = [1,5,10,20]
let one = 0
let five = 0
let ten = 0
let twenty = 0
let remainderForTwenty = amount % 20

twenty = Math.floor(amount / 20)
amount = remainderForTwenty
let remainderForTen = amount % 10
ten = Math.floor(amount/10)
amount = remainderForTen
let remainderForFive = amount % 5
five = Math.floor(amount/5)
amount = remainderForFive
let remainderForOne = amount % 1
one = Math.floor(amount/1)
amount = remainderForOne

console.log(['Number of Twenty bills: '+twenty, 'Number of Ten dollar bills:'+ten, 'Number of Five dollar bills:'+five, 'Number of One dollar bills:'+one])

// want the machine to return the smallest number of bills possible
//after code runs a new array formated [twenties, tens, fives, ones] ex [2,0,1,2](two twenties, 0 tens, 1 five, 2 ones)