// Bài tập sau giờ lý thuyết:
//     In ra 100 chữ 'Hello'
for (let i = 0; i < 100; i++) {
    console.log('Hello');
}

// Nhập vào N từ prompt. In ra N lần chữ 'Hello'
let N = +prompt("Nhập số lần in 'Hello': ");
for (let i = 0; i < N; i++) {
    console.log('Hello');
}

// In ra cac số từ 1 đến 1000
for (let i = 1; i <= 1000; i++) {
    console.log(i);
}

// In ra cac số từ a đến b;
let a = +prompt("Nhập số a: ");
let b = +prompt("Nhập số b: ");
for (let i = a; i <= b; i++) {
    console.log(i);
}

// In ra cac số từ a đến b, mỗi số trong 1 thẻ <h1>;
let a = +prompt("Nhập số a: ");
let b = +prompt("Nhập số b: ");
for (let i = a; i <= b; i++) {
    document.write('<h1>' + i + '</h1>');
}

// In ra các số từ a đến b số chẵn trong h2, so le trong h1;
let a = +prompt("Nhập số a: ");
let b = +prompt("Nhập số b: ");
for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
        document.write('<h2>' + i + '</h2>');
    } else {
        document.write('<h1>' + i + '</h1>');
    }
}

// Tính tích.
let a = +prompt("Nhập số a: ");
let b = +prompt("Nhập số b: ");
let product = 1;
for (let i = a; i <= b; i++) {
    product *= i;
}
console.log("Tích các số từ a đến b là: " + product);

//     Tính Tổng các số chia 5 dư 2 từ a đến b.
let a = +prompt("Nhập số a: ");
let b = +prompt("Nhập số b: ");
let sum = 0;
for (let i = a; i <= b; i++) {
    if (i % 5 === 2) {
        sum += i;
    }
}
console.log("Tổng các số chia 5 dư 2 từ a đến b là: " + sum);

//     Đếm các số chia 5 dư 2 từ a đến b
let a = prompt("Nhập số a: ");
let b = prompt("Nhập số b: ");
let count = 0;
for (let i = a; i <= b; i++) {
    if (i % 5 === 2) {
        count++;
    }
}
console.log("Số các số chia 5 dư 2 từ a đến b là: " + count);

// In ra màn hình 0, 5 ,10,15, 20, ... 50.
for (let i = 0; i <= 50; i += 5) {
    console.log(i);
}

// In ra  màn hình 10, 9, 8, 7, 6, ... 0.
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

// In ra màn hình 50, 45, 40, .. 0
for (let i = 50; i >= 0; i -= 5) {
    console.log(i);
}


// In ra bảng cửu chương 5.
let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + number * i);
}
