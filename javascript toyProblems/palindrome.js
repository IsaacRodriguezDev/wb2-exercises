let word = 'level'
let splitString = word.split('')
console.log(splitString)
let reversingWord = splitString.reverse()
console.log(reversingWord)
let reversedWord = reversingWord.join('')
console.log(reversedWord)
if (word === reversedWord){
    console.log('true')

} else{
    console.log(false)
}
