//Solution for Find The Parity Outlier on CodeWars.com
//https://www.codewars.com/kata/simple-pig-latin/javascript
function findOutlier(integers) {
    var setParity = Math.abs(integers[0]%2 === integers[1]%2 ? integers[0]%2 : integers[2]%2);
    for(i=0; i<integers.length; i++) {
        var currentParity = Math.abs(integers[i]%2);
        if(setParity != currentParity) {
            return integers[i];
        }
    }
}