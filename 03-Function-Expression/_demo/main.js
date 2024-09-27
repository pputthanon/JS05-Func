console.log ("anonymous");

//#1 : Named fn, FN Declaration
// function add () {}

//#2A : Anonymous ไม่มีชื่อ

//IIFE : Intermediate Invokr Function Expression => ทำมาใช้แล้วทิ้ง ประหยัดเมม เอาไปใช้ต่อไม่ได้จ้า
// (function (x,y) 
//     {console.log(x+y)
//         return x + y;
// }) (10,5);


// let a = (function (x,y){  
//         return x + y;
// }) (10,5); // 15 ไม่เก็บอัลกอริทึม แต่เก็บแค่ผลลัพธ์ เอา result ไปใช้ได้อย่างเดียว




// /// #2B Assign FN for Variable no matter FN มีชื่อ/ไม่มีชื่อ แอดได้หมด
// // Variable = Expression
// let myVar = ((5 *2 *20) / 2)%7;

// //Variable = FN (FN == Expression)
// const myFunc = function (x,y) {
//     return x + y;
// };


// console.log (myFunc(5,10));


// // Assign named FN to Variable
// const a = console.log;
// a('hi'); //== console.log(a)



// ###ANONYM (Modern : Arrow Syntax)

let a = function (x) {
    return x **2;
} 

//shortest
let t = x => x +2;
let b = (x,y) => x+y;

//bracket ต้องใส่ return!!!
let c = (x,y) => {
    let result = x+y;
    return result;
}

console.log(a(3));
console.log(t(3));
console.log(b(3,5));
console.log(c(3,5));

