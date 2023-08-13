let isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if ( n % i == 0) return false;
    }
return true;
}


/// ternary ///
// let isPrime = (n) => {
//     for (i = 2; i < n ; i++) {
//         return ( n % i == 0)? false : true ;
//     }

// }
