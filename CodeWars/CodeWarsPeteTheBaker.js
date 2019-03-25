//Solution for Pete, the baker on CodeWars.com
//https://www.codewars.com/kata/pete-the-baker/javascript
function cakes(recipe, available) {
    var numberOfCakes = null;
    for(var key in recipe) {
        if( available[key] === undefined ) {
            return 0;
        }

        var cakesFromIngredient = available[key]/recipe[key];
        cakesFromIngredient = Math.floor(cakesFromIngredient);

        if(numberOfCakes === null || cakesFromIngredient < numberOfCakes) {
            numberOfCakes = cakesFromIngredient;
        }

    }

    return numberOfCakes;
}