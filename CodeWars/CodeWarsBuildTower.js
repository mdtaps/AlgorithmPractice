//Solution for Build Tower Kata on CodeWars.com
//https://www.codewars.com/kata/build-tower/javascript
function towerBuilder(nFloors) {
    var bottomFloorLength = nFloors + (nFloors - 1);
    var array = [];
    for(i=1; i<=nFloors; i++) {
        //Build string
        var numberOfStars = i + (i-1);
        var numberOfSpaces = (bottomFloorLength - numberOfStars)/2;
        var floorString = ' '.repeat(numberOfSpaces) + '*'.repeat(numberOfStars) + ' '.repeat(numberOfSpaces);
        array.push(floorString);
    }

    return array;
}