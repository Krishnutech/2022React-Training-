let res;
class Sample {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

}
let name1 = new Sample("keerthana", "pandurengan");
document.getElementById("class").innerHTML = name1.firstname + " " + name1.lastname;