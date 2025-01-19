const fs = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let n = fs[0];
let k = fs[1];

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.cursor = null;
  }
  add(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.cursor = node;
      node.next = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.tail.next = this.head;
    }
  }
  remove() {
    let currentNode = this.cursor;
    for (let i = 0; i < k - 2; i++) {
      currentNode = currentNode.next;
    }
    if (k !== 1) {
      const popValue = currentNode.next.value;
      currentNode.next = currentNode.next.next;
      this.cursor = currentNode.next;
      return popValue;
    }

    const popValue = currentNode.value;
    this.cursor = currentNode.next;
    return popValue;
  }
}

const list = new LinkedList();
for (let i = 1; i <= n; i++) {
  list.add(i);
}

const result = [];

for (let i = 0; i < n; i++) {
  result.push(list.remove());
}

console.log(`<${result.join(', ')}>`);
