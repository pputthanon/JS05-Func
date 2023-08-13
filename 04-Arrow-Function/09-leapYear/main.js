// ควรทำกับตัวที่มีปัญหามากที่สุดก่อน

// let sum = (year) => {
//     if (year % 4 == 0 && year % 100 != 0) {
//         return true;
//     } else if (year % 100 === 0 && year % 400 != 0){
//         return false;
//     } else if (year % 400 === 0) {
//         return false;
//     } else return false;
// }

// console.log(sum(2000))


// 100 หารลงตัว = ไม่เป็น
// 400 ลงตัว = เป็น
// ที่เหลือหาร 4 ลงตัว = เป็น


//#2
// if (year % 400 == 0) {
//     return true;
// }

// else if (year % 100 == 0) {
//     return false;
// }

// else if (year % 4 == 0) {
//     return true;
// }
// return false;


//#3
// if (year % 400 == 0) {
//     return true;
// }

// if (year % 100 == 0) {
//     return false;
// }

// if (year % 4 == 0) {
//     return true;
// }
// return false;


//#4

// if (year % 100 === 0) {
//     return year % 400 == 0;
// }
// return year % 4 === 0;


//#5

// return year % 100 === 0 ? year % 400 == 0 : year % 4 === 0;
const sum = (year) => (year % 100 === 0 ? year % 400 == 0 : year % 4 === 0);

