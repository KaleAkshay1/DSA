class Node {
  constructor (data, next = null) {
    this.data = data;
    this.next = next;
  }

  getVal(){
    return this.data;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
  }

  insertAtStart (val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtLast (val) {
    const newNode = new Node(val);
    let num = this.head;
    if(num === null){
      this.head = newNode;
    }else{
      while(num.next !== null){
        num = num.next;
      }
      num.next = newNode;
    }
    
  }

  insertAtMidAfterPosition(val, position) {
    let num = this.head;
    let newNode = new Node(val);

    if (num === null) {
        return;
    }

    while (num !== null) {
        if (num.data === position) {
            newNode.next = num.next;
            num.next = newNode;
            return;
        }

        num = num.next;
    }
  }

  insertAtMidBeforePosition(val, position) {
    let num = this.head;

    if (num === null) {
        return;
    }

    while (num !== null) {
        if (num.data === position) {
            num.next = new Node(num.data, num.next);
            num.data = val;
            return;
        }

        num = num.next;
    }
  }

  deleteAtStart() {
    if(this.head === null) return;
    this.head = this.head.next;
  };

  deleteAtEnd() {
    if(this.head === null) return;
    let num = this.head;
    if(num.next === null){
      this.head = null;
      return;
    }
    while(num.next.next !== null) {
      num = num.next;
    }
    num.next = null
  };

  deleteSpecificNode(node) {
    let num = this.head;
    if(num === null) return;
    if(num.data === node){
      this.head = num.next;
      return;
    }
    let prev = null;
    while(num !== null){
      if(num.data === node){
        prev.next = num.next;
        return
      }

      prev = num;
      num = num.next;
    }
  }

  getLength() {
    let length = 0;
    let node = this.head;
    while(node !== null){
      length += 1;
      node = node.next;
    }
    return length;
  }

  isEmpty() {
    return this.head === null;
  }

  contains(val) {
    let num = this.head;
    while(num !== null){
      if(num.data === val) return true;
      num = num.next;
    }
    return false;
  }

  getLast() {
    let num = this.head;
    if(num === null) return null;
    while(num.next !== null){
      num = num.next;
    }
    return num.data;
  }

  display() {
    let num = this.head;

    if (num === null) {
        return "Empty List";
    }

    let str = "";

    while (num !== null) {
        str += num.data;

        if (num.next !== null) {
            str += " -> ";
        }

        num = num.next;
    }

    return str;
  }
}

const LL = new LinkedList();
LL.insertAtStart(1)
LL.insertAtStart(2)
LL.insertAtStart(3)
LL.insertAtLast(5)
LL.insertAtLast(4)
// LL.insertAtMidAfterPosition(11,1)
// LL.insertAtMidBeforePosition(12,1)
// LL.deleteAtStart()
// LL.deleteAtEnd()
// LL.deleteSpecificNode(12)
console.log(LL.getLength())
console.log(LL.isEmpty())
console.log(LL.contains(4))
console.log(LL.getLast())
console.log(LL.display());