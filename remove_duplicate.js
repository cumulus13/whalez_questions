const prompt = require('prompt-sync')();

function method1() {
    const input = prompt("input array: ");
    const splitted = input.split(new RegExp('[\[;,;\\];\n]', 'g')).filter(n => n);
    console.log("input: ", input);
    let dupChars = splitted.filter((c, index) => {
    return splitted.indexOf(c) !== index;});
    console.log("duplicate chars: ", dupChars);
    let uniqueChars = [...new Set(splitted)];
    console.log("duplicate removed: ", uniqueChars);
    return uniqueChars
}

method1()