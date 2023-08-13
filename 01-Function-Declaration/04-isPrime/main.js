let n = 5;

function isPrime (n) {
    let isPrime = true;
    for (let divider = 2 ; divider < n ; divider++){
        if (n % divider == 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(n);
}


//Design
// 1- Input ? => Number ที่ใช้เช็ค
// 2- Logic implement
// 3- output ? => boolean
// number => boo

function checkPrime (num) {
    for (let d = 2; d < num; d++) {
        if (num % d == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(num);
}
