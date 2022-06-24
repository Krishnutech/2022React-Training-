const n = [5, 10, 15, 25];
const array = n.map(mapping);

document.getElementById("map").innerHTML = array;

function mapping(num) {
    return num * 5;
}