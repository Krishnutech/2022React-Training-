const validate = () => {
    let fname = document.getElementById("First Name").value;
    let lname = document.getElementById("Last Name").value;
    let email = document.getElementById("EMail").value;
    let tel = document.getElementById("MobileNumber").value;
    let date = document.getElementById("Date").value;
    let pass = document.getElementById("Password").value;
    let repass = document.getElementById("ConformPassword").value;
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var Phone = /^\d{10}$/;
    const fnameError = document.getElementById('nameError');
    const lnameError = document.getElementById('lNameError');
    const mailError = document.getElementById('mailError');
    const pNumberError = document.getElementById('numberError');
    const dobError = document.getElementById('dateError');
    const passwordError = document.getElementById('passError');
    const rePasswordError = document.getElementById('rePassError');


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

    if (email === '' || !email.test(email)) {
        mailError.innerHTML = 'Must Enter An Input'
    } else {
        mailError.innerHTML = ''
    }

    if (tel === '' || !Phone.test(tel)) {
        pNumberError.innerHTML = 'Must Enter An Input'

    } else {
        pNumberError.innerHTML = ''
    }

    if (date === '') {
        dobError.innerHTML = ' Select The Date '
    } else {
        dobError.innerHTML = ''
    }

    if (pass === '' || pass.length < 6) {
        passwordError.innerHTML = 'Must Enter An Input'
        alert("Password Must Contains atleast 8 characters");
    } else {
        passwordError.innerHTML = ''
    }

    if (repass === '' ||
        repass != pass) {
        rePasswordError.innerHTML = 'Must Enter An Input'
        alert("Password is MisMatched");
    } else {
        rePasswordError.innerHTML = ''
    }


}