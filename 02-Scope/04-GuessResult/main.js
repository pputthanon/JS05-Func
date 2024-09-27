let x = 1;
function func() {
  console.log(x); // มีการเรียกใช้ก่อนประกาศ block scope chaining = error
  let x = 2;
}
func();