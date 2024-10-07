const declensionPC = (inputint) => {

    if (inputint % 100 >= 11 && inputint % 100 <= 19) {
        return `${inputint} компьютеров`;
    }

    if (inputint % 10 >= 2 && inputint%100 <= 4) {
        return `${inputint} компьютера`;
    }

    if (inputint % 10 === 1) {
        return `${inputint} компьютер`;
    } 
    else {
        return `${inputint} компьютеров`;
    }
}

console.log(declensionPC(prompt("Введите число компьютеров")));
