function loop() {
    let text = "";
    let i = 0;
    while (i < 10) {
        text += "<br>welcome ";
        i++;
    }
    document.getElementById("while").innerHTML = text;
}