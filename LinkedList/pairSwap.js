class SingleLLNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SingleLL {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    prepend(value) {
      const newNode = new SingleLLNode(value);
  
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
        this.length++;
        return this.printList();
      } else {
        let temp = this.head;
        newNode.next = temp;
        this.head = newNode;
        this.length++;
        return this.printList();
      }
    }
  
    append(value) {
      let newNode = new SingleLLNode(value);
      let temp = this.tail;
  
      temp.next = newNode;
      this.tail = newNode;
      this.length++;
      return this.printList();
    }
  
    insertAt(position, value) {
      if (position === 0) {
        return this.prepend(value);
      }
      if (position === this.length - 1) {
        return this.append(value);
      }
    }
  
    printList() {
      let temp = this.head;
      while (temp) {
        console.log("-->", temp.data, "-->");
        temp = temp.next;
      }
    }
  }
  
  const ll = new SingleLL();
  ll.prepend(6);
  ll.prepend(5);
  ll.prepend(4);
  ll.prepend(3);
  ll.prepend(2);
  ll.prepend(1);
  
  function pairSwap(head) {
    if (!head || !head.next) {
      return head;
    }
    let currentNode = head;
    let prevNode = null;
  
    while (currentNode && currentNode.next) {
      //Select the nodes to swap
      const next = currentNode.next;
      const nextToNext = next.next;
      //Change the address of the selected nodes
      next.next = currentNode;
      currentNode.next = nextToNextcurrentNode;
      //Update the pointer
      if (prevNode) {
        prevNode.next = next;
      } else {
        ll.head = next;
      }
  
      prevNode = currentNode;
      currentNode = nextToNext;
    }
    console.log(ll);
    return ll.printList();
  }
  
  console.log(pairSwap(ll.head));