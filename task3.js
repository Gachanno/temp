const getPrimeNumbers = (value1, value2) => {
    const maxValue = Math.max(value1, value2);
    const minValue = Math.min(value1, value2);
    let primeNumb = [];

    for(let i = minValue; i <= maxValue; i++){
        if(i <= 1) continue
        let valueBool = true;

        for(let l = 2; l < i; l++){
            if(i % l === 0) {
                valueBool = false;
                break;
            }
        }

        if(valueBool) primeNumb.push(i);
    }
    return primeNumb;
}

console.log(getPrimeNumbers(11, 20))  
