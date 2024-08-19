function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
var n = 10; // Số lượng số Fibonacci bạn muốn hiển thị
var sum = 0;
for (var i = 0; i < n; i++) {
    var fib = fibonacci(i);
    console.log(fib);
    sum += fib;
}
console.log("Tổng các số Fibonacci:", sum);
