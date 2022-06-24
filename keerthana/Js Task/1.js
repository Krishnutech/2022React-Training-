function compare() {
    let First = document.getElementById('a').value;
    let Second = document.getElementById('b').value;
    if (First > Second) {
        alert("A Is Greater Than B");
    } else if (First < Second) {
        alert("B Is Greater Than A");
    }
}