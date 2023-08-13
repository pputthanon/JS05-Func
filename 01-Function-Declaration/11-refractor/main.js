// V.1 : ใช้ if แต่ห้ามใช้ else
// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } if (age < 18) {
//     return ("Did parents allow you?");
//   }
// }
 


// V.2 : ใช้ ? แทน if
// const checkAge = (age) => (age >= 18 ? "true" : "Did parents allow you?");



// V.3 : ใช้ || แทน if
function checkAge(age) {
  return (age > 18) || confirm("Did parents allow you?");
}
