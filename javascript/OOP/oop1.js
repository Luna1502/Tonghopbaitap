class NhietDo {
  constructor(doCelsius) {
    this.doCelsius = doCelsius;
  }

  // Chuyển đổi từ độ C sang độ F
  getCelsiusToFahrenheit() {
    return (this.doCelsius * 9/5) + 32;
  }

  // Chuyển đổi từ độ C sang độ Kelvin
  getCelsiusToKelvin() {
    return this.doCelsius + 273;
  }
}

// Khởi tạo một đối tượng NhietDo với nhiệt độ 25 độ C
const nhietDoObject = new NhietDo(25);

// Lấy giá trị nhiệt độ độ F và độ Kelvin tương ứng
const giaTriFahrenheit = nhietDoObject.getCelsiusToFahrenheit();
const giaTriKelvin = nhietDoObject.getCelsiusToKelvin();

// Hiển thị kết quả
console.log(`Nhiệt độ F tương ứng: ${giaTriFahrenheit} độ F`);
console.log(`Nhiệt độ Kelvin tương ứng: ${giaTriKelvin} K`);
