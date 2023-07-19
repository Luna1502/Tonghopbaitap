//bai1
function kiemTraChiaHet(a, b) {
    if (a % b === 0) {
        console.log(`${a} chia hết cho ${b}`);
    } else {
        console.log(`${a} không chia hết cho ${b}`);
    }
}

let a = +prompt("Nhập số a: ");
let b = +prompt("Nhập số b: ");
kiemTraChiaHet(a, b);

//bai2
function kiemTraTuoi(tuoi) {
    if (tuoi >= 16) {
        console.log("Bạn đủ tuổi vào lớp 10");
    } else {
        console.log("Bạn không đủ tuổi vào lớp 10");
    }
}

let tuoi = parseInt(prompt("Nhập tuổi của học sinh: "));
kiemTraTuoi(tuoi);
//bai3
function kiemTraLonNho(so) {
    if (so < 0) {
        console.log(`${so} là số nhỏ hơn 0`);
    } else {
        console.log(`${so} là số lớn hơn hoặc bằng 0`);
    }
}

let so = +prompt("Nhập một số nguyên bất kỳ: ");
kiemTraLonNho(so);
//bai4
function timGiaTriLonNhat(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}

let so1 = +prompt("Nhập số thứ nhất: ");
let so2 = +prompt("Nhập số thứ hai: ");
let so3 = +prompt("Nhập số thứ ba: ")

let max = timGiaTriLonNhat(so1, so2, so3);
console.log(`Giá trị lớn nhất trong ba số là: ${max}`);
// bai4
function xepHangHocLuc(diemBaiKT, diemGiuaKy, diemCuoiKy) {
    let diemTrungBinh = (diemBaiKT + diemGiuaKy + diemCuoiKy) / 3;

    if (diemTrungBinh >= 8.5) {
        console.log("Học lực xuất sắc");
    } else if (diemTrungBinh >= 7) {
        console.log("Học lực giỏi");
    } else if (diemTrungBinh >= 5.5) {
        console.log("Học lực khá");
    } else if (diemTrungBinh >= 4) {
        console.log("Học lực trung bình");
    } else {
        console.log("Học lực yếu");
    }
}

let diemBaiKT = +prompt("Nhập điểm bài kiểm tra: ");
let diemGiuaKy = +prompt("Nhập điểm thi giữa kỳ: ");
let diemCuoiKy = +prompt("Nhập điểm thi cuối kỳ: ");

xepHangHocLuc(diemBaiKT, diemGiuaKy, diemCuoiKy);

//bai5
function tinhHoaHong(doanhSo) {
    let hoaHong = 0;

    if (doanhSo >= 100000000) {
        hoaHong = doanhSo * 0.1;
    } else if (doanhSo >= 50000000) {
        hoaHong = doanhSo * 0.07;
    } else if (doanhSo >= 20000000) {
        hoaHong = doanhSo * 0.05;
    } else if (doanhSo >= 10000000) {
        hoaHong = doanhSo * 0.03;
    } else {
        hoaHong = doanhSo * 0.01;
    }

    console.log(`Hoa hồng nhận được là: ${hoaHong}`);
}

let doanhSoBanHang = +prompt("Nhập mức doanh số bán hàng: ");
tinhHoaHong(doanhSoBanHang);
//bai6
function tinhCuocDienThoai(soPhutGoi) {
    let cuocCoBan = 25000;
    let soPhutMienPhi = 50;
    let cuocThem = 600;

    let soPhutVuotMienPhi = Math.max(0, soPhutGoi - soPhutMienPhi);
    let tienVuotMienPhi = soPhutVuotMienPhi * cuocThem;
    let tongCuoc = cuocCoBan + tienVuotMienPhi;

    console.log(`Tổng cước điện thoại: ${tongCuoc} VNĐ`);
}

let soPhutGoi = +prompt("Nhập số phút gọi điện thoại: ");
tinhCuocDienThoai(soPhutGoi);


