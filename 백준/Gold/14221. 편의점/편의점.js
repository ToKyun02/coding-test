function heappush(pq, data) {
    pq.push(data);

    let cur = pq.length - 1;
    while (cur > 0) {
        const parent = (cur - 1) >> 1;
        if (pq[parent]["dist"] <= pq[cur]["dist"]) break;
        [pq[parent], pq[cur]] = [pq[cur], pq[parent]];
        cur = parent;
    }
}

function heappop(pq) {
    if (pq.length <= 1) return pq.pop();
    const root = pq[0];
    pq[0] = pq.pop();
    let cur = 0;
    while (cur * 2 + 1 < pq.length) {
        let l = cur * 2 + 1,
            r = cur * 2 + 2,
            s = l;
        if (r < pq.length && pq[r]["dist"] < pq[l]["dist"]) s = r;

        if (pq[cur]["dist"] <= pq[s]["dist"]) break;
        [pq[cur], pq[s]] = [pq[s], pq[cur]];
        cur = s;
    }
    return root;
}

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

[N, M] = input[0].split(" ").map((x) => Number(x));
const graph = {};

for (let i = 1; i < M + 1; i++) {
    const [u, v, w] = input[i].split(" ").map((x) => Number(x));
    if (graph[u] == undefined) {
        graph[u] = [];
    }
    if (graph[v] == undefined) {
        graph[v] = [];
    }
    graph[u].push([v, w]);
    graph[v].push([u, w]);
}

[P, Q] = input[M + 1].split(" ").map((x) => Number(x));
const homes = input[M + 2].split(" ").map((x) => Number(x));
const targets = input[M + 3].split(" ").map((x) => Number(x));

const pq = [];

const distances = Array.from({ length: N + 1 }, () => Infinity);
targets.forEach((target) => {
    pq.push({
        node: target,
        dist: 0,
    });
    distances[target] = 0;
});

while (pq.length != 0) {
    const { node, dist } = heappop(pq);
    if (dist > distances[node]) {
        continue;
    }

    graph[node].forEach((x) => {
        const [neighbor, w] = x;
        const ntDist = dist + w;
        if (ntDist < distances[neighbor]) {
            distances[neighbor] = ntDist;
            heappush(pq, { node: neighbor, dist: ntDist });
        }
    });
}

let res = 0;
let min_v = Infinity;
homes.sort((a, b) => a - b);

for (let i = 0; i < P; i++) {
    const home = homes[i];
    if (distances[home] < min_v) {
        min_v = distances[home];
        res = home;
    }
}

console.log(res);
