function firstNonRepeatedCharacter(string) {
   for (var i = 0; i < string.length; i++) {
     var c = string.charAt(i);
     if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
       return c;
     }
   }
   return null;
 }

const prompt = require('prompt-sync')()
data = prompt("Input anything: ");
result = firstNonRepeatedCharacter(data)
if (result) {
    console.log("RESULT:", result);
} else {
    console.log("INVALID CHARCTER !:", result);
}



