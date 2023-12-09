// let output = document.getElementById("output");
// let val = document.getElementById("val");
// val.value = output.innerHTML;

// let userName = prompt("What is your name?");
// let output = document.getElementById("output");
// output.innerHTML = `Welcome to my page, ${userName}`;

// let output = document.getElementById("output");
// let login = false;
// let outputHolder = '';
// let userOkay = login == true ? outputHolder = "true" : outputHolder="false"
// output.innerHTML = userOkay;

// let userNames = ["mike", "john", "larry"];
// let userInput = prompt("WEhat is your name?");
// let output = document.getElementById("output");
// let htmlOutput = ""
// if(userNames.indexOf(userInput) > -1) {
//     alert("hello");
//     htmlOutput = "welcome, you are accepted";
//     let age = prompt("age");
//     htmlOutput += age > 18 ? "You are over 18" : "You are under 18"
// } else {
//     htmlOutput = "denied was not true"
// }
// output.innerHTML = htmlOutput + ','+ userInput;

// output.innerHTML = checkUser ? "welcome": "denied";
// output.innerHTML += ","+ userInput;

// console.log(checkUser)
// let myTime = prompt("What time is it?")
// let output = document.getElementById("output");

// if(myTime >= 8 && myTime < 12){
//     output.innerHTML = "Wake up it is morning"
// } else if (myTime > 12 & myTime < 13){
//     output.innerHTML = "go to lunch"
// } else if  (myTime >= 13 & myTime <= 16){
//     output.innerHTML = "Go to work."
// } else if  (myTime >16 & myTime < 20){
//     output.innerHTML = "Dinner Time"
// } else if  (myTime >= 22){
//     output.innerHTML = "Time to go to sleep"
// } else {
//     output.innerHTML = "You should be sleeping!"
// }
// let output = document.getElementById("output");
// let answer = prompt("how many loops do you want?")
// var x = 0;
// do {
//     x++;
//     output.innerHTML +=  "value x ="+x+"<br>";
// }
// while(x < answer)
// let secret = "javascript";
// let crackCode = prompt("What is secret word")
// while(crackCode!= secret){
//     crackCode = prompt("guess again?")
// };
// output.innerHTML += "Final output";

// let output = document.getElementById("output");
// let carloriesBanana = 89;
// let bananas = prompt("How may bananas do you want?");
// let total = 0;
// let holder;

// for(let x= 1; x<= bananas; x++){
//     total += carloriesBanana;
//     holder = x> 1? "banana another": "banana";
//     output.innerHTML += "You ate "+x+" "+holder+" "+carloriesBanana+" carolies added to your total now at "+ total+"<br>";
// }
// output.innerHTML += "Your total calories count is "+ total;

// let output = document.getElementById("output");
// let html = "<table>";
// for(let row=0; row<10; row++){
//     html +="<tr>";
//     for(let col=0; col< 5; col++){
//         html +="<td>Cell="+((col+1)+(row*5))+"</td>";
//     }
//     html +="</tr>"
// }
// html +="</table>";
// output.innerHTML = html;

// let output = document.getElementById("output");
// let total = 0;
// for(let x=0; x < 1000; x++){
//     if(x % 8 === 0){
//         total+=x;
//         output.innerHTML += "value of x = "+x+" SubTotal = "+total+"<br>";
//     }
// }
// output.innerHTML += "Total= "+total;

// let output = document.getElementById("output");
// let userNames = ["mike", "john", "larry"];

// for(let x= 0;x < userNames.length; x++){
//     output.innerHTML +=userNames[x] + "<br>";
// }

// let x = 0;
// while(userNames[x]){
//     output.innerHTML += userNames[x] + "<br>";
//     x++;
// }
// for(value of userNames){
//     output.innerHTML += value + "<br>"
// }

// let output = document.getElementById("output");

// let userNames = {a: "Mike", b: "John", c: "Larry"};

// for(let x in userNames){
//     output.innerHTML += x + "=" + userNames[x] + "<br>"
// }

// let output = document.getElementById("output");
// let addItem;

// let shoppingList = [];
// let howManyTimes = prompt("How many items would you like to add?");
// for(let x=0; x < howManyTimes; x++){
//     addItem = prompt("What do you want to add?");
//     if(addItem == "no"){
//         break;
//     }
//     shoppingList.push(addItem);
// }

// for (myItem of shoppingList){
//     output.innerHTML += myItem + "<br>";
// }


// FUNCTION 


// let output = document.getElementById("output");
// myFunction()
// myFunction()
// myFunction()

// function myFunction(){
//     output.innerHTML += "hello <br>";
// }
// myFun1(2, 3, 4)
// function myFun1(a, b, c){
//     let response = a + b + c;
//     output.innerHTML = response
//     return response;
// }

// let a = "hello";
// output.innerHTML = myFun2();

// function myFun2(){
//     let b = a + ' ' + "world";
//     return b;
// }
// let adj = ["super", "wonderful", "bad", "angry", "careful"]
// let output = document.getElementById("output");

// function myFun(){
//     let question = prompt("what is your name?");
//     let nameAdj = Math.floor(Math.random()*adj.length);
//     output.innerHTML += adj[nameAdj] + " " + question + "<br>";
// }

let output = document.getElementById("output");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

function addBtn(){
    let a = num1.value + " + " + num2.value;
    let b =  Number(num1.value) +  Number(num2.value);
    outHTML(a, b)
}

function subBtn(){
    let a = num1.value + " - " + num2.value;
    let b =  Number(num1.value) -  Number(num2.value);
    outHTML(a, b)
}
function mulBtn(){
    let a = num1.value + " X " + num2.value;
    let b =  Number(num1.value) *  Number(num2.value);
    outHTML(a, b)
}
function divBtn(){
    let a = num1.value + " / " + num2.value;
    let b =  Number(num1.value) / Number(num2.value);
    outHTML(a, b)
}

function outHTML(a, b){
    output.innerHTML += a +  " = " + b + "<br>";
}
