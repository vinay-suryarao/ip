function fibonacciIterator(limit = 100) {
let a = 0, b = 1;
return {
[Symbol.iterator]() {
return this;
},
next() {
let current = a;
if (current > limit) {
return { done: true };
}
[a, b] = [b, a + b];
return { value: current, done: false };
}
};
}
for (const num of fibonacciIterator(100)) {
console.log(num);
}