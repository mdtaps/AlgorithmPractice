//Solution for Simple Pig Latin on CodeWars.com
//https://www.codewars.com/kata/simple-pig-latin/javascript
function pigIt(str){
    var wordsArray = str.split(' ');
    for(i=0; i<wordsArray.length; i++) {
        if(!wordsArray[i].match(/[a-z]/i)) {
            continue;
        }
        var charArray = wordsArray[i].split('');
        var firstChar = charArray.shift();
        charArray.push(firstChar);
        charArray.push('ay');
        wordsArray[i] = charArray.join('');
    }

    return wordsArray.join(' ');
}