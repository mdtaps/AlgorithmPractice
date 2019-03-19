//Solution for Scramblies on CodeWars.com
//https://www.codewars.com/kata/scramblies/javascript
function createObjectFromString(string) {
    var object = {};
    for(i=0; i<string.length; i++) {
            var key = string[i];
            if(object[key] === undefined) {
                object[key] = 1;
        } else {
                object[key]++;
        }
    }
    return object;
}	

function scramble(str1, str2) {
    var str1Dict = createObjectFromString(str1);
    var str2Dict = createObjectFromString(str2);

    for(var key in str2Dict) {
        if(str1Dict[key] === undefined || str2Dict[key] > str1Dict[key]) {
            return false;
        }
    }

    return true;
}