let currentHour = 10
let greeting = ''


if (currentHour <= 10){
greeting = 'Good Morning!'

} else if( currentHour < 17){
    greeting = "Good Afternoon!"
   
}else{
 greeting = 'Good Evening!'
}

console.log(greeting)