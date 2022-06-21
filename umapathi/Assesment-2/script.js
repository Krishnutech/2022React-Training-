/*
add validation using an arrow function called validate 
while clicking submit button. 
Display validation error message in a div
*/
const validate = () => {
    let fname = document.myform.fname.value;
    let lname = document.myform.lname.value;
    let email = document.myform.email.value;
    let mobile = document.myform.mobile.value;
    let dob = document.myform.dob.value;
    let password = document.myform.password.value;
    let cpassword = document.myform.cpassword.value;

    let errDiv = document.getElementById("err");
   let fanameErr = document.getElementById("fname-err");
   let lnameErr = document.getElementById("lname-err");
   let emailErr = document.getElementById("email-err");
   let mobileErr =document.getElementById("mobile-err");
   let passwordErr = document.getElementById("password-err");
   let cPasswordErr = document.getElementById("cpassword-err");

   fanameErr.style.display ="none";
    // validation part
    // first name should notbe empty
    if(fname.length >0 && lname.length>0 && email.length >0 && mobile.length === 10 && password.length >=5 && password == cpassword){
        alert("Registerd succesfully!")
        return true;
       }
       if(!(fname.length >0 && lname.length>0 && email.length >0 && mobile.length === 10 && password.length >=5 && password == cpassword)){
        errDiv.style.display="block";
        errDiv.style.backgroundColor="red";
        errDiv.style.color="white";
        document.getElementById("err").innerHTML="Please fill the form correctly !";
        
       }
    if(fname.length <=0){
        fanameErr.style.display="block";
        fanameErr.style.backgroundColor="red";
        fanameErr.style.color="white";
        document.getElementById("fname-err").innerHTML="First name should not be empty!";

    }
    // last name shoould not be empty
    else if(lname.length <=0){
        lnameErr.style.display="block";
        lnameErr.style.backgroundColor="red";
        lnameErr.style.color="white";
        document.getElementById("lname-err").innerHTML="Last name should not be empty!";
    }
    else if(email.length <=0){
        emailErr.style.display="block";
        emailErr.style.backgroundColor="red";
        emailErr.style.color="white";
        document.getElementById("email-err").innerHTML = "email should not be empty";
    }
    else if(mobile.length <=9 ){
        mobileErr.style.display="block";
        mobileErr.style.backgroundColor="red";
        mobileErr.style.color="white";
        document.getElementById("mobile-err").innerHTML = "Mobile number should be in 10 numbers!"
    }
    else if(password.length<5){
        passwordErr.style.display="block";
        passwordErr.style.backgroundColor="red";
        passwordErr.style.color="white";
        document.getElementById("password-err").innerHTML = "Password must be atleast 5 characters long!"
    }
    else if(password != cpassword){
        cPasswordErr.style.display="block";
        cPasswordErr.style.backgroundColor="red";
        cPasswordErr.style.color="white";
        document.getElementById("cpassword-err").innerHTML = "Incorrect password!"
    }
    return false;
   
    // alert(fname+lname+email+mobile+dob+password+cpassword)
}