function myFunction() {
    var value = " ",
        i;
    for (i = 1; i <= 50; i++) {
        value = value + "" + i + "<br>";
    }
    document.getElementById("generate").innerHTML = value;
}