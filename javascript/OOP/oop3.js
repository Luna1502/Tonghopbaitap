
class Kind {
  constructor(nameKind, featherColor) {
    this.nameKind = nameKind;
    this.featherColor = featherColor;
  }
}


class Dog {
  constructor(nameDog, age, kind) {
    this.nameDog = nameDog;
    this.age = age;
    this.kind = kind;
  }
}


const huskyKind = new Kind("Husky", "Black and White");
const pugKind = new Kind("Pug", "Fawn");
const phocKind = new Kind("Phốc", "Gray");

// Tạo một số chó thuộc các loại đã tạo
const dog1 = new Dog("Dog 1", 2, huskyKind);
const dog2 = new Dog("Dog 2", 3, pugKind);
const dog3 = new Dog("Dog 3", 1, phocKind);


console.log(`${dog1.nameDog} là chó loại ${dog1.kind.nameKind}, màu lông ${dog1.kind.featherColor}, và nó đã ${dog1.age} tuổi.`);
console.log(`${dog2.nameDog} là chó loại ${dog2.kind.nameKind}, màu lông ${dog2.kind.featherColor}, và nó đã ${dog2.age} tuổi.`);
console.log(`${dog3.nameDog} là chó loại ${dog3.kind.nameKind}, màu lông ${dog3.kind.featherColor}, và nó đã ${dog3.age} tuổi.`);

class SanPham {
  constructor(id, ten, soLuong, gia) {
    this.id = id;
    this.ten = ten;
    this.soLuong = soLuong;
    this.gia = gia;
  }
}

class CuaHang {
  constructor() {
    this.danhSachSanPham = [];
  }

  them(sanPham) {
    this.danhSachSanPham.push(sanPham);
  }

  xoa(viTri) {
    if (viTri >= 0 && viTri < this.danhSachSanPham.length) {
      this.danhSachSanPham.splice(viTri, 1);
    }
  }

  tatCa() {
    return this.danhSachSanPham;
  }

  sua(viTri, sanPham) {
    if (viTri >= 0 && viTri < this.danhSachSanPham.length) {
      this.danhSachSanPham[viTri] = sanPham;
    }
  }

  laySanPhamGiaCao() {
    return this.danhSachSanPham.filter(sanPham => sanPham.gia > 2000);
  }
}

function main() {
  const cuaHang = new CuaHang();

  const sanPham1 = new SanPham(1, "San pham 1", 10, 1500);
  const sanPham2 = new SanPham(2, "San pham 2", 5, 3000);
  const sanPham3 = new SanPham(3, "San pham 3", 8, 2500);
  const sanPham4 = new SanPham(4, "San pham 4", 3, 1800);
  const sanPham5 = new SanPham(5, "San pham 5", 12, 2200);

  cuaHang.them(sanPham1);
  cuaHang.them(sanPham2);
  cuaHang.them(sanPham3);
  cuaHang.them(sanPham4);
  cuaHang.them(sanPham5);

  console.log("Tat ca san pham:");
  console.log(cuaHang.tatCa());

  cuaHang.xoa(2);
  console.log("Sau khi xoa san pham o vi tri 2:");
  console.log(cuaHang.tatCa());

  const sanPhamChinhSua = new SanPham(4, "San pham da chinh sua", 5, 2600);
  cuaHang.sua(3, sanPhamChinhSua);
  console.log("Sau khi chinh sua san pham o vi tri 3:");
  console.log(cuaHang.tatCa());

  const sanPhamGiaCao = cuaHang.laySanPhamGiaCao();
  console.log("San pham co gia cao (gia > 2000):");
  console.log(sanPhamGiaCao);
}

main();
