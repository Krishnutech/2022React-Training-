const validate = () => {
    let fname = document.getElementById("1").value;
    let lname = document.getElementById("2").value;
    let email = document.getElementById("3").value;
    let tel = document.getElementById("4").value;
    let date = document.getElementById("5").value;
    let pass = document.getElementById("6").value;
    let repass = document.getElementById("7").value;
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var Phone = /^\d{10}$/;
    if (fname == " ") {
        alert("Please Enter Your Name");
    }
    if (lname.length > 1) {
        alert("Last Name Must Be An Initial\n Please Enter Your Last Name Properly!!! ");
    }
    if (email == "" || !mail.test(email)) {
        alert("Special character except @ is not allowed");
    }
    if (pass == "") {
        alert("Please enter your password");
    }

    if (pass.length < 6) {
        alert("Password Must Contains atleast 8 characters");

    }
    if (repass != pass) {
        alert("Password is MisMatched");

    }
    if (tel == "" || !Phone.test(tel)) {
        alert("Please enter valid phone number.");
    }

}