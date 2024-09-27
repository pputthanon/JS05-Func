function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); // undefined เนื่องจากไม่ได้ใส่ค่า age
console.log(sayHi(10)); // "Hi kid" , undefined, undefined