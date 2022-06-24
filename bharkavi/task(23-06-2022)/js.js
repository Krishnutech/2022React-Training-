//2
var a = 5;
var b = 3;
if(a>b){
    document.getElementById("compare").innerHTML = "a is bigger";
}
else{
    document.getElementById("compare").innerHTML = "B is bigger"; 
}

//3
let value = "";
for(let i=0;i<=50;i++)
{
  value += i + " "; 
}
document.getElementById("demo").innerHTML = value;

//4
let text = "";
for (let i = 0; i < 10; i++) {
  text +=  "Welcome" + "<br>";
}
document.getElementById("Wel").innerHTML = text;

//5
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
document.getElementById("day").innerHTML = " " + day;

//6
let str="I am learning Javascript";
document.getElementById("len").innerHTML=str.length;

//7
const fruits = ["Banana", "Apple", "Orange"];
fruits.sort();
document.getElementById("sort").innerHTML = fruits;

//8
const no=[45, 10, 150, 2, 100, 6];
for(let i=0;i<no.length;i++)
{
    for(let j=0;j<no.length;j++)
    {   if(no[i]<no[j])
        {
            let temp=no[i];
            no[i]=no[j];
            no[j]=temp;
        }

    }
} 
document.getElementById("non").innerHTML = no[no.length-1];

//9
let val="Welcome to our learning Program"
let res= text.includes("to")
if(res==true)
    val="'to' is present in the String";
   else
    sub="'to' is not present in the String";
document.getElementById("val").innerHTML = val;

//10
const s = [10, 40, 45, 60, 80, 100];
let Arr="";
    for(let i=0;i<s.length;i++)
    {
        if(s[i]>50)
        Arr += s[i]+ " ";
    }
document.getElementById("array").innerHTML = Arr;

// 11
const ba = [5, 10, 15, 25];
const newArr = ba.map(da);
document.getElementById("ma").innerHTML = newArr;
function da(num) {
  return num * 5;
}


//16
const num1 = 15;
const num2 = 20;
const z = num1 + num2;
document.getElementById("no").innerHTML ="The value of z is: " + z;

//17
let myFunction = (num1, num2) => num1 + num2;
document.getElementById("arrow").innerHTML = myFunction(15, 20);

//18
const d = new Date(2012, 3, 20 , 10, 10, 10, 0);
document.getElementById("date").innerHTML = d;

//19
class MyClass{
    constructor(Firstname, Lastname){
        this.Firstname = Firstname;
        this.Lastname = Lastname;
    }
}
const myClass = new MyClass ("Bharkavi" , "Sandhiya");
document.getElementById("Name").innerHTML = myClass.Firstname + " " + myClass.Lastname;
