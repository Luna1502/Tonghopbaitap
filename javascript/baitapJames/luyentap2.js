// Bài 1: Chuyển từ độ C sang độ F
function cToF(C) {
    const F = C * 9 / 5 + 32
    alert(F)
}

let C = +prompt("nhap do C")
cToF(C)
// Bài 2: Chuyển từ mét sang feet:
//
//     ft =m * 3.2808
function metToFeet(met) {
    let feet = met * 3.2808
    alert(feet)
}

let met = +prompt("nhap met")
metToFeet(met)

// Bài 3: Tính diện tích hình vuông khi biết cạnh a.
function tinhDienTichHinhVuong(a) {
    const S = a * a
    alert(S)
}

let canhA = +prompt("nhap canh")
tinhDienTichHinhVuong(canhA)
//
// Bài 4: Tính diện tích hình  chữ nhật khi biết 02 cạnh a, b.
function dienTichHCN(a1, b1) {
    let S1 = a1 * b1
    alert(S1)
}

//     Bài 5: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.
function dienTichTGV(a2, b2) {
    let S2 = 0.5 * a2 * b2
    alert(S2)
}

let canhA1 = +prompt("canh a")
let canhA2 = +prompt("canh day")
dienTichTGV(canhA1, canhA2)

//     Bài 6: Giải phương trình bậc 1.
function phuongTrinhBacNhat(a3, b3) {
    if (a !== 0) {
        let x = -b3 / a3
        alert(`Nghiem pt bac nhat la: ${x}`)
    } else if (b === 0) {
        alert("Vo so nghiem")
    } else {
        alert("vo nghiem")
    }
}

let a63 = +prompt("nhap a")
let b63 = +prompt("nhap b")
phuongTrinhBacNhat(a63, b63)
// Bài 7: Giải phương trình bậc 2.
function giaiPhuongTrinhBacHai(a, b, c) {
    let delta = b * b - 4 * a * c;

    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert(`nghiem 1: ${x1}, nghiem2: ${x2}`);
    } else if (delta === 0) {
        let x = -b / (2 * a);
        alert(`nghiem kep la: ${x}`)
    } else {
       alert("PT vo no")

    }
}
let a71 = +prompt("nhap a")
let a72 = +prompt("nhap b")
let a73 = +prompt("nhap c")
giaiPhuongTrinhBacHai(a71, a72, a73);

// Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không. Một số nguyên là tuổi của một người khi nhỏ 120 và lơn hơn 0.
function checkTuoi(tuoi){
    if(0 < tuoi < 120){
        alert("chinh xac")
    }
}
let tuoi = +prompt("nhap tuoi vao")
// Bài 9: Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác. Điều kiện để a,b,c là cạnh của một tam giác là:
//
// a,b,c > 0
// a + b > c
// b + c > a
// a + c > b
function checkTamGiac(a,b,c) {
    if (a > 0 && b > 0 && c > 0) {
        if (a + b > c) {
            if (b + c > a) {
                if (a + c > b) {
                    alert(`3 canh a: ${a}, b: ${b}, c: ${c} la 1 tam giac`)
                }
            }
        }

    }
}
let canh1 = +prompt("nhap canh a")
let canh2 = +prompt("nhap canh b")
let canh3 = +prompt("nhap canh c")
checkTamGiac(canh1, canh2, canh3)
// Bài 10: Viết chương trình tính giá điện.

//     Bài 11: Viết chương trình tính thuế thu nhập cá nhân.
function tinhThue(tienLuong) {
    let thueNop
    if(tienLuong > 1000){
        thueNop = tienLuong * 0.1
    } else if(tienLuong > 800){
        thueNop = tienLuong * 0.05
    } else if(tienLuong > 600){
        thueNop = tienLuong * 0.025
    }
}
let tien = +prompt("nhap luong")
tinhThue(tien)
//     Bài 12: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lãi con) khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng.
function tinhLaiKep(PV, i, n){
    let FV = PV * Math.pow((1 + i), n)
    alert(`So lai ban nhan duoc la: ${FV}`)
}
let PV = +prompt("nhap so tien cho")
let i = +prompt("nhap lai suat")
let n = +prompt("Nhap so nam gui")
tinhLaiKep(PV, i, n)