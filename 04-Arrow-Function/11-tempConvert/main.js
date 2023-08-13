let result = (f) => {
    const convert = ((f-32)/1.80);
    return convert.toFixed(2);
}

console.log(result(98.6));