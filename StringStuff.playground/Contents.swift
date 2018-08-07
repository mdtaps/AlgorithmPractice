//: Playground - noun: a place where people can play

import UIKit
import Foundation

func reverseString(stringToReverse: String) -> String {
    var mutatingString = stringToReverse
    
    if mutatingString.count == 1 {
        return stringToReverse
    } else {
        let char = mutatingString.remove(at: mutatingString.startIndex)
        var reversedString = reverseString(stringToReverse: mutatingString)
        reversedString.append(char)
        return reversedString
    }
}

print(reverseString(stringToReverse: "Mark Tapia"))

func arePermutations(stringOne: String, stringTwo: String) -> Bool {
    if stringOne.count != stringTwo.count {
        return false
    }
    
    var mutatingStringOne = stringOne
    
    for _ in 1...mutatingStringOne.count {
        if mutatingStringOne == stringTwo {
            return true
        } else {
            let char = mutatingStringOne.remove(at: mutatingStringOne.startIndex)
            mutatingStringOne.append(char)
        }
    }
    
    return false
}

arePermutations(stringOne: "Mark Tapia", stringTwo: "Mark Tapia")
arePermutations(stringOne: "Mark Mapia", stringTwo: "Mark Tapia")
arePermutations(stringOne: "Mark Tapia", stringTwo: "aMark Tapi")

func printPermutations(of string: String) {
    var myString = string
    for _ in 1...myString.count {
        print(myString)
        let char = myString.remove(at: myString.startIndex)
        myString.append(char)
    }
}

printPermutations(of: "Mark Tapia")
