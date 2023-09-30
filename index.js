class Node {
  constructor(value) {
    this.value = value
    this.nextNode = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    //add new node containing value to end of list
    if (this.head === null) {
      this.head = new Node(value)
    } else {
      let temp = this.head
      while (temp.nextNode != null) {
        temp = temp.nextNode
      }
      temp.nextNode = new Node(value)
    }
  }
  prepend(value) {
    //adds new node containing value to the start of list
    if (this.head === null) {
      this.head = new Node(value)
    } else {
      const newFirst = new Node(value)
      newFirst.nextNode = this.head
      this.head = newFirst
    }
  }
  get size() {
    //returns total number of nodes in list
    let counter = 0
    let temp = this.head

    while (temp !== null) {
      counter++
      temp = temp.nextNode
    }
    return counter
  }
  get firstNode() {
    //returns first node in list
    return this.head
  }
  get tail() {
    //returns last node in list
    if (this.head === null) {
      return null
    } else {
      let temp = this.head
      while (temp.nextNode != null) {
        temp = temp.nextNode
      }
      return temp
    }
  }
  at(index) {
    //returns node at given index
    if (index < 0 || this.head === null) {
      return null //checks for negative index or empty list
    }
    let temp = this.head
    let count = 0
    while (temp != index && count < index) {
      temp = temp.nextNode
      count++
    }
    return temp
  }
  pop() {
    //removes last element from list
    if (this.head === null) {
      return null
    }
    if (this.head.nextNode === null) {
      let value = this.head.value
      this.head = null
      return value
    } else {
      let current = this.head
      let previous = null
      while (current.nextNode != null) {
        previous = current
        current = current.nextNode
      }
      let value = current.value
      previous.nextNode = null

      return value
    }
  }
  contains(value) {
    //returns true if the passed in value is in the list, and otherwise returns false
    if (this.head === null) {
      return false
    }
    if (this.head.value === value) {
      return true
    } else {
      let temp = this.head
      while (temp !== null) {
        if (temp.value === value) {
          return true
        }
        temp = temp.nextNode
      }
      return false
    }
  }
  find(value) {
    //returns index of the node containing value, or null if not found
    if (this.head === null) {
      return null
    }
    if (this.head.value === value) {
      return 0
    } else {
      let temp = this.head
      let count = 0
      while (temp !== null) {
        if (temp.value === value) {
          return count
        }
        count++
        temp = temp.nextNode
      }
    }
    return null
  }
  toString() {
    //represents LinkedList objects as strings

    if (this.head === null) {
      return 'List empty'
    } else {
      let string = ''
      let currentNode = this.head
      while (currentNode != null) {
        string += currentNode.value
        if (currentNode.nextNode !== null) {
          string += ' -> '
        }
        currentNode = currentNode.nextNode
      }
      return string
    }
  }
  insertAt(value, index) {
    const newNode = new Node(value)

    if (index < 0) {
      return 'index cannot be negative'
    }

    if (this.head === null) {
      if (index === 0) {
        this.head = newNode
        return
      }
    } else {
      return 'index is out of bounds'
    }
    if (index === 0) {
      newNode.nextNode = this.head
      this.head = newNode
      return
    }
    let previous = null
    let current = this.head
    let counter = 0
    while (current !== null && counter < index) {
      previous = current
      current = current.nextNode
      counter++

      if (counter < index) {
        return 'index is out of bounds'
      }
      newNode.nextNode = current
      previous.nextNode = newNode
    }
  }

  removeAt(index) {
    if (index < 0) {
      return 'Index cannot be negative'
    }
    if (this.head === null) {
      return 'This list is empty'
    }
    if (index === 0) {
      this.head = this.head.nextNode
    }
    let previous = null
    let current = this.head
    let counter = 0
    while (current != null && counter < index) {
      previous = current
      current = current.nextNode
      counter++
    }
    if (current === null) {
      return 'Index is out of bounds'
    }
    previous.nextNode = current.nextNode
  }
}
