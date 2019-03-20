//Solution for Valid Parentheses on CodeWars.com
//https://www.codewars.com/kata/valid-parentheses/javascript
function validParentheses(parens) {
    var parenCounter = 0;
    for(i=0; i<parens.length; i++) {
        if(parens[i] === '(') {
            parenCounter++;
        } else {
            parenCounter--;
        }

        if(parenCounter < 0) {
            return false;
        }
    }

    return parenCounter === 0;
}