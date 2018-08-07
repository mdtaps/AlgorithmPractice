//: Playground - noun: a place where people can play

import UIKit

class Node {
    let value: Int
    var next: Node?
    
    init(value: Int, next: Node?) {
        self.value = value
        self.next = next
    }
}

let nodeFour = Node(value: 4, next: nil)
let nodeThree = Node(value: 3, next: nodeFour)
let nodeTwo = Node(value: 2, next: nodeThree)
let nodeOne = Node(value: 1, next: nodeTwo)

func printNodes(headNode: Node?) {
    guard let node = headNode else {
        return
    }
    
    print(node.value)
    printNodes(headNode: node.next)
}

printNodes(headNode: nodeOne)

func reverseList(head: Node, prev: Node?) -> Node? {
    if let next = head.next {
        head.next = prev
        return reverseList(head: next, prev: head)
    } else {
        head.next = prev
        return head
    }
}

func reverseListWhile(head: Node?) -> Node? {
    var currentNode = head
    var next: Node?
    var prev: Node? = nil
    
    while currentNode != nil {
        next = currentNode?.next
        currentNode?.next = prev
        prev = currentNode
        currentNode = next
    }
    
    return prev
}

let myReversedList = reverseList(head: nodeOne, prev: nil)
printNodes(headNode: myReversedList)
