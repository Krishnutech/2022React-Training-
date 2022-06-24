let a=5;
let b=3;
if(a>b){
   document.getElementById("check").innerHTML="a is bigger";
}
else{
    document.getElementById("check").innerHTML="b is bigger";    
}

let value = " ";
for (let i = 0; i<=50; i++) {
  value += i +" " ;
}
document.getElementById("loop").innerHTML = value

let text = " ";
for (let i = 0; i<10; i++) {
  text += "welcome" +"<br>" ;
}
document.getElementById("print").innerHTML = text

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("day").innerHTML = "Today is " + day;

var java= "I am learning Javascript";
document.getElementById("length").innerHTML = java.length;

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("sort1").innerHTML = fruits;

fruits.sort();
document.getElementById("sort2").innerHTML = fruits;
  
let val="welcome to our learning program"
let res=text.includes("to")
if(res==true){
    val="'to' is not present in the string";
}
else
sub="'to' is not present in the string";
document.getElementById("value").innerHTML=val;

const s=[10, 40, 45, 60, 80, 100];
let Arr=" ";
for(let i=0;i<s.length;i++)
{
    if(s[i]>50)
    Arr += s[i]+" ";
}
document.getElementById("arr").innerHTML=Arr;

const cd = [5, 10, 15, 25];
const newArr = cd.map(da);
document.getElementById("af").innerHTML ="The value of C is: "+ newArr;
function da(num) {
   return num * 5;
}

const num1 = 15;
 const num2 = 20;
 const A = num1+num2;
 document.getElementById("number").innerHTML="value of A is: " + A;

 let myFunction = (num1, num2) => num1+num2;
 document.getElementById("arrow").innerHTML = myFunction(15,20);

 const d = new Date(2012, 3, 20 , 10, 10,0);
document.getElementById("date").innerHTML = d;
  
class MyClass{
  constructor(Firstname, Lastname){
   this.Firstname = Firstname;
   this.Lastname = Lastname;
  }
 }
const myclass = new MyClass ("Mohammed" , "Asraf");
document.getElementById("name").innerHTML = myclass.Firstname + " " + myclass.Lastname;
