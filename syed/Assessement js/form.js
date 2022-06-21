
function validate(e)
{
    e.preventDefault();
    const fname = document.querySelector('#fname').value;
    const lname = document.querySelector('#lname').value;
    const email = document.querySelector('#email').value;
    const phoneNumber = document.querySelector('#phone').value;
    const dob = document.querySelector('#birthday').value;   
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;

    const fnameError = document.querySelector('#fnameError');
    const lnameError = document.querySelector('#lnameError');
    const emailError = document.querySelector('#emailError');
    const phoneNumberError = document.querySelector('#phoneError');
    const dobError = document.querySelector('#dobError');   
    const passwordError = document.querySelector('#passwordError');
    const confirmPasswordError = document.querySelector('#confirmPasswordError');
    if(fname === '' ){
        fnameError.innerHTML = 'cannot be empty'
    }
    else{
        fnameError.innerHTML = ''
    }

    if(lname === ''){
        lnameError.innerHTML = 'cannot be empty'
    }  else{
        lnameError.innerHTML = ''
    }
    
    if(email === ''){
        emailError.innerHTML = 'cannot be empty'
    }  else{
        emailError.innerHTML = ''
    }
    
    if(phoneNumber === ''){
        phoneNumberError.innerHTML = 'cannot be empty'
    } else{
        phoneNumberError.innerHTML = ''
    }
    
    if(dob === ''){
        dobError.innerHTML = 'cannot be empty'
    }else{
        dobError.innerHTML = ''
    }
    
    if(password === ''){
        passwordError.innerHTML = 'cannot be empty'
    }else{
        passwordError.innerHTML = ''
    }
    
    if(confirmPassword === ''){
        confirmPasswordError.innerHTML = 'cannot be empty'
    }else{
        confirmPasswordError.innerHTML = ''
    }
  
}
