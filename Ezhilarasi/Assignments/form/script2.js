const form = document.getElementById('form');
const uname = document.getElementById('uname');
const dob = document.getElementById('dob');
const address = document.getElementById('address');
const email = document.getElementById('email');
const number = document.getElementById('number');
const resume = document.getElementById('resume');
const city = document.getElementById('city');
const interests = document.getElementById('interests');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirm_password');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const unameValue = uname.value.trim();
    const dobValue = dob.value.trim();
    const addressValue = address.value.trim();
    const emailValue = email.value.trim();
    const numberValue= number.value.trim();
    const resumeValue = resume.value.trim();
    const cityValue = city.value.trim();
    const interestsValue = interests.value.trim();
    const passwordValue = password.value.trim();
    const confirmpasswordValue = confirmpassword.value.trim();

    if (unameValue === '') {
        setErrorFor(uname, 'Please Fill your Name');
    } else {
        setSuccessFor(uname);
    }
    if (dobValue === '') {
        setErrorFor(dob, 'Please Fill your dob');
    } else {
        setSuccessFor(dob);
    }
    if (addressValue === '') {
        setErrorFor(address, 'Please Fill the address');
    } else {
        setSuccessFor(address);
    }
    if (emailValue === '') {
        setErrorFor(email, 'Please Fill your Email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'please Enter The Valid Email');
    } else {
        setSuccessFor(email);
    }
    if (numberValue === '') {
        setErrorFor(number, 'Please Fill the Number');
    } else {
        setSuccessFor(number);
    }
    if (resumeValue === '') {
        setErrorFor(resume, 'Please Fill your Name');
    } else {
        setSuccessFor(resume);
    }
    if (cityValue === '') {
        setErrorFor(city, 'Please Fill your Name');
    } else {
        setSuccessFor(city);
    }
    if (interestsValue === '') {
        setErrorFor(interests, 'Please Fill your Name');
    } else {
        setSuccessFor();
    }
    if (passwordValue === '') {
        setErrorFor(password, 'Please Enter Your Password');
    } else {
        setSuccessFor(password);
    }
    if (confirmpasswordValue === '') {
        setErrorFor(confirmpassword, 'Please Fill Your Correct Password');
    } else if (passwordValue !== confirmpasswordValue) {
        setErrorFor(confirmpassword, 'Passwords does not match');
    } else {
        setSuccessFor(confirmpassword);
    }
}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}
 
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}