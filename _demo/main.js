// test push, feedback
// update solution


// function soundOfBird (){
//     console.log("เสียง นกกรงหัวจุกมันริก")
//     console.log("จก");
//     for (let i = 1 ; i <= 10 ; i++){
//         console.log("กวิก");
//     }

// }

// soundOfBird();
// soundOfBird();
// soundOfBird();
// soundOfBird();
// soundOfBird();


function isPrime(n){
// let n = 5
let isPrime = true;
for (let divider = 2; divider < n; divider++) {
    if( n % divider == 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) console.log(n)
}