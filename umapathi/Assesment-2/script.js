/*
add validation using an arrow function called validate 
while clicking submit button. 
Display validation error message in a div
*/
const validate = ()=>{
    let fname = document.myform.fname.value;
    let lname = document.myform.lname.value;
    let email = document.myform.email.value;
    let mobile = document.myform.mobile.value;
    let dob = document.myform.dob.value;
    let password = document.myform.password.value;
    let cpassword = document.myform.cpassword.value;
    let errDiv = document.getElementsByClassName("err");
   let fanameErr = document.getElementById("fname-err");
   let lnameErr = document.getElementById("laname-err");
   let emailErr = document.getElementById("email-err");
   let mobileErr =document.getElementById("mobile-err");
   let passwordErr = document.getElementById("passworrd-err");
   let cPasswordErr = document.getElementById("cpassworrd-err");

//    style of error div

    // validation part
    // first name should notbe empty
    if(fname.length >0 && lname.length>0 && email.length >0 && mobile.length === 10 && password.length >=5 && password == cpassword){
        return true;
       }
    if(fname.length <=0){
        document.getElementById("fname-err").innerHTML="First name should not be empty!";

    }
    // last name shoould not be empty
     if(lname.length <=0){
        document.getElementById("lname-err").innerHTML="Last name should not be empty!";
    }
     if(email.length <=0){
        document.getElementById("email-err").innerHTML = "email should not be empty";
    }
    if(mobile.length <=0 || mobile.length >10){
        document.getElementById("mobile-err").innerHTML = "Mobile number should be in 10 numbers!"
    }
    if(password.length<5){
        document.getElementById("password-err").innerHTML = "Password must be atleast 5 characters long!"
    }
    if(password != cpassword){
        document.getElementById("cpassword-err").innerHTML = "Incorrect password!"
    }
    return false;
   
    // alert(fname+lname+email+mobile+dob+password+cpassword)
}