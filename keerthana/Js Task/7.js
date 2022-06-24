function number() {
    let array = [45, 10, 100, 2, 150, 6];
    let result;
    for (let i = 1; i < array.length; ++i) {
        if (array[0] < array[i]) {
            array[0] = array[i];
            result = array[0];
        }
    }
    document.getElementById("num").innerHTML = result;
}