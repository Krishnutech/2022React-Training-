/*Task 2:
Create a if statement to check two variable values a,b. If a greater than b print a is bigger else print b is bigger
*/

let a;
let b;
a=window.prompt("Enter any number");
b=window.prompt("Enter any number");
if(a>b)
{
   console.log(a ,"a is bigger "); 
}
else{
    console.log(b,"b is bigger");
}

/*Task 3
Write a javascript program to print 0 to 50 one by one using for loop
*/

for(let i=0;i<=50;i++)
{
    console.log(i);
}

/*Task 4:
Write a javascript program to print welcome 10 times
*/

for(let j=1;j<=10;j++)
{
    console.log("Welcome");
}

/*Task 5: 
 Write a javascript program using switch statement to print current day of this week
*/
switch(new Date().getDay())
{
    case 0:
        console.log("Today is sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Enter the proper day"); 
}

/*Task 6:
Write a javascript program to length of the following string ‘I am learning Javascript’*/

var q = "I am learning Javascript" ;
q = q.length;
console.log("The length of the string is : ",q);

/*Task 7:
Write a javascript program to sort the below array
Const fruits = [‘Banana’,  ‘Apple’, Orange’];*/

const fruits = ['Banana',  'Apple', 'Orange'];
let c = fruits.sort();
console.log(c);

/*Task 8:
Find the biggest number in the below array
Const numbers = [45, 10, 100, 2, 150, 6]; */

const numbers = [45, 10, 100, 2, 150, 6];
console.log(Math.max(...numbers));

/*Task 9:
Write a javascript program to get a substring ‘to’ from the following string ‘Welcome to our learning program’*/

let z = "Welcome to our learning program";
z=console.log(z.substr((z.indexOf("to")),2).trim(""));

/*Task 10:
Write a javascript program to filter the following array containing value greater than 50 
Const s = [10, 40, 45, 60, 80, 100];*/

function isGreater(s){
    return(s >50);
}
const s = [10, 40, 45, 60, 80, 100].filter(isGreater);
console.log("Greater value :"+ s);

/*Task 11:
Write a javascript program to return a array with multiples of 5 of the given array values using ‘map’
Const b = [5, 10, 15, 25];*/
const m = [4,9,16,25];
const l = m.map(fone)
function fone(num)
{
return num*5;
}
console.log(l);

/*Task 12:
List out 

a) Logical operators

&& - and
|| - or
! - Not

b) Ternary operator

 ?:
 
c) Comparison operators

==
!=
===
!==
>
<
<=
=>
 
d) arithmetic operators

+
-
*
/
%
++
--
**

*/

/*Task 13:
What is string template write down one example, list the uses

*Template Literals - let text = `He's often called "Johnny"`;
*Multiline string - 
let text =
`The quick
brown fox
jumps over
the lazy dog`;

Template literals are not supported in Internet Explorer.

*Interpolation
Template literals provide an easy way to interpolate variables and expressions into strings.

allows varaibles in string
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;

*Template Strings
*String Templates

*Back-Tics Syntax 
Template Literals use back-ticks (``) rather than the quotes ("") to define a string.
example : let text = `Hello World!`;
*/

/*Task 14:
List  out variable types with definition
Boolean type
Boolean represents a logical entity and can have two values: true and false. See Boolean and Boolean for more details.

Null type
The Null type has exactly one value: null.

Undefined type
A variable that has not been assigned a value has the value undefined. See undefined and Undefined for more details.

Number type
This means it can represent fractional values, but there are some limits to what it can store.
A Number only keeps about 17 decimal places of precision; arithmetic is subject to rounding.
*/

/*Task 15:
Write down one example of comment*/
//single line comment
/* Multiline comment */

/*Task 16:
Write a javascript function and pass two values 15, 20 and return the sum of the two variables and print the result*/

function g(b,c){
    return b+c;
};
console.log(g(15,20));

/*Task 17:
Write a arrow function for the above task 16*/

let x = (a,b) => a+b;
console.log(x(15,20));

/*Task 18:
Write code to display the following date string Fri Apr 20 2012 10:10:10 GMT+0530 (India Standard Time)*/
const d = new Date(2012, 3, 20, 10, 10, 10);
console.log(d);

/*Task 19:
Write a class with a constructor and one method called fullName and display the name by calling the class method*/
class Name{
    constructor(name){
        this.name = name;
    }
    fullname(){
        return this.name;
    }
}
un = new Name("Ezhilarasi");
console.log("HI, Welcome",un.fullname());

/*Task 20:
Explain undefined and datatype of undefined
undefined : A variable that has not been assigned a value .
A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value.

datatype of undefined : The undefined type is a primitive type that has only one value undefined
By default, when a variable is declared but not initialized, it is assigned the value of undefined 
*/









