const getDivisor = (array) => {
    let arrayDivisor = [];

    if(array.length < 1) return [];
        else if(array.length === 1) return array;

    const maxValue = Math.max(...array);

    for(let i = 2; i < maxValue; i++){
        if (array.every((element) => element % i === 0)) arrayDivisor.push(i);
    }

    return arrayDivisor
}

console.log(getDivisor([42, 12, 18]))  