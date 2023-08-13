/*
### การเขียนฟังก์ชัน 2 แบบหลักๆ

1. Function Declaration / Named Function
2. Function Expresstion / มักจะถูกเขียนในรูปของ Anonymous Function
*/

/* 
    การใช้งานฟังก์ชันต้อง
    1. ประกาศฟังก์ชัน => กำหนดชื่อ, input
    2. เรียกใช้งาน
*/


// 1- define
function sayHi (name, lastname) {
    console.log (`Hello ${name} ${lastname}`);
}

// 2- call
sayHi('Bee',"Putthanon");
sayHi('Do','Kyungsoo');


// Return Value : ผลลัพธ์ที่ได้จากการ run function จนเสร็จ
// add(5,6) == Return value, FN Result

function add (x,y) {
    // 0s
    let result = x+y;
    // 5s
    return result;
}

console.log (11 === add(5,6)); 

let r = add(5,6); // reuseable result  => 3 statement นี้ใช้เวลา 1 ชม
console.log(r);
console.log(r);


console.log(add(5,6)); // one time use => 2 statement นี้ใช้เวลา  2 ชม
console.log(add(5,6)); // one time use


function isEven(n) {
    // if (n % 2 == 0) {
    //     return true;
    // } else {
    //     return false;
    // }


    // if (n % 2 == 0) {
    //     return true;
    // } 
    // return false;


    return n % 2 == 0;
    // return <expression>
    // return 5 % 2 === 0 (false)
    
}

console.log(isEven(5));


///*** Check Point
// - ประกาศเป็น : Declare
// - รับ input : Params
// - เช้าใจเรื่อง return : Return
// - รับฟังก์ชัน : Call


// # FN Expression

let a = 5 * 2 + 7;
// FORMAT : variable = expression

/* 
Expression : สิ่งที่สามารถ Evaluate เป็น Single value ได้
    - Single Value : 7
    - Combine expression : 7 + 2
    - FN result : add (7,2)
*/

let myFunc = add;
let z = console.log;
// FORMAT : variable = FN (FN Expression)
// FN Expression : การ assign FN ให้กับ Variable

console.log(myFunc(5,2));
z('Hi') // z = console.log;


// Anonymous Function

// Syntax : FN Expression
// อธิบาย : กำลัง Assing Anonymous FN ให้ตัวแปร sayHello
const sayHello = function (name) {
    console,log ('Hi' + name);
}

sayHello("Expression");
// ห้ามเรียกใช้ก่อนประกาศตัวแปร


// Assign FN ให้ ตัวแปร สามารถทำได้หลายวิธี
// 1A - function add () {}
// 2A - let add = function () {}
// 2B - let add = () => {}


// const minus = (a, b) => {
//     return a - b;
// };

const minus = (a,b) => a - b
const minusTwo = a => a - 2
const two = 2;


console.log(minusTwo(5));
console.log(two);

console.log(minusTwo);
console.log(two());