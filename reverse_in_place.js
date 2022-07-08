function reverseInPlace(str) {
  var words = [];
  words = str.match(/\S+/g);
  var result = "";
  for (var i = 0; i < words.length; i++) {
     result += words[i].split('').reverse().join('') + " ";
  }
  return result
}

const prompt = require('prompt-sync')()
data = prompt("Give me anything: ");
console.log(reverseInPlace(data));