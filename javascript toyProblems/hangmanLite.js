let word = 'hangman'
let letter = /[a]/gi

//word.match(include)
console.log(` :${word.match(letter)} `);
if(word.match(letter)){
    letter = word.match(letter)
    let times = letter.length
    console.log('Yeah, the letter '+letter+' exists '+times+' times in my word')

}else{
    console.log('Nope, that letter doesn\'t exist in my word.')

 }
// let str = 'you are awesome'
// let exp = /[y,o,b,d]/gi
// let match = str.match(exp)
// console.log(match.length);


