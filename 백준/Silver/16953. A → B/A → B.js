const fs = require("fs");

class Queue {
    constructor() {
        this.head = 0;
        this.tail = 0;
        this.map = new Map();
    }

    isEmpty() {
        return this.head == this.tail;
    }

    push(data) {
        this.map.set(this.tail++, data);
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        const popV = this.map.get(this.head);
        this.map.delete(this.head++);
        return popV;
    }
}

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numbers = input[0]
    .trim()
    .split(" ")
    .map((x) => Number(x));

const [a, b] = numbers;
const q = new Queue();
q.push({ v: a, c: 1 });
let res = -1;

while (!q.isEmpty()) {
    const { v, c } = q.pop();

    if (v == b) {
        res = c;
        break;
    }

    const nt1 = v * 2;
    if (nt1 <= b) {
        q.push({ v: nt1, c: c + 1 });
    }

    const nt2 = Number(v.toString() + "1");
    if (nt2 <= b) {
        q.push({ v: nt2, c: c + 1 });
    }
}

console.log(res);
