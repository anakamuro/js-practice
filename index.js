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

// let output = document.getElementById("output");
// let num1 = document.getElementById("num1");
// let num2 = document.getElementById("num2");

// function addBtn(){
//     let a = num1.value + " + " + num2.value;
//     let b =  Number(num1.value) +  Number(num2.value);
//     outHTML(a, b)
// }

// function subBtn(){
//     let a = num1.value + " - " + num2.value;
//     let b =  Number(num1.value) -  Number(num2.value);
//     outHTML(a, b)
// }
// function mulBtn(){
//     let a = num1.value + " X " + num2.value;
//     let b =  Number(num1.value) *  Number(num2.value);
//     outHTML(a, b)
// }
// function divBtn(){
//     let a = num1.value + " / " + num2.value;
//     let b =  Number(num1.value) / Number(num2.value);
//     outHTML(a, b)
// }

// function outHTML(a, b){
//     output.innerHTML += a +  " = " + b + "<br>";
// }

// let output = document.getElementById("output");
// let a = myFun();
// let b = myFun2();
// function myFun(para){

// if(typeof para==="undefined"){
//     para = "Hello World";
// }
// output.innerHTML += para;
// return para;
// }

// function myFun2(para1 = "Hello Earth"){

// output.innerHTML += para1;
// return para1;
// }

// let cCode = [];
// let count = 0;
// let output = document.getElementById("output");
// let c1 = document.getElementById("code1");
// let c2 = document.getElementById("code2");
// let c3 = document.getElementById("code3");

// for(let x= 0; x < 3; x++){
//     cCode.push(Math.floor(Math.random() * 9));
// }
// output.innerHTML = cCode;

// function crack(){
//     count = 0;
//     let guess = [c1.value, c2.value, c3.value];
//     for(let x=0; x < cCode.length; x++){
//         output.innerHTML += checkNum(guess[x], cCode[x]);
//     }
//     if(count == 3){
//         output.innerHTML += " You Guessed it<br>";
//     } else {
//         output.innerHTML += "<br>";
//     }
// }

// function checkNum(a, b){
//     if(a>b){
//         return "L";
//     } 
//     if (a< b){
//         return "H"
//     } 
//      if (a==b){
//         count++;
//         return a;
//     }
// }
// let a = "World";
// let output = document.getElementById("output");
// // let a = function(b){
// //     output.innerHTML = "Welcome to an anonymous function" + b;
// // }
// // a(" test")

// (function(){
//   let a = " Hello";
//   output.innerHTML = a;
// })()
// output.innerHTML += a;

// let secretWord = ["HTML", "Javascript", "Python", "React"];
// let mysteryNum;
// 


// function start(){
//     mysteryNum = Math.floor(Math.random()* secretWord.length)
//     getSecret(prompt("what is the world?"))
// }

// function getSecret(secret){
//     if(secret == secretWord[mysteryNum]){
//         output.innerHTML = "You are correct"
//     } else {
//         getSecret(prompt("Guess Again?"))
//     }
// }

// let secretWord = ["HTML", "Javascript", "Python", "React"];
// let output = document.getElementById("output");
// function start (){
//     shuffleArray(secretWord);
//     output.innerHTML += secretWord + '<br>';
// }
// function shuffleArray (arr){
//     for (let x = arr.length -1; x > 0;
//         x--){
//             let holder = Math.floor(Math.random()*(x+1));
//             let temp = arr[x];
//             arr[x] = arr[holder];
//             arr[holder] = temp;
//         }
//   return arr;

// }

// let outsideFun = "outside";

// function myFun(){
//     let insideFun = "inside";
//     console.log(outsideFun)
//     console.log(insideFun)
// }

// myFun();
// console.log(outsideFun);
// console.log(insideFun)

// let output = document.getElementById("output");
// let myArray=["hello", "world", 23454, 23454, 3322, "hello"];
// let myArrayClean = removeDup(myArray);
// output.innerHTML = myArray + '<br>' + myArrayClean;

// function removeDup(arr){
//     let cArray = [];
//     let cObject = {};
//     let z = "";
//     for(let x=0; x< arr.length; x++){
//         cObject[arr[x]] = "Whatever"
//     }
//     console.log(cObject);
//     for(z in cObject){
//         cArray.push(z);
//     }
//     return cArray;
// }

// let output = document.getElementById("output");
// let a = 1000;

// function outsideFun(){
//     let b = 2000;

// }
// let array = ["fd", "apple", "orange", "orange juice"]

// let output = document.getElementById("output");

// function addItem(){
//     let item = document.getElementById("item");
//     array.push(item.value)
//     output.innerHTML = array;
// }

// let shoppingList = [];

// function addItem(){
//     let addItem = document.getElementById('item').value;
//     shoppingList.push(addItem);
//     function outputList(){
//         let html = '';
//         let output = document.getElementById("output");
//         for( let x=0; x < shoppingList.length; x++){
//             html += (x + 1) + " " + shoppingList[x] + "<br>";
//         }
//         output.innerHTML = html;
//     }
//     outputList();
// }

// let output = document.getElementById("output");

// function makeMessage(s1, s2, callback){
//     let result1 = callback(s1, s2);
//     output.innerHTML += result1;
// }

// makeMessage("hello", "world", function(s1, s2){
//     let result2 = s1 + s2 + "worked";
//     return result2;
// })

// makeMessage("Java", "Script", function(s1, s2){
//     let result2 = s1 + s2 + " is great ";
//     return result2;
// })

// let output = document.getElementById("output");
// let num1 = document.getElementById("num1");
// let num2 = document.getElementById("num2");

// function addBtn(){
//     outC(num1.value, num2.value,"+", function(a, b){
//         return a + b;
//     })
// }

// function outC(a, b, s, cback){
//     let result = cback(Number(a), Number(b));
//     output.innerHTML += a + " " + s + " " + b + " = " + result + "<br>";
// }

// let suits = ["spades", "hearts", "clubs", "diamonds"]
// let cardFace = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
// let players = [];

// function startDeal(){
//     players = [];
//     let num = Number(document.getElementById("players").value);
//     for(let i=0; i < num; i++){
//         players[i] = [];
//     }
//     let cards = buildCards()
//     shuffleCards(cards);
//     console.log(cards)
//     deal(cards)
// }

// function buildCards(){
//     let cards = []
//     for(s in suits){
//         let bgColor = (suits[s] == "hearts" || suits[s] == "diamonds") ? "red": "black";
//         for(c in cardFace){
//             let card = {
//                 suit: suits[s], 
//                 num: cardFace[c],
//                 bgColor: bgColor
//             }
//             cards.push(card)
//         }
//     }
//     return cards;
// }
// let array = []
// function shuffleCards(array){
//     for(let x = array.length -1; x > 0; x--){
//         let ii = Math.floor(Math.random() * (x+1))
//         let temp = array[x];
//         array[x] = array[ii];
//         array[ii] = temp;
//     }
//     return array;
// }

// function deal(cards){
//     let num = players.length;
//     let output = document.getElementById("output");
//     let p = 0;
//     for(let i=0; i< cards.length; i++){
//         players[p].push(cards[i]);
//         p++;
//         if(p>=num){
//             p=0;
//         }
//         for(let i=0; i < num;i++){
//             output.innerHTML += "<br>Players:"+(i+1)+"<br>";
//             for(let x=0; x<players[i].length; x++){
//                 let p = players[i][x];
//                 output.innerHTML += "<span style=\"color:"+p.bgColor+"\">"+p.num+"&"+p.suit+"</span>";
//             }
//             output.innerHTML +="<br>"
//         }
//     }
// }

// let output = document.getElementById("output");

// function goBack(){
//     window.goBack(-1);
// }

// let output = document.getElementById("wrapper");
// console.dir(window);

// for(var prop in window){
//     document.write(prop + "" + window[prop] + "<br>")
// }

// output.innerHTML += window.innerHeight + " " + window.innerWidth;
// output.innerHTML += window.location;

// let output = document.getElementById("wrapper");
// window.setTimeout(updateWrapper, 5000);

// let myTimer;
// function startInt(){
//     myPopup();
//     myTimer = window.setTimeout(myPopup, 1000)
// }
// function updateWrapper(){
//     document.getElementById('wrapper').innerHTML = "welcome to my website";
// }
// function clearInt(){
//     window.clearInterval(myTimer);
// }

// function myPopup(){
//     alert("hello")
// }

// let output = document.getElementById("wrapper");
// function goUrl(){
//     let url = document.getElementById("url").value;
//     window.location = url;
// }
// document.getElementById('id1').onclick = myFun;
// function myFun(){
//     // console.dir(t);
//     // output.innerHTML= t.value;
//     // t.value = "clicked";
//     this.value = "clicked"
//     output.innerHTML = "worked";
// }

// document.getElementById('id1').onclick = function(){
//     output.innerHTML = "clicked";
// }

// function myFun(){
//     output.innerHTML = "Welcome all loaded"
// }
// let imgHolder = "https://picsum.photos/200/300?grayscale";
// function clmg(t){
//     message(t.src);
//     imgHolder = t.src;
//     t.src="https://picsum.photos/seed/picsum/200/300"
// }

// function blmg(t){
//     t.src=imgHolder;
// }
// function cFun(){
//     let p = event.target.value;
//     message("change to " + p);
// }
// function sendInfo(){
//     let p = event.target.parentElement;
//     message("Welcome " + p.e1.value + " " + p.e2.value);
// }
// function message(m){
//     document.getElementById('wrapper').innerHTML = m;
// }

//     let imagePlace = 0;
//     let images = ["1", "2", "3", "4", "5", "6"];
//     let imagesC = ["111", "222", "FF0000", "00FF00", "0000FF", "000333"];


//   function startImg(){
//     myImage.src= "https://picsum.photos/seed/picsum/200/300/" + imagesC[imagePlace] + "/fff?text=Image" + images[imagePlace];
//     setInterval(swapImage, 1000);
//   }

//   function swapImage(){
//     imagePlace++;
//     if(imagePlace >= images.length){
//         imagePlace = 0;
//     }
//     let myImage = document.getElementById("myImage");
//     myImage.src = "https://picsum.photos/seed/picsum/200/300/" + imagesC[imagePlace] + "/fff?text=Image" + images[imagePlace]
//   }

// function numCheck(){
//     message(!isNaN(event.key));
//     return !isNaN(event.key);
// }

// function numCheck2(){
//     message(isNaN(event.key));
//     return isNaN(event.key);
// }

// function message(m){
//     document.getElementById("wrapper").innerHTML = m;
// }

// function valForm(){
//     let p = event.target.children;
//     if(p.firstName.value == ""){
//         message("Needs a first Name!")
//        return false;
//     }
//     if(p.lastName.value == ""){
//         message("Needs a last Name!")
//        return false;
//     }
//     if(p.age.value == ""){
//         message("Needs a Age!")
//        return false;
//     }
//     console.log(p.firstName)
//     return true;
// }
// let holderItem;
// function dStart() {
//     message("drag started");
//     holderItem = event.target;
// }

// function message(m){
//         document.getElementById("wrapper").innerHTML = m;
//     }

// function nDrop(){
//     event.preventDefault();
// }

// function dDrop(){
//     event.preventDefault();
//     message("Drop it");
//     if(event.target.className == "box"){
//         event.target.appendChild(holderItem);
//     }
// }

// let myArray = [];
// let people = ["Bob", "John", "Mike", "Larry", "Kim", "Jane", "Lisa", "Tom"];
// let key;

// function start(){
//     myArray = people.slice();
//     myArray.sort(function(a, b){
//         return 0.5 - Math.random();
//     })
//     console.log(myArray);
//     build();
// }

// function build(){
//     let html = "<h1>Nmae Game</h1>";
//     for(let x=0; x < myArray.length; x++){
//         let str = myArray[x];
//         let shuffled = str.split("").sort(function(){
//             return 0.5 - Math.random()
//         }).join("");
//         html+= '<div class="box" 
//         onmouseover="uText(this,\''+shffled+'\')" 
//         onmouseout="uText(this.\'Hidden'+(x+1}+'\')"
//         >Hidden'+(x+1)+'<br>'+shuffled+'</div>'

   
//     }
//     document.getElementById("output").innerHTML = html;
// }

// 

// let elClass = document.getElementsByClassName("output");
// let highClass = document.getElementsByClassName("highlight");
// let message = document.getElementById("message");
// let message1 = document.getElementById("message1");
// let el = document.querySelectorAll('div .output');


// function mySel(){
//     let a = document.getElementById("queryStuff").value;
//     let el = qs(a);
//     let html = "Results<br>";
//     for(let x=0; x<el.length;x++){
//      html += el[x].innerText + "<br>";
//     }
//     document.getElementById("message").innerHTML = html;
// }
// for (let x=0;x<el.length;x++){
//     el[x].innerHTML = "It worked"
// }

// function qs(el){
//     return document.querySelectorAll(el)
// }
// for(let x=0; x < elClass.length;x++){
//     elClass[x].onclick = function(){
//         message.innerHTML = event.target.innerHTML;
//     }
// }

// for(let x=0; x < highClass.length;x++){
//     highClass[x].onclick = function(){
//         message1.innerHTML = "Clicked highlighted";
//     }
// }
// let bgColor = ["red", "blue", "green", "pink", "purple"];
// let message = document.getElementById("message");
// let c;
// let el = document.querySelectorAll('.output');

// function start(){
//     setInterval(swapBg, 2000);
// }

// function swapBg(){
//     for(let x=0; x <el.length; x++){
//         c = bgColor[Math.floor(Math.random()*bgColor.length)]
//         el[x].style.backgroundColor = c;
//     }
// }

// document.getElementById('oLay').onclick = function(){
//     let el = document.getElementById('overlay');
//     el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
// }

// let el = document.querySelectorAll('.myClass');

// for(let x = 0; x < el.length; x++){
//     el[x].onclick = function(){
//         upClass(el, 'active', 'remove')
//       if(!this.classList.contains('active')){
//         this.classList.add('active');
//       }
//     }
// }

// function upClass(e, c, a){
//     for(let x= 0; x<e.length; x++){
//         e[x].classList[a](c);
//     }
// }

// let aTitle = document.querySelectorAll('.acc');
// let c = document.querySelectorAll('.con');


// for(let x=0; x< aTitle.length; x++){
//     aTitle[x].onclick = function(){
//         cCon(this.nextElementSibling)
//         this.nextElementSibling.classList.toggle('active');
//     }
// }

// function cCon(t){
//     for(let x=0; x< cCon.length; x++){
//         if(t!=c[x]){
//             c[x].classList.remove('active');
//         }
//     }
// }
// window.onload = build;
// let myArray = ["Laurence", "Mike", "John", "Larry", "Kim"];
// let message = document.getElementById('message')
// let el = document.getElementById('message');
// let addNew =  document.getElementById('addNew');

// addNew.onclick = function(){
//     let q = document.getElementById('addFriend').value;

//     let tr = document.createElement('tr');
//     tr.setAttribute("data-row", myArray.length);
//     tr.setAttribute('data-vote', 0);
//     tr.innerHTML = '<td class="box">'+(myArray.length+1)+'</td><td>'+q+'</td><td>0</td>'
    // let td = document.createElement('td');
    // tr.appendChild(td);
    // td.appendChild(document.createTextNode(myArray.length + 1));
    // td = document.createElement("td");
    // tr.appendChild(td);
    // td.appendChild(document.createTextNode(q));
    // td = document.createElement("td");
    // tr.appendChild(td);
    // td.appendChild(document.createTextNode(0));
//     let container = document.querySelector("#output table tbody");
    
//     container.appendChild(tr);
//     myArray.push(q);
//     voteCount();
// }
// function build(){
//     let html = "<h1>My Friends Table</h1><table>";
// for(let x=0;x<myArray.length;x++){
//     html+= '<tr data-row="'+ x +'" data-vote="0"><td class="box">'+(x+1)+'</td><td>'+myArray[x]+'</td><td>0</td></tr>';
// }
// html+='</table>';
// document.getElementById('output').innerHTML = html;
// voteCount();

// }

// function voteCount(){
//     let elbox = document.querySelectorAll("#output .box");
// let a;
// for(x=0;x<elbox.length;x++){
//     elbox[x].onclick= function(){
//         // a = this.parentElement.getAttribute('data-row')
//         a = this.closest('[data-row]').getAttribute('data-row');
//         message.innerHTML = myArray[a] + " is on row #" + a;
//         v = this.closest('[data-vote]').getAttribute('data-vote');
//         v++;
//         this.parentElement.lastElementChild.innerText = v;
//         this.parentElement.setAttribute("data-vote", v)
//     }
// }
// }

// document.getElementById('addNew').onclick = function(){
//     addOne();
// }

// function addOne(){
//     let a = document.getElementById('addItem').value;
//     let li = document.createElement('li');
//     li.appendChild(document.createTextNode(a))
//     let sList = document.getElementById('sList');
//     sList.appendChild(li)

// }

// let i = document.getElementById('imgSwap');
// window.onload = function(){
//     i.src = imgHolder;
// }

// let imgHolder = "http://via.placeholder.com/350x150/ffff00/fff?text=Image10";
// let t;
// window.onload = function(){
//     i.src= imgHolder;
// }

// i.addEventListener('click', function(){
//     console.log(event);
//     message("clicked");
// })

// i.addEventListener('mouseover', function(){
//     t = this.src;
//     this.src = "http://via.placeholder.com/350x150/ff0000/fff?text=Image2";
//     message("over");
// })
// i.addEventListener('mouseout', function(){
//     this.src = t;
//     message("out");
// })

// i.onclick = function(){
//     message('clicked')
// }

// function message(m){
//            document.getElementById("wrapper").innerHTML = m;
//     }

// let ele = document.querySelector('.holder');
// ele.addEventListener('mouseover', function(){
//     this.classList.add('active')
// })
// ele.addEventListener('mouseout', function(){
//     this.classList.remove('active')
// })

// ele.addEventListener("mousemove", coordin);

// function coordin(){
//     let html = "X" + event.clientX + " |Y:"+event.clientY;
//     document.getElementById('output').innerHTML = html;
// }

// function bup() {
//     console.log(this.innerText);
// }

// let d = document.getElementsByTagName('div');
// for (let x = 0;x < d.length; x++) {
//  d[x].addEventListener('click', bup, false);
// }

// document.getElementById('myT').addEventListener('select', myFun);

// function myFun(){
//     let e = event.target;
//     let str = event.target.value;
//     let result = str.substring(e.selectionStart, e.selectionEnd);
//     document.getElementById('output').innerText = result;
// }

// let myArray = ["Laurence", "Mike", "John", "Larry", "Kim", "Joanne", "Lisa", "Janet", "Jane"];
// window.onload = build;
// document.getElementById('addNew').addEventListener('click', addN, false);

// function addN(){
//     let a = document.getElementById('addFriend').value;
//     myArray.push(a);
//     build();
// }

// function build(){
//     let html = "<h1>Click Table</h1><table>";
//     for (let x=0; x < myArray.length; x++){
//         html += '<tr id="id'+x+'" data-row="'+x+'"><td>' + myArray[x] + '</td><td><a href="#" data-action="delete">Del</a></td><td><a href="#" data-action="edit">Edit</a></td></tr>'
//     }
//     document.querySelector(".output").innerHTML = html;
//     let dad = document.querySelectorAll('[data-action="delete"]');
//     for(let x = 0;x < dad.length; x++){
//         dad[x].addEventListener('click', function(){
//             event.preventDefault();
//             let iValue = this.closest('[data-row]').getAttribute('data-row');
//             let r = myArray.splice(iValue, 1)
//             build();
//             console.log(r)
//         })
//     }
//     document.querySelector(".output").innerHTML = html;
//     let dae = document.querySelectorAll('[data-action="edit"]');
//     for(let x = 0;x < dae.length; x++){
//         dae[x].addEventListener('click', function(){
//             event.preventDefault();
//             let row = this.closest('[data-row]');
//             let rid = row.getAttribute('data-row')
//             row.style.backgroundColor = "Yellow";
//             let td = row.firstElementChild;
//             let input = document.createElement("input");
//             input.type = "text";
//             input.value = td.innerText;
//             td.innerHTML = '';
//             td.appendChild(input);
//             input.focus();
//             input.onblur = function(){
//                 td.removeChild(input);
//                 td.innerHTML = input.value;
//                 myArray[rid] = input.value;
//                 row.style.backgroundColor = "White";
//             }
//         })
//     }
// }
// let wn;
// function popup (){
//     let url = "index.html";
//     let opt = "top=100,left=500,width=400;height=400";
//     wn = window.open(url, "_blank", opt);
// }

// function popclose(){
//     wn.close();
// }

// let a = 400;
// let b = "Hello, World";
// let c = "http://www.google.com?id=1000&n=500";
// let d= "400";

// let e = encodeURIComponent(c);
// let f = encodeURIComponent(e);

// let str = message.innerText;
// let hello = b.substr(0, 6);
// c = str.toLowerCase().indexOf('javascript')
// let j = str.substr(c, 1) + str.toLowerCase().substr(c+1, 9);
// let jscript = j.substr(0, 4) + j.toUpperCase().substr(4, 1)+j.substr(5);
// message.innerText = hello + jscript;


// function checkGuess(){
//     let myString = document.getElementById('myString').value;
//     let myGuess = document.getElementById('guess').value;
//     if(myString.length == myGuess){
//         message.innerHTML = "Correct. it was " + myString.length;
//     } else {
//         message.innerHTML = "Wrong. it was " + myString.length;
//     }
// }

// let a = "world hello"
// let b = new String("Hello World");
// let message = document.getElementById('message');
// let holder = "JavaScript";

// function rHeading(){
//     let m = document.getElementById('myString').value;
//     let c = message.innerText;
//     c = c.replace(holder, m);
//     holder = m;
//     message.innerText = c;
// }

// let message = document.getElementById('message');
// let message1 = document.getElementById('message');
// let myArr = ["javascript", "Hello", "would", "course"];
// window.onload = sWord;
// let randomWord;

// function sWord(){
//     let w = myArr[Math.floor(Math.random()*myArr.length)];
//     randomWord = w;
//     w = w.toLowerCase();
//     let s = '';
//     let wLength = w.length;

//     for(let x = 0; x < wLength; x++){
//         let i = Math.floor(Math.random()*w.length);
//         s+=w[i];
//         w = w.substr(0,i) + w.substr(i+1);
//     }
//     message.innerHTML = "Guess this word " + s;
// }

// function rGuess(){
//     let guess = document.getElementById('myString').value;
//     if(guess.toLowerCase() == randomWord.toLowerCase()){
//         message1.innerHTML = "Correct";
//     } else {
//         message1.innerHTML = "Wrong it was "+randomWord;
//     }
//     sWord();
// }

// let d = new Date();
// let d = new Date("2010-01-10CDT13:00:55");
// let d = new Date("apr 10 2011")
// let t = d.getTime();
// d.setFullYear(2017);
// d.setDate(d.getDate()+100);
// d.setDate(25);
// d.setMonth(11);
// message.innerHTML += '<br>' + d+'<br>'+t;

// let cDate, eDate, s, m, h, d;

// function start(){
//     let tDate = event.target.valueAsDate;
//     message.innerHTML = tDate;
//     cDate = new Date();
//     eDate = new Date(tDate);

//     s = (eDate - cDate)/1000;
//     outputUpdate();
//     t = window.setTimeout(update, 1000);
// }

// function update(){
//     cDate = new Date();
//     s = (eDate - cDate)/1000;
//     outputUpdate()
//     t = window.setTimeout(update, 1000)
// }

// function outputUpdate(){
//     cDate = new Date();
//     let dur = eDate-cDate;
//     s = Math.floor((dur % (1000 * 60))/1000);
//     s = s < 10 ? "0" + s : s;
//     m = Math.floor((dur % (1000 * 60 * 60))/(1000*60));
//     m = m < 10 ? "0" + m : m;
//     h = Math.floor((dur % (1000 * 60 * 60 * 24))/(1000*60*60));
//     d = Math.floor(dur / (1000 * 60 * 60 * 24));
//     output.innerHTML = d + ":" + h + ":" + m + ":" + s;
// }

// let arr1 = [];
// let arr2 = [];
// let myT;
// let loop = 0;
// let output = document.getElementById('output');
// let message = document.getElementById('message');
// let guess = document.getElementById('guess');
// let gamePlay = false;

// function start(){
//     let colorArr = ["red", "green", "blue", "yellow"];
//     let html = "";
//     arr1 = [];
//     arr2 = [];
//     guess.innerHTML="";
//     gamePlay = true;
//     message.innerHTML = "Game started";
//     for (x=0; x< colorArr.length; x++){
//         html+= '<div class="'+colorArr[x]+'" style="background-color'+colorArr[x]+'" onclick="oGuess()">'+colorArr[x]+'<div>';
//     }
//     document.getElementById('cButtons').innerHTML = html;
//     for (x=0; x< 4; x++){
//         let r = colorArr[Math.floor(Math.random()*colorArr.length)];
//         arr1.push(r);
//     }
//     loop = 0;
//     myT = setTimeout(goWhite, 200);
// }
// function oGuess(){
//     if(gamePlay){
//    let g =  event.target.className ;
//    let d = document.createElement('div');
//    d.className = 'box';
//    d.style.backgroundColor = g;
//    d.dataset.v = arr2.length;
//    d.onclick = function(){
//     if(gamePlay){
//     let iRemove = event.target.getAttribute("data-v");
//     arr2.splice(iRemove, 1);
//     event.target.parentNode.removeChild(event.target);
//     console.log(iRemove);
//     }
//    }
//    guess.appendChild(d);
//    arr2.push(g);
//    if(arr2.length == arr1.length){
//     gamePlay = false
//     if(arr1.toString() == arr2.toString()){
//         message.innerText = "You were correct:)";
//     } else {
//         message.innerText = "You were wrong <br> Your guess "+arr2+ " <br>correct order was "+arr1;
//     }
//    }
// }
// }
// function goWhite(){
//     output.style.backgroundColor = "white";
//     myT = setTimeout(goColor, 200);
// }

// function goColor(){
//     output.style.backgroundColor = arr1[loop];
//     loop++;
//     if(loop >= arr1.length){
//         clearTimeout(myT)
//     }
//     myT = setTimeout(goWhite, 1000)

// }

// function testMe(){
//     let x = 500;
//     try {
//         if(x> 100){throw "Yes it is greater than 100"};
//         if(x< 100){throw "No it is less than 100"};
//     concole(x)
//     } catch(e){
//         document.getElementById('message').innerHTML = e.message;
//         console.dir(e);
//     }
// }
// window.onload = build;
// let computer;
// let offices = 6;;
// let timer;
// let sCom;
// let score = 0;
// let cOff = true;

// function build(){
//     let html = "<h1>Hit the computer</h1>";
//     for(let x = 0; x < offices; x++){
//         html+='<div class="office"><div class="desk"></div><div class="computer"></div></div>';
//     }
// document.querySelector(".gameboard").innerHTML = html;
// computer = document.querySelectorAll('.computer');
// for(let x=0; x<computer.length; x++){
//     computer[x].addEventListener('click', hitcomputer, false)
// }
// }

// function popup(){
//     cOff= true;
//     sCom = computer[Math.floor(Math.random()*computer.length)];
//     console.log(sCom)
//     sCom.classList.add('popup');
//     let rTime = (Math.floor(Math.random()*10)*100)+500;
//     timer = setTimeout(hidecomputer, rTime);
// }
// function hidecomputer(){
//     sCom.classList.remove('popup');
//     popup();
// }

// function hitcomputer(){
//     event.target.classList.remove('popup');
//     if(cOff){
//         cOff = false;
//         score++;
//         document.querySelector('.score').innerHTML = score;
//     }
//     popup();
// }

// function start(){
//     popup()
// }

// let output = document.getElementById('output');
// let str = "sdaJavascriptvewlrewbcbricJavaScriptBEWPICUJjavascriptBCPJ25";

// function cEmail(e){
//     let p = /([a-zA-Z0-9.+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+)/ig;
//     let r = e.match(p);
//      return r == null ? false: true;
// }
// function cNum(e){
//     let p = /\D/;
//     let r = e.match(p);
//      return r == null ? false: true;

// }
// function cChar(){
//     let p = /[a-zA-Z]/ig;
//     let r = e.match(p);
//      return r == null ? true: false;
// }

// function myFun(){
//     let i = document.getElementsByTagName('input');
//   for(let x = 0; x < i.length;x++){
//     // console.log(i[x]);
//     if(i[x].id == ""){
//      console.log("No Value in  "+i[x].id);
//     }
//     if(i[x].type == "text"){
//         if(i[x].id == "email"){
//             if(cEmail(i[x].value)){
//             console.log('email valid')
//             } else {
//                 console.log('Bad email')
//             }
//         } 
//         if(i[x].id == "num"){
//             if(cEmail(i[x].value)){
//             console.log('num only valid')
//             } else {
//                 console.log('non num is the string')
//             }

//         } 
//         if(i[x].id == "cha"){
//             if(cEmail(i[x].value)){
//             console.log('char only valid')
//             } else {
//                 console.log('non char is the string')
//             }

//         } 
//     }
//   }
// }


// function myEmail(e){
//     let p = /([a-zA-Z0-9.+-]+_@[a-zA-Z0-9._-]+\.[a-zA-Z]+)/ig;
//     let r = e.match(p);
//      return r == null ? false: true;
// }

// 

// function lookUp(){
//     let s = document.getElementById('output').innerText;
//     let st = document.getElementById('sText').value;
//     let rt = document.getElementById('rText').value;
//     let re = new RegExp(st,"gi");
    
//     let result = s.match(re);
//     if(result){
//         let rr = s.replace(re, rt);
//         document.getElementById('output').innerText = rr;
//     }
//     console.log(result);
// }

// function lookUp(){
//    let rawTxt = document.myForm.txtarea.value;
//    let eData = rawTxt.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
//    console.log(eData)
//    let html = "";
//    let holder = [];
// //    document.myForm.txtarea2.value = eData.toString();
// for(let x =0; x < eData.length; x++){
//     if(holder.indexOf(eData[x]) == -1){
//         holder.push(eData[x])
//     }
// }
// document.myForm.txtarea2.value = holder.join("|");
// }

// function lookUp(){
//    let rawTxt = document.myForm.txtarea.value;
//    let p = new RegExp("Java");
//    let result1 = p.test(rawTxt);
//    let result2 = p.exec(rawTxt);
//    console.log(result1);
//    console.log(result2);
// }

// function cCookie(name, value, days){
//     let e = "";
//     if(days){
//         let d = new Date();
//         d.setTime(d.getTime() +(days*24*60*60*1000));
//         e= "; expires="+d.toUTCString();
//     }
//     document.cookie = name + "=" + value + e +";path=/";
// }

// function rCookie(name){
//     let p = name + "=";
//     let c = document.cookie.split(';');

//     for(let x=0; x < c.length; x++){
//     // let t = c[x].charAt[0] == ' ' ? c[x].substring(1) : c[x];
//     let t = c[x].trim();
//     // let t = c[x].replace(/^\s+|\s+$/gm,");
//     if(t.indexOf(p) == 0){
//         return t.substring(p.length, t.length);
//     }
//     }
//     return "";
// }

// function dCookie(name){
//     cCookie(name, "", -1);
// }
// let myCookie = rCookie('test');

// (function(){
//     let message = "Hello world";
//     document.getElementById('output').innerHTML = message;
// })();

// let myArr = ["Aki", "Bob", "John"];

// function showNames(){
//     console.log(arguments);
//     console.log(arguments[0]);
// }

// showNames(myArr, "JavaScr5cript")
// cUp();
// function cUp(){
//     let test = document.getElementById("test");
//     cNode(test);
// }

// function cNode(data){
//     for(let x=0; x < data.children.length;x++){
//         let c = data.children[x];
//         sNode(c);
//         cNode(c);
//     }
// }

// function sNode(data){
//     let bgColor = "#"+Math.random().toString(16).substr(-6);
//     console.log(bgColor);
//     data.style.backgroundColor = bgColor;
//     data.classList.add('box');
// }

// let playLockout = false;
// let gamePlay = false;
// let tileImages = [], tileArray = [], tfo = [];
// let cardFlipped = -1;
// let timer;
// let sb = document.getElementById('start');
// let message = document.getElementById('message');
// let score = document.getElementById('score');
// let gameboard = document.getElementById('gameboard');
// // let gameTile = document.querySelectorAll('.gameTile');



// sb.addEventListener('click', startGame);

// function startGame(){
//     sb.style.display  = "none";
//     // gameboard.style.height = "1000px"
//     // gameTile.style.height = "200px"
//     message.innerHTML = "its working" + gamePlay;
//     if(!gamePlay){
//         gamePlay = true;
//         buildArray();
//         tileArray = tileImages.concat(tileImages);
//         shuffleArray(tileArray);
//         buildboard();
//     }
// }

// function buildboard(){
//     let html = '';
//     let x = 0;
//     tileArray.forEach(function(ele){
//         x++;
//         html += '<div class="gameTile>';
//         html += '<img id="cardz'+'"src="http://via.placeholder.com/250/000000/ffffff?text=click" onclick="pickCard(' + (x-1) +',this)" class="flipImage"></div>';
//     })
//    gameboard.innerHTML = html;
// }

// function pickCard(i, t){
//     console.log(event.target);
//     if(!playLockout && !isinArray(t.id, tfo)){
//     if(cardFlipped >=0){
//         cardFlip(i, t);
//         playLockout = true;
//     if(checkSrc(tfo[tfo.length-1]) == checkSrc(tfo[tfo.length-2])){
//       message.innerHTML = "Match Found";
//       cardFlipped = -1;
//       playLockout = false;

//       if(tfo.length == tileArray.length){
//        gameover();
//       }
//     } else {
//         message.innerHTML = "No Match";
//         timer = setInterval(hideCard, 1000);
//     }
//     } else {
//        cardFlipped = i;
//         cardFlip(i, t);
//     }
// } else {
//     message.innerHTML = "Locked out";
// }
// }

// function gameover(){
//     message.innerHTML = "Game Over";
//     sb.style.display = "block";
//     gamePlay = false;
//     tfo = [];
//     tileImages = [];
//     gameboard.innerHTML = '';

// function isinArray(v, array){
//     return array, indexOf(v) > -1;
// }

// function hideCard(){
//     for(let x = 0; x< 2;x++){
//         let vid = tfo.pop();
//         document.getElementById(vid).src = "http://via.placeholder.com/250/000000/ffffff?text=click";
//     }
//  clearInterval(timer);
//  cardFlipped = -1;
//  playLockout = false;
//  message.innerHTML = "Select Again";
// }

// function checkSrc(a){
//     return document.getElementById(a).src
// }
// function cardFlip(i, t){
//     t.src= "http://via.placeholder.com/250/000000/ffffff?text=" + tileArray[i];
//     tfo.push(t.id);
// }
// function buildArray(){
//     for (let x = 0; x < 7; x++) {
//        tileImages.push(x + '.jpg');
//     }
// }
// function shuffleArray(array){
//     for ( x = array.length -1; x > 0; x--) {
//      let holder = Math.floor(Math.random()*(x+1));
//      let itemValue = array[x];
//      array[x] = array[holder];
//      array[holder] = itemValue
//     }
//     return array;
// }
// }

// let message = document.getElementById('message');
// if(window.FileReader){
//     message.innerHTML = "file reade is available"
// } else {
//     message.innerHTML = "file reade is NOT available"
// }

// function upFiles(files){
//     for(let x = 0; x < files.length; x++){
//         let fReader = new FileReader();
//         let fileName = files[x].name;
//         fReader.onload = function(e){
//             console.log(e.target.result);
//             console.log(e.target);
//             message.innerHTML += '<br>' + files[x].name;
//             message.innerHTML += '<br>' + e.target.result;
//         }
//         fReader.readAsText(files[x]);
//     }
// }

//AIzaSyClw67sMoTK970wBSjJAqrQVo-PUZ10Quc
// window.onload = init;
// let m = document.getElementById('map');

// function init(){
//    navigator.geolocation.getCurrentPosition(placeMap)
// }

// function placeMap(data){
//     let options = {
//         center: {
//             lat: data.coords.latitude, 
//             lng: data.coords.longitude
//         }
//         ,zoom: 5
//     }
//     let map = new google.maps.Map(m, options);
// console.dir(data);
// }

// let message = "Hello world";
// let myObj = {
//     "message": "Hello World", 
//     "count": 1, 
//     "secret": "Javascript"
// }
// let myStr = JSON.stringify(myObj);
// localStorage.setItem('mes', myStr);
// console.log(myStr);
// let myObj2 = JSON.parse(myStr);
// console.log(myObj2);


// if(localStorage.getItem('mes')){
// let myObj2 = JSON.parse(localStorage.getItem('mes'));
//     document.getElementById('output').innerHTML = myObj2.message + '<br>' + myObj2.count + '<br>' + myObj2.secret;
//     myObj2.count = Number(myObj2.count) + 1;
//     console.log(myObj2.count)
//     myObj = {
//         "message": "Updated", 
//         "count": myObj2.count, 
//         "secret": "Javascript 2"
//     };
//     myStr = JSON.stringify(myObj);
// } 
//     localStorage.setItem('mes', myStr);


// if(localStorage.getItem('count')){
//     let cnt = Number(localStorage.getItem('count')) + 1;
//     localStorage.setItem('count', cnt);
//     document.getElementById('output').innerHTML += cnt;
// } else {
//     localStorage.setItem('count', 0);
// }

// html += '<div class="item"><h3>'+v.name+'</h3><img src="http://via.placeholder.com/350X150" class="img-fluid><div>'+v.details+'<a href="#" class="productItem" data-name="'+v.name+'" data-s="'+v.details+'" data-price="'+v.cost+'" data-id="'+x+'">Add to Cart</a></div></div>';

// 

// let canvas = document.getElementById('canvas1');
// let ctx = canvas[0].getContext('2d');
// canvas.width = 400;
// canvas.height = 600;
// ctx.fillStyle = "red";
// ctx.fillRect(20, 30, 100, 120)
// data = [
//     {
//     "name": "John",
//     "guests": 3,
//     "status": true
//    },
//     {
//     "name": "Mike",
//     "guests": 5,
//     "status": false
//    },
//     {
//     "name": "Jrnny",
//     "guests": 2,
//     "status": false
//    }
// ]

// let party = JSON.parse(data);

// const friend = {firstName : "Larry", lastName: "Aki"}
// let myArr = [];
// for(let x = 0; x < 10; x++){
//     myArr.push(x);
// }
// console.log(myArr);

// let a = " Hello World.  "
// let a = "More Lines \n\
// More Lines.";
// let b = `More Lines
// More Lines
// More lines`;

// let name = "Aki";

// let message = `${name} was here today`;
// function updateMessage(p){
//     let message = `${p} was here today`
//     console.log(message);
//     return message;
// }

// console.log(updateMessage("Bob"));

// for (let i= 0; i < 10; i++){
//     let message = `${i} count now`
//     console.log(message);
// }

// function outputMessage(message = "No Value", b = show(message, "blank", "new")){
//     output.innerHTML = message;
// }

// function show(){
//     console.log(arguments[0]);
// }

// function myFun(a, b, c, d, e){
//     if(arguments.length == arguments.callee.length){
//         console.log("okay");
//     } else {
//         console.log("Missing " + (arguments.callee.length - arguments.length));
//     }
//     console.log(arguments);
//     console.log(arguments.length);
//     console.log(arguments.callee.length);
// }

// myFun(1, 2, 3, 4, 8);

// const output = document.getElementById('output');

// function myFun(a, b, ...c){
//     for(let i = 0; i < c.length; i++){
//         console.log(c[i]);
//     }
//     console.log(c);
//     console.log(c.length);
// }
// myFun(1, 2, 3, 4, 8);

// let testSet = Object.create(null);
// testSet.id = 1;
// testSet[10] = "Hello World";
// if(testSet.id){
//     console.log("its there")
// } else {
//     console.log("not there")
// }

// let testSet2 = new Set();
// testSet2.add("Hello, world");
// testSet2.add("Hello, world 1");
// testSet2.add("Hello, world");
// testSet2.add("Hello, world 3");
// testSet2.delete("Hello, world");
// console.log(testSet2)

// testSet2.forEach(function(value, key){
//     console.log(key + " " + value);
// })

// let myArr = [1, 4, 6, 3, 6, 3, 6, 644, 23, 32, 2, 3, 4, 5, 6, 7, 87, 43, 33, 4, 3, 2, 1];

// console.log(myArr);

// function removeDup(a){
//     return [new Set(a)];
// }
// console.log(testSet2);
// console.log(removeDup(myArr));

// let mapArray = myArr.map(function(a){
//     return a *=10;
// })

// console.log(mapArray);

// let myMap = new Map();
// myMap.set("Hello", "World");
// myMap.set("myName", "Laurence");
// myMap.set("Hello", "World");
// myMap.set("myName", "Laurence");
// // myMap.delete("Hello")
// console.log(myMap.size);
// console.log(myMap.get("Hello"))
// console.log(myMap)

// let items = [{
//     name: 'iPhone'
//     , details: 'White'
//     , cost: 50000
// }, {
//     name: 'iPad'
//     , details: 'White'
//     , cost: 80000
// }, {
//     name: 'Cable'
//     , details: '3 foot'
//     , cost: 1000
// }, {
//     name: 'Camera'
//     , details: '25MP'
//     , cost: 30000
// }, {
//     name: 'Laptop'
//     , details: 'Intel i7'
//     , cost: 120000
// }, {
//     name: 'LCD Monitor'
//     , details: '24 inch'
//     , cost: 20000
// }, {
//     name: 'TV'
//     , details: '50 inch'
//     , cost: 45000
// }];
// console.log(items);

// let holderNames = items.map(function(items){
//     return items.name;
// })
// console.log(holderNames);

// let holderCosts = items.map(items => items.cost)
// console.log(holderCosts);

// let myArr = [2, 5, 7, 51, 55]

// let a = myArr.find(x =>x > 50)

// console.log(a);

// let c = myArr.findIndex(x => x > 50);
// console.log(c);

// function makeArray(){
//     console.log(arguments);
//     return Array.from(arguments);
// }

// let d = makeArray("test1", "test2", "test3");
// console.log(d);
// console.log(d.findIndex(a => a == "test2"));

// let test = d.entries();
// console.log(test);

// console.log(test.next().value);
// console.log(test.next().value);
// console.log(test.next().value);

// let test1 = [...test];
// console.log(test1)

// let mySet = new Set(["test", "test2", "test3", "Javascript", "JS6", "hello", "world"])
// console.log(mySet);
// let myArr2 = Array.from(mySet);
// console.log(myArr2.copyWithin(4, 1));

// class MakeName{
//     constructor(first, last){
//         this.first = first;
//         this.last = last;
//     }
//     completeName(){
//         console.log(this);
//         console.log(this.first + " " + this.last);
//     }
// }

// let friend = new MakeName('Aki', "Nakamura");
// friend.completeName();


// function getData(url){
//     return new Promise(function(response){
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.onload = function(){
//         if(xhr.status == 200){
//             response(xhr.response)
//         }
//     }
//     xhr.send();
//     })
// }

// getData("https://api.myjson.com/bins/snnh5").then(function(response){
//     console.log(response)
// })

// document.forms.myForm.onchange = outputCal;

// function outputCal(){
//     function docld(){
//     let r = document.querySelector(arguments[0]);
//     r = (r.value == 'on') ? r.checked : Number(r.value);
//         return r;
//     }
//     let age = docld("#age");
//     let height = (docld('#heightFeet') * 12) + docld("#heightInches");
//     let weight = docld('#weight');
//     let lifeStyle = (docld('#lifeStyle') * 0.2) + 1;
//     let result = docld('#m') ? lifeStyle * (66 + (6.2 * weight) + (12.7 * height)-(6.76 * age)) : lifeStyle * (655.1 + (4.35 * weight + 4.7 * height)-(4.7 * age));
//     document.getElementById('output').innerHTML = Math.round(result) + " calories needed per day."
//     console.log(age);
// }

// const container = document.querySelector(".container");
// const startGame = document.querySelector(".startGame");
// const scoreArea = document.querySelector(".score");
// let player = {
//     score: 0
// }

// startGame.addEventListener("click", function(){
//     startGame.computedStyleMap.display = "none";
//     let ranTime = Math.random()*2000+ 1000;
//     setTimeout(makeItem, ranTime);
// })

// function makeItem(){
//     let boundary = container.getBoundingClientRect();
//     console.log(boundary);
//     let div = document.createElement("div");
//     div.style.position = "absolute";
//     div.style.left = Math.random() * boundary.width + "px";
//     div.style.top = Math.random() * boundary.height + "px";
//     div.style.width = Math.random() * 10 + 40 + "px";
//     div.style.height = Math.random() * 10 + 40 + "px";
//     div.style.cursor = "pointer";
//     div.style.borderRadius = "10%";
//     div.style.backgroundColor = "#" + Math.random().toString(16).substr(-6);
//     div.style.border = "1 px solid black";
//     div.startTime = Date.now();
//     div.addEventListener("click", function(){
//         let endTime = Date.now();
//         let diff = (endTime - div.startTime) /1000;
//         scoreArea.innerHTML = "Clicked in " + diff + "seconds";
//         // startGame.style.display = "block";
//         clearTimeout(div.timer);
//         container.removeChild(div)
//         makeItem();
//     })
//         div.timer = setTimeout(function(){
//             container.removeChild(div);
//             makeItem();
//         }, 1000);
//     container.appendChild(div);
//     console.log(div);

// }

// const btn = document.createElement('button');
// btn.innerHTML = "click me";
// document.body.prepend(btn);
// const btn1 = document.createElement('button');
// btn1.innerHTML = "download CSV";
// btn1.style.backgroundColor = "green";
// btn1.style.color = "white";
// btn1.style.padding = "10px"; 
// document.body.prepend(btn1);
// const arr1 = [1, 2, 3, 4];
// const arr2 = [[1, 2, 3], ['a', 'b', 'c'],['d', 'e', 'f'], ['g', 'h', 'i']];

// btn1.addEventListener('click', createCSV);

// function clean(){
//     let rep = "";
//     rep.forEach((cell, index) => {
//         cell = cell == null ? "" : cell.toString();
//         if(cell.search(/("|,|\n)/g) >= 0){
//         cell = '"' +   cell + '"'; 
//         }
//         if (index > 0){
//             rep+= ",";
//         }
//          rep += cell;
//     })
//     return rep;
// }

// function createCSV(data){
//     let file;
//     let holder = "";
//     let filename = "test.csv";
//     let properties = {
//         type: "text/csv;charset=utf-8;"
//     };
//     arr2.fortEach((item) => {
//         holder += clean(item) + "\n";
//     })
//     file = new File([holder], filename, properties);
//     let link = document.createElement('a');
//     let url = window.URL.createObjectURL(file);
//     link.setAttribute('href', url);
//     link.setAttribute('download', filename);
//     link.style.visibility = "hidden";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// }

// btn.addEventListener('click', () => [
//     arr2.forEach((first)=> {
//         console.log(first)
//         first.forEach((sec)=> {
//             console.log(sec);
//         })
//     })
// ])

// let myArr = [2, 45, 67, 98, 33, 123, 66];

// let val1 = myArr.find((x)=> {
//     return x > 50
// })

// console.log(val1)

// let val2 = myArr.map(x => {
//     if(x > 50) {
//         return x;
//     } else {
//         return 0;
//     }
// })

// console.log(val2);

// let val3 = myArr.filter(x => x > 50);
// console.log(val3);

// let val4 = myArr.find(x => x > 50);
// console.log(val4);

// let val5 = myArr.findIndex(x => x > 50);
// console.log(val5);

// console.log(myArr[val5])

// let val6 = makeArray('test1', 'test2', 'test3');
// console.log(val6)
// function makeArray(){
//     console.log(arguments);
//     return Array.from(arguments)
// }

// function output(callback, val){
//     callback(val)
// }

// function one(val){
//     console.log(`First ${val}`)
// }
// function two(val){
//     console.log(`Second ${val}`)
// }
// function three(val){
//     console.log(`Third ${val}`)
// }

// output(one, 'Dorchester');
// output(two, 'Newton');
// output(three, "Boston");

// const arr = [1, 2, 3, 4, 5];
// const str = "Dorchester";
// const obj = {first: "Aki", last: "Nakamura"};

// for(let val in obj){
//     console.log(val)
// }
// for(const val of arr){
//     console.log(val);
// }
// for(const letter of str){
//     console.log(letter);
// }

// ((...arguments)=>{
//     for(const val of arguments){
//         console.log(val);
//     }
// })(2, 8, 7)

// const btn = document.querySelector('button');
// const output = document.querySelector('.output');
// output.style.color= "black";

// btn.addEventListener('click', ()=> {
//     let counter = 10;
//     const countdown = setInterval(()=> {
//         counter--;
//         output.innerText = counter;
//         output.style.color= "red";
//         if(counter < 0){
//             output.style.color= "black";
//             output.innerText = "Blast Off!";
//             clearInterval(countdown);
//         }
//     }, 1000)
// })

// const nums = document.querySelector('#nums');
// const btn = document.querySelector('#btn');

// btn.onclick = () => {
//     const inputValue = nums.value;
//     const patt = /^[0-3]*$/g;
//     const results = inputValue.match(patt);
//     console.log(results);
//     const valNum = results != null;
//     console.log(valNum);
// }

// const output = document.querySelector('.output');
// const images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg'];
// for(let x = 0; x < 4; x++){
//  const el = document.createElement('div');
//  output.append(el);
//  cGallery(el);
// }
// const eles = document.querySelectorAll('.gal');
// eles.forEach(el => {
//     cGallery(el);
// })

// function cGallery(parentEl){
//     let curIndex = 0;
//     const gallery = document.createElement('div');
//     const curImage = document.createElement('img');
//     curImage.setAttribute('src', 'images/comp.jpg');
//     const btn1 = document.createElement('button');
//     btn1.textContent = "Prev";
//     const btn2 = document.createElement('button');
//     btn2.textContent = "Next"
//     parentEl.append(gallery);
//     gallery.append(curImage);
//     gallery.append(btn1);
//     gallery.append(btn2);

//     btn1.addEventListener('click', () => {
//         curIndex--;
//         if(curIndex < 0){
//             curIndex = images.length - 1;
//         }
//         console.log(images[curIndex]);
//         curImage.src= images[curIndex];
//     })
//     btn2.addEventListener('click', () => {
//         curIndex++;
//         if(curIndex >= images.length){
//             curIndex = 0;
//         }
//         console.log(images[curIndex]);
//         curImage.src= images[curIndex];
//     })
// }

// function myCount(){
//     let count = 0;
//     return function(){
//         return count++;
//     }
// }

// function myCount2(){
//     let count = 0;
//     return count++;
// }

// let cnt = myCount();
// let cnt2 = myCount2;

// for(let x=0; x < 10; x++){
//     console.log(cnt());
//     console.log(cnt2());
// }
// const output = document.querySelector('.output');
// function adder(val){
//     return function(val2){
//        return  val + val2;
//     }
// }

// let a1 = adder(10);
// console.log(a1(2))

// for(let x=0; x< 10; x++){
//     output.innerHTML += `<div>Output ${(a1(2 + x))}`
// }

// const val1 = 10;
// outerFun(x);

// function outerFun(x){
//     const val2 = 10;
//     function innerFun(){
//         return x + val2 + val1;
//     }
//     return innerFun;
// }

// const val3 = outerFun(15);
// console.log(val3())

// for(let x = 0; x < 10; x++){
//     console.log(outerFun(x +2)())
// }

// let a, b, c;
// const arr = [5, 10, 15, 20, 30];
// [a, b, c, ...arr1] = arr;
// console.log(arr1);

// let f, g, myObj;
// ({f, g, ...myObj} = {f:100, g:200, h:300, i:400, j:500});
// console.log(f, g);
// console.log(myObj)

// function fun(){
//     return [10, 20, 30, 40, 50]
// }

// let h, i, j;
// [h,, i,,j] = fun();
// console.log(h, i, j);
// const output = document.querySelector('.output');
// const jsonFile = 'datajson.json';
// window.addEventListener("DOMContentLoaded", getData);

// function getData(){
//     fetch(jsonFile)
//     .then(rep => rep.json())
//     .then(data => {
//         outputGen(data)
//     })
// }
// console.log(people)

// function outputGen(people){
// people.forEach((person)=> {
//     const {first, last, fav, id } = person;
//     const div = document.createElement('div');
//     div.innerHTML += `<div>First: ${first} Last: ${last} ID (${id}) Favorite thing to do ${fav}`
//     output.append(div)
// })
// }

// const arr = ["Aki", "Nakamura", 1000, 20, 300, true, 3223];
// const arr1 = arr.map(String);
// console.log(arr1)
// const myInput = document.querySelector('input');
// const btn = document.querySelector('button');
// const output = document.querySelector('.output')


// btn.addEventListener('click', (e)=> {
//     const val = myInput.value;
//     const result = arr1.includes(val);
//     output.textContent = result;
//     console.log(result)
// })
// let val = arr.includes("Aki");
// console.log(val)

// const arr = ["banana", "apple", "orange", "pear", "cherry"];
// const box2 = document.querySelector('.box2');

// box2.addEventListener('click', makeArray);

// function makeArray(){
//     arr.sort(()=> 0.5 - Math.random());
//     // arr.sort()
//     outputArray(arr);
// }

// function outputArray(a){
//     a.forEach((ele, index) => {
//         console.log(ele);
//         const div = document.createElement('div');
//         div.textContent = `${index} ${ele}`;
//         box2.append(div)
//     })
// }
// console.log(arr)
// const myArr = ["Aki", "Bob", "John"]
// const output = document.querySelector('.output');
// const btn = document.createElement('button');
// btn.textContent = "Add Person";
// output.append(btn);

// const myInput = document.createElement('input');
// myInput.setAttribute('type', 'text')
// output.prepend(myInput);

// const ul = document.createElement('ul');
// output.append(ul);
// build();

// btn.addEventListener('click', addPerson);

// function addPerson(){
//     const newPerson = myInput.value;
//     myArr.push(newPerson);
//     // output.append(myArr);
//     // output.innerHTML = "output"
//     adder(newPerson)
//     console.log(myArr)
// }

// function adder(person){
//     const li = document.createElement('li');
//     li.textContent = person;
//     ul.append(li);
// }

// function build(){
//     myArr.forEach(ele => {
//       adder(ele);
//     })
// }

const myArr = [
    {name: 'Laurence',
    score: 0, 
    id: 1 },
    {name: 'Susan"',
    score: 0, 
    id: 2 },
    {name: 'Lisa',
    score: 0, 
    id: 3 }
]
const output = document.querySelector('.output');
const btn = document.querySelector('#addNew');
const addFriend = document.querySelector('#addFriend');
const tblOutput = document.createElement('table');
output.append(tblOutput);
addFriend.value = "Dorchester";
build();

btn.addEventListener('click', ()=> {
    const myObj = {name: addFriend.value, score: 0, id: myArr.length+1}
    myArr.push(myObj);
    console.log(myArr);
    build()
})

function build(){
    tblOutput.innerHTML = "";
    myArr.forEach((ele, idx) => {
        const tr = document.createElement("tr");
        tblOutput.append(tr);

        const td1 = document.createElement("td");
        td1.textContent = ele.id;
        tr.append(td1);
        const td2 = document.createElement("td");
        td2.textContent = ele.name;
        tr.append(td2);
        const td3 = document.createElement("td");
        td3.textContent = ele.score;
        tr.append(td3);
        tr.addEventListener('click',()=> {
            ele.score++;
            td3.textContent = ele.score;
        })
    })

}