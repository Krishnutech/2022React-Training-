function validate(e)
{
    e.preventDefault();

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var dob = document.getElementById('dob');
    var password = document.getElementById('password').value;
    var confirmpassword= document.getElementById('confirmpassword').value;


    var fnameError = document.getElementById('fnameError');
    var lnameError = document.getElementById('lnameError');
    var emailError = document.getElementById('emailError');
    var phoneError = document.getElementById('phoneError');
    var dobError = document.getElementById('dobError');
    var passwordError = document.getElementById('passwordError');
    var confirmpasswordError = document.getElementById('confirmPasswordError');

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phnNumberExpression = /^\d{10}$/;
    if(fname === '')
    {
        fnameError.style.display = "inline";
        fnameError.innerHTML = " please fill the fname field";
       
    }
    else {
        fnameError.style.display = "none";
        fnameError.innerHTML  = ''
    }
    if(lname === '')
    {
        lnameError.style.display = "inline";
        lnameError.innerHTML = " please fill the lname field";
       
    }
    else {
        lnameError.style.display = "none";
        lnameError.innerHTML  = ''
    }
    if(email === '')
    {
        emailError.style.display = "inline";
        emailError.innerHTML = " please fill the emailid";
    }
    else 
    {
        emailError.style.display = "none";
        emailError.innerHTML = ''
    }
    if(phone.match(phnNumberExpression))
    {
        phoneError.style.display = "none";
        phoneError.innerHTML = '';
    }
     else 
     {
        phoneError.style.display = "inline";
        phoneError.innerHTML = " please fill 10 digit number";
     }
      if(password === '')
      {
        passwordError.style.display = "inline";
        passwordError.innerHTML = "password cannot be empty";
    }
     else if (password.length < 5) {
        console.log("less than 5");
        passwordError.style.display = "inline";
        passwordError.innerHTML ="password atleast 6 characters";
    }
     else 
     {
        passwordError.style.display = "none";
        passwordError.innerHTML = ''
     }
     if(confirmpassword === password)
     {
        confirmpasswordError.style.display = "none";
        confirmpasswordError.innerHTML = ''
    }
     else 
     {
        confirmpasswordError.style.display = "inline";
        confirmpasswordError.innerHTML ="password mismatch";
     }
    }

    
    

