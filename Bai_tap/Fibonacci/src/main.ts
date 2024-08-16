let number1= 0;
let number2 = 1;
let sum = 0;
for (let i = 1; i < 19; i++) {
    let tong = number1 + number2;
    number1 = number2;
    number2 = tong;
    sum = tong + number1 + number2 - 1
} console.log(sum);

