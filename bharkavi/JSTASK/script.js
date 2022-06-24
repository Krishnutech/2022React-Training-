const fun = ()=>{
    var Fname = document.getElementById("Firstname").value;
    var Lname = document.getElementById("Lastname").value;
    var dob = document.getElementById("DOB").value;
    var email = document.getElementById("Email").value;
    var mobno = document.getElementById("MobileNo").value;
    var uname = document.getElementById("Username").value;
    var Pass = document.getElementById("Password").value;
    var conPass = document.getElementById("ConfirmPassword").value;
    var regFirstname = /^[a-zA-Z '.-]*$/
    var regLastname =/^[a-zA-Z '.-]*$/
    var regEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 
    var regMobileNo =/^[1-9]\d{9}$/;
    var regUsername =/^[a-z\d]{5,12}$/i;
    var regPassword =/^[A-Za-z]\w{7,14}$/; 
    var regConfirmPassword =/^[A-Za-z]\w{7,14}$/;
    
    var FnameError = document.getElementById("FirstnameError");
    var LnameError = document.getElementById("LastnameError");
    var dobError = document.getElementById("DOBError");
    var emailError = document.getElementById("EmailError");
    var mobnoError = document.getElementById("MobileNoError");
    var unameError = document.getElementById("UsernameError");
    var PassError = document.getElementById("passwordError");
    var conPassError = document.getElementById("ConfirmPasswordError");
    if(Fname == "" || !regFirstname.test(Fname)) {
        FirstnameError.innerHTML = "FirstName cannot be Blank";
    }
    else{
        FnameError.innerHTML = " ";
    }
    if(Lname == "" || !regLastname.test(Lname) ) {
        LnameError.innerHTML = "LastName cannot be Blank";
    }
    else{
        LnameError.innerHTML = " ";
    }
    if(dob == "") {
        dobError.innerHTML = "DOB cannot be Blank";
    }
    else{
        dobError.innerHTML = " ";
    }
    if (email == "" || !regEmail.test(email)) {
       emailError.innerHTML = "Please enter a valid e-mail address";
      
    }
    else{
        emailError.innerHTML = " ";
    }
    if(mobno == " " || !regMobileNo.test(mobno) ) {
      mobnoError.innerHTML = "Please enter a valid mobile number";
    }
    else{
        mobnoError.innerHTML = " ";
    }
    if(uname == "" || !regUsername.test(uname)) {
       unameError.innerHTML = "Please enter a valid username";
    }
    else{
        unameError.innerHTML = " ";
    }
    if(Pass == "" || !regPassword.test(Pass)) {
       PassError.innerHTML = "Password is Required"
    }
    else{
        PassError.innerHTML = " ";
    }
    if(conPass == "" || !regConfirmPassword.test(conPass)) {
        conPassError.innerHTML = "Must match Previous password ";
    }
    else{
        conPassError.innerHTML = " ";
    }
}