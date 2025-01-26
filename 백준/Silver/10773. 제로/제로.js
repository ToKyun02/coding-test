class Stack {
  constructor() {
    this.array = [];
    this.length = 0;
  }
  push(value) {
    this.array[this.length] = value;
    this.length++;
  }
  pop() {
    const value = this.array[this.length - 1];
    this.length--;
    this.array.length = this.length;
    return value;
  }
  getArray() {
    return this.array;
  }
}

const solution = () => {
  const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);
  input.shift();

  const stack = new Stack();

  input.forEach((value) => {
    if (value === 0) stack.pop();
    else stack.push(value);
  });
  const result = stack.getArray().reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  console.log(result);
};

solution();
