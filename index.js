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
window.onload = build;
let computer;
let offices = 6;;
let timer;
let sCom;
let score = 0;
let cOff = true;

function build(){
    let html = "<h1>Hit the computer</h1>";
    for(let x = 0; x < offices; x++){
        html+='<div class="office"><div class="desk"></div><div class="computer"></div></div>';
    }
document.querySelector(".gameboard").innerHTML = html;
computer = document.querySelectorAll('.computer');
for(let x=0; x<computer.length; x++){
    computer[x].addEventListener('click', hitcomputer, false)
}
}

function popup(){
    cOff= true;
    sCom = computer[Math.floor(Math.random()*computer.length)];
    console.log(sCom)
    sCom.classList.add('popup');
    let rTime = (Math.floor(Math.random()*10)*100)+500;
    timer = setTimeout(hidecomputer, rTime);
}
function hidecomputer(){
    sCom.classList.remove('popup');
    popup();
}

function hitcomputer(){
    event.target.classList.remove('popup');
    if(cOff){
        cOff = false;
        score++;
        document.querySelector('.score').innerHTML = score;
    }
    popup();
}

function start(){
    popup()
}