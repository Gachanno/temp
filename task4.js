const getMultiplicationTable = (value) => {
    let header = "  ";
    for (let i = 1; i <= value; i++) {
        header += (i < 10 ? "  " : " ") + i;
    }

    console.log(header);
    
    for (let i = 1; i <= value; i++) {
        let row = (i < 10 ? " " : "") + i;

        for (let j = 1; j <= value; j++) {
            row += (i * j < 10 ? "  " : " ") + (i * j);
        }
        console.log(row);
    }
}

getMultiplicationTable(5);
