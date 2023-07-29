let mang = [
  [1, 3, 4],
  [3, 4, 5],
  [5, 5, 6]
];

// Bài 1: Tính tổng các phần tử mảng 2 chiều.
function tinhTongMang2Chieu(mang) {
  let tong = 0;
  for (let i = 0; i < mang.length; i++) {
    for (let j = 0; j < mang[i].length; j++) {
      tong += mang[i][j];
    }
  }
  return tong;
}

console.log("Tổng các phần tử mảng 2 chiều:", tinhTongMang2Chieu(mang));

// Bài 2: In ra tổng các phần tử của từng hàng.
function tinhTongTungHang(mang) {
  for (let i = 0; i < mang.length; i++) {
    let tongHang = 0;
    for (let j = 0; j < mang[i].length; j++) {
      tongHang += mang[i][j];
    }
    console.log("Tổng hàng thứ", i + 1, ":", tongHang);
  }
}

tinhTongTungHang(mang);

// Bài 3: Tìm phần tử lớn nhất trong các hàng.
function phanTuLonNhatTungHang(mang) {
  let phanTuLonNhatCuaHang = [];
  for (let i = 0; i < mang.length; i++) {
    let max = mang[i][0];
    for (let j = 1; j < mang[i].length; j++) {
      if (mang[i][j] > max) {
        max = mang[i][j];
      }
    }
    phanTuLonNhatCuaHang.push(max);
  }
  return phanTuLonNhatCuaHang;
}

console.log("Phần tử lớn nhất của các hàng:", phanTuLonNhatTungHang(mang));

// Bài 3 (Nâng cao): Hiển thị tổng các phần tử của từng cột.
function tinhTongTungCot(mang) {
  let tongCot = new Array(mang[0].length).fill(0);

  for (let i = 0; i < mang.length; i++) {
    for (let j = 0; j < mang[i].length; j++) {
      tongCot[j] += mang[i][j];
    }
  }

  return tongCot;
}

console.log("Tổng các cột:", tinhTongTungCot(mang));

// Bài 4 (Nâng cao): Hiển thị phần tử lớn nhất của từng cột.
function phanTuLonNhatTungCot(mang) {
  let phanTuLonNhatCuaCot = new Array(mang[0].length).fill(mang[0][0]);

  for (let i = 0; i < mang.length; i++) {
    for (let j = 0; j < mang[i].length; j++) {
      if (mang[i][j] > phanTuLonNhatCuaCot[j]) {
        phanTuLonNhatCuaCot[j] = mang[i][j];
      }
    }
  }

  return phanTuLonNhatCuaCot;
}

console.log("Phần tử lớn nhất của từng cột:", phanTuLonNhatTungCot(mang));

// Bài Tập James
// bài 1
let mang2Chieu = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7]
];

function inMang2Chieu(mang) {
  for (let i = 0; i < mang.length; i++) {
    console.log("hàng", i);
    for (let j = 0; j < mang[i].length; j++) {
      console.log(" ", mang[i][j]);
    }
  }
}

inMang2Chieu(mang2Chieu);

// Bài 2
let mangKyTu = ['c', 's', 'c', '2', '6', '1'];

function daoNguocMang(mang) {
  return mang.reverse().join("");
}

console.log(daoNguocMang(mangKyTu));

// Bài 3

let mangKyTu = ['a', 'b', 'c', '1', '2', '3'];

function demSoKyTuSo(mang) {
  let dem = 0;
  for (let i = 0; i < mang.length; i++) {
    if (!isNaN(mang[i])) {
      dem++;
    }
  }
  return dem;
}

console.log("Số ký tự số trong mảng:", demSoKyTuSo(mangKyTu));

// Bài 4
function demSoTu(chuoi) {
  let tu = chuoi.trim().split(/\s+/);
  return tu.length;
}

let chuoiVao = "Viết một chương trình đếm số từ trong một chuỗi";
console.log("Số từ trong chuỗi:", demSoTu(chuoiVao));

//Bài 5
function kiemTraGiongNhau(chuoi1, chuoi2) {
  return chuoi1 === chuoi2;
}

let chuoi1 = "Chuỗi thứ nhất";
let chuoi2 = "Chuỗi thứ hai";
console.log("Hai chuỗi có giống nhau:", kiemTraGiongNhau(chuoi1, chuoi2));

// Bài 6
function thayTheDauGachBangGachDuoi(mang) {
  for (let i = 0; i < mang.length; i++) {
    if (mang[i] === '-') {
      mang[i] = '_';
    }
  }
  return mang.join("");
}

let mangKyTu = ['-', 'a', '-', 'b', 'c', '-', 'd', 'e'];
console.log("Mảng ký tự sau khi thay thế:", thayTheDauGachBangGachDuoi(mangKyTu));



