//cau 1
console.log("==== cau 1 ===")
function timGiaTriLonThu3(arr) {
    let lonNhat = 0;
    let lonThu2 = 0;
    let lonThu3 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > lonNhat) {
            lonThu3 = lonThu2;
            lonThu2 = lonNhat;
            lonNhat = arr[i];
        } else if (arr[i] > lonThu2 && arr[i] !== lonNhat) {
            lonThu3 = lonThu2;
            lonThu2 = arr[i];
        } else if (arr[i] > lonThu3 && arr[i] !== lonNhat && arr[i] !== lonThu2) {
            lonThu3 = arr[i];
        }
    }

    return lonThu3;
}
const array = [2,3,4,5,6,1,8,7,9]
console.log("Giá trị lớn thứ 3 là:", timGiaTriLonThu3(array));

// cau 2
console.log("=== cau 2 ===")
function loaiBoTruocIndex(arr, index) {
    if (index >= 0 && index < arr.length) {
        const array = [];
        for (let i = index; i < arr.length; i++) {
            array.push(arr[i]);
        }
        return array;
    } else {
        return arr;
    }
}

const mangBanDau = [10, 20, 30, 40, 50, 60];
const index = 2;
console.log("Mảng sau khi loại bỏ:", loaiBoTruocIndex(mangBanDau, index));

console.log("=== cau 3 ===")

// cau 3
function kiemTraChuoi(str1, str2) {
    if (str1.length > str2.length) {
        return false;
    }
    for (let i = 0; i <= str2.length - str1.length; i++) {
        let found = true;
        for (let j = 0; j < str1.length; j++) {
            if (str2[i + j] !== str1[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return true;
        }
    }

    return false;
}

const str1 = "abc";
const str2 = "xyzabcuvw";

const ketQua = kiemTraChuoi(str1, str2);
console.log(ketQua);

