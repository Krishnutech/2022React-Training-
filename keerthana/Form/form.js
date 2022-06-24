const validate = () => {
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let emailid = document.getElementById("email").value;
    let dob = document.getElementById("date").value;
    let mobile = document.getElementById("mobilenumber").value;
    let pass = document.getElementById("password").value;
    let repass = document.getElementById("repassword").value;
    let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    let Phone = /^\d{10}$/;
    let password = /^[A-Za-z]\w{7,14}$/;
    let repassword = /^[A-Za-z]\w{7,14}$/;
    let fnameError = document.getElementById("FirstnameError");
    let lnameError = document.getElementById("LastnameError");
    let mailError = document.getElementById("MailError");
    let dateError = document.getElementById("DateError");
    let mobileError = document.getElementById("MobileNumberError");
    let passError = document.getElementById("PasswordError");
    let repassError = document.getElementById("RepasswordError");

    if (fname === '') {
        fnameError.innerHTML = 'Must Enter An Input'
    } else {
        fnameError.innerHTML = ''
    }
    if (lname === '') {
        lnameError.innerHTML = 'Must Enter An Input'
    } else {
        lnameError.innerHTML = ''
    }
    if (lname.length > 1) {
        lnameError.innerHTML = 'It Must Contains Only Initial'
    }
    if (emailid === '' || !mail.test(emailid)) {
        mailError.innerHTML = 'Must Enter An Input'
    } else {
        mailError.innerHTML = ''
    }

    if (mobile === '' || !Phone.test(tel)) {
        mobileError.innerHTML = 'Must Enter An Input'

    } else {
        mobileError.innerHTML = ''
    }

    if (dob === '') {
        dateError.innerHTML = ' Select The Date '
    } else {
        dateError.innerHTML = ''
    }

    if (pass === '' || password.test(pass)) {
        passError.innerHTML = 'Must Enter An Input'
    } else {
        passError.innerHTML = ''
    }

    if (repass === '' || repassword.test(repass)) {
        repassError.innerHTML = 'Must Enter An Input'
    } else {
        repassError.innerHTML = ''
    }
    if (password.test(pass) !== repassword.test(repass)) {
        document.getElementById("RepasswordError").innerHTML = "Passwords are not same";
        return false;
    }



}