//Solution for Decode the Morse code Kata on CodeWars.com
//https://www.codewars.com/kata/54b724efac3d5402db00065e
decodeMorse = function(morseCode){
    const morseCodeTrimmed = morseCode.trim()
    //Regex: Match space followed by non-space OR match space followed by two spaces 
    const morseArray = morseCodeTrimmed.split(/\s(?=\S)|\s(?=\s\s)/)
    var charArray = morseArray.map((char) => (MORSE_CODE[char] || ' '))
    return charArray.join('')
}