function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let n: number = 10; // Số lượng số Fibonacci bạn muốn hiển thị
let sum: number = 0;

for (let i = 0; i < n; i++) {
    let fib = fibonacci(i);
    console.log(fib);
    sum += fib;
}

console.log("Tổng các số Fibonacci:", sum);