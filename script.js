//1

let user = prompt("Your name: ", '')
let age = prompt("Your age: ", '')

//console.log(typeof(age))
//console.log(user, " ", age)

if(user != null || age != null )
{
    if((user[0] == 'A' || user[0] == 'a') && age >= 18){
        console.log("Welcome!")
    }
    else{
        console.log("Bye!")
    }
}
else{
    console.log("Empty!")
} 


//2
let username = prompt("Enter your name: ", '')
if(username != null){
    if((username.length % 2) == 0)
        console.log("Good!")
    else
        console.log("Bad!")
}
else
console.log("Empty!")


//3
let num = prompt("Enter your number: ", 0)
if(num != null)
    if((num % 2) == 0)
        console.log("Even!")
    else
        console.log("Odd!")
else
    console.log("Empty!")


//4
let a = prompt("First", 0)
let method = prompt("Method(+ - / *)",'')
let b = prompt("Second", 0)
if((a == null) || (method == null) || (b ==null))
    console.log("Empty!")                   
else 
    switch(method)
    {   
        case '+':
            console.log(a+b)
            break
        case '-':
            console.log(a-b)
            break
        case '*':
            console.log(a*b)
            break
        case '/':
            console.log(a/b)
            break
    }