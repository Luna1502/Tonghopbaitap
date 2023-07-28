// Bài 1
function demSoNguyenLonHonHoacBangMuoi(mang) {
  let dem = 0;
  for (let i = 0; i < mang.length; i++) {
    if (mang[i] >= 10) {
      dem++;
    }
  }
  return dem;
}

const mang1 = [3, 8, 12, 5, 17, 9, 20, 15, 6, 25];
const ketQua1 = demSoNguyenLonHonHoacBangMuoi(mang1);
console.log("Số nguyên lớn hơn hoặc bằng 10 trong mảng:", ketQua1);

//

// Bài 2
function timGiaTriLonNhatVaViTri(mang) {
  let max = mang[0];
  let viTriMax = 0;

  for (let i = 1; i < mang.length; i++) {
    if (mang[i] > max) {
      max = mang[i];
      viTriMax = i;
    }
  }

  return { max, viTriMax };
}

const mang2 = [12, 45, 8, 32, 17, 9, 52, 37, 19, 65];
const { max: giaTriMax, viTriMax } = timGiaTriLonNhatVaViTri(mang2);
console.log("Giá trị lớn nhất trong mảng:", giaTriMax);
console.log("Vị trí của giá trị lớn nhất:", viTriMax);


// Bài 3
function timGiaTriLonNhatVaTrungBinh(mang) {
  let max = mang[0];
  let tong = mang[0];

  for (let i = 1; i < mang.length; i++) {
    tong += mang[i];
    if (mang[i] > max) {
      max = mang[i];
    }
  }

  const trungBinh = tong / mang.length;
  return { max, trungBinh };
}

const mang3 = [23, 17, 9, 32, 45, 12, 8, 37, 20, 15];
const { max: giaTriMax, trungBinh } = timGiaTriLonNhatVaTrungBinh(mang3);
console.log("Giá trị lớn nhất trong mảng:", giaTriMax);
console.log("Giá trị trung bình của các phần tử trong mảng:", trungBinh);

// Bài 4
function daoNguocMang(mang) {
  return mang.reverse();
}

const mang4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mangDaoNguoc = daoNguocMang(mang4);
console.log("Mảng sau khi đảo ngược:", mangDaoNguoc);

// Bài 5
function demSoNguyenAm(chuoi) {
  const mangSoNguyen = chuoi.split(" ").map(Number);
  let dem = 0;

  for (let i = 0; i < mangSoNguyen.length; i++) {
    if (mangSoNguyen[i] < 0) {
      dem++;
    }
  }

  return dem;
}

const chuoiSoNguyen = "3 -5 8 -10 12 -7 9";
const ketQua5 = demSoNguyenAm(chuoiSoNguyen);
console.log("Số nguyên âm trong chuỗi:", ketQua5);

// Bài 6
function kiemTraGiaTriTrongMang(mang, giaTri) {
  return mang.includes(giaTri);
}

const mang6 = [12, 45, 8, 32, 17, 9, 52, 37, 19, 65];
const giaTriCanTim = 37;
const ketQua6 = kiemTraGiaTriTrongMang(mang6, giaTriCanTim);

if (ketQua6) {
  console.log(`${giaTriCanTim} thuộc mảng.`);
} else {
  console.log(`${giaTriCanTim} không thuộc mảng.`);
}

// Bài 7
function xoaGiaTriTrongMang(mang, giaTri) {
  const viTri = mang.indexOf(giaTri);
  if (viTri !== -1) {
    mang.splice(viTri, 1);
  }
}

const mang7 = [12, 45, 8, 32, 17, 9, 52, 37, 19, 65];
const giaTriCanXoa = 37;
xoaGiaTriTrongMang(mang7, giaTriCanXoa);
console.log("Mảng sau khi xoá phần tử:", mang7);

// Bài 8
function sapXepGiamDan(mang) {
  return mang.sort((a, b) => b - a);
}

const mang8 = [12, 45, 8, 32, 17, 9, 52, 37, 19, 65];
const mangDaSapXep = sapXepGiamDan(mang8);
console.log("Mảng sau khi sắp xếp giảm dần:", mangDaSapXep);

// Bài 9
function noiHaiMang(mangA, mangB) {
  const mangC = [...mangA, ...mangB];
  return mangC;
}

const mangA = [1, 2, 3, 4, 5];
const mangB = [6, 7, 8, 9, 10];
const mangC = noiHaiMang(mangA, mangB);
console.log("Mảng sau khi nối:", mangC);
