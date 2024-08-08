function printGPattern() {
    let n = 7;
    let pattern = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (
                (i === 0 && j > 0 && j < n - 1) ||
                (i === n - 1 && j > 0 && j < n - 1) ||
                (j === 0 && i > 0 && i < n - 1) ||
                (j === n - 1 && i >= Math.floor(n / 2) && i < n - 1) ||
                (i === Math.floor(n / 2) && j >= Math.floor(n / 2) && j < n - 1) ||
                (i === n - 1 && j === n - 1)
            ) {
                pattern += "*";
            } else {
                pattern += " ";
            }
        }
        pattern += "\n";
    }

    console.log(pattern);
}

printGPattern();
