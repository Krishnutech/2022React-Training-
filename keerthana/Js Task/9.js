function greater() {
    let array = [10, 40, 45, 60, 80, 100];
    let num = 50;
    let result;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > num) {
          result= document.write(array[i]);
        }

    }
    document.getElementById("greater").innerHTML = result;
 }