let word = 'hangman'
let include = /[h,a]/gi
let letter
letter = word.match(include)
console.log(letter);
if(letter.includes(...word)){
    let times = letter.length
    console.log('Yeah, the letter '+letter+' exists '+times+' times in my word')

}else{
    console.log('Nope, that letter doesn\'t exist in my word.')

}
// let str = 'you smell really bad'
// let exp = /[y,o,b,d]/gi
// let match = str.match(exp)
// console.log(match.length);