// 4 . Write a JavaScript program where the program takes a random integer 
// between 1 and 10, and the user is then prompted to input a guess 
// number. The program displays a message "Good Work" if the input 
// matches the guess number otherwise "Not matched".

let guess_num = Math.round(Math.random()*10)
let user_pro = +prompt("Guess Number: ")
if(guess_num == user_pro){
    console.log("Good Work")
}else{
    console.log("Not matched")
}
