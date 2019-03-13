//Solution for Isograms Kata on CodeWars.com
//https://www.codewars.com/kata/isograms/javascript

function isIsogram(str){
    var charArray = str.toLowerCase().split('');
    charArray.sort();
    for(i=0; i<charArray.length; i++) {
        if(charArray[i] === charArray[i+1]) {
            return false;
        }
    }

    return true;
}