//: Playground - noun: a place where people can play

import UIKit

let numbers = [2, 3, 4, 7, 11, 17, 18, 25, 77, 79]

//func linearSearchForSearchValue(searchValue: Int, array: [Int]) -> Bool {
//    for num in array {
//        if searchValue == num {
//            return true
//        }
//    }
//    return false
//}

//linearSearchForSearchValue(searchValue: 11, array: numbers)

func binarySearchFor(searchValue: Int, array: [Int]) -> Bool {
    var leftIndex = 0
    var rightIndex = array.count - 1
    
    while leftIndex <= rightIndex {
        let middleIndex = (leftIndex + rightIndex) / 2
        let middleValue = array[middleIndex]
        
        if middleValue == searchValue {
            return true
        }
        
        if searchValue < middleValue {
            rightIndex = middleIndex - 1
        }
        
        if searchValue > middleValue {
            leftIndex = middleIndex + 1
        }
    }
    
    return false
}

binarySearchFor(searchValue: 78, array: numbers)

