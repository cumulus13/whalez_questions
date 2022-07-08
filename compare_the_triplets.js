const prompt = require('prompt-sync')();
const a = prompt("a = ").split(" ")
const b = prompt("b = ").split(" ")
let c = ""
console.log("a =", a);
console.log("b =", b);
if (parseInt(a[0]) > parseInt(b[0])) {
    c += " 1"
}
if (parseInt(a[2]) < parseInt(b[2])) {
    c += " 1"
}

console.log("Output:", c);