//: Playground - noun: a place where people can play

import UIKit

class Node {
    var leftNode: Node?
    var rightNode: Node?
    var value: Int
    
    init(leftNode: Node?, rightNode: Node?, value: Int) {
        self.leftNode = leftNode
        self.rightNode = rightNode
        self.value = value
    }
}

let oneNode = Node(leftNode: nil, rightNode: nil, value: 1)
let fiveNode = Node(leftNode: oneNode, rightNode: nil, value: 5)
let elevenNode = Node(leftNode: nil, rightNode: nil, value: 11)
let twentyNode = Node(leftNode: nil, rightNode: nil, value: 20)
let fourteenNode = Node(leftNode: elevenNode, rightNode: twentyNode, value: 14)
let rootNode = Node(leftNode: fiveNode, rightNode: fourteenNode, value: 10)

func search(node: Node?, searchValue: Int) -> Bool {
    guard let currentNode = node else {
        return false
    }
    
    if searchValue == currentNode.value {
        return true
    } else if searchValue > currentNode.value {
        return search(node: currentNode.rightNode, searchValue: searchValue)
    } else {
        return search(node: currentNode.leftNode, searchValue: searchValue)
    }
}

print(search(node: rootNode, searchValue: 10))
