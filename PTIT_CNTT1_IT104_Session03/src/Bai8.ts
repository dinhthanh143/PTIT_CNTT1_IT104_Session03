function add(a: number | string, b: number | string): void {
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
        console.log("error");
        return;
    }
    console.log(numA + numB);
}

function subtract(a: number | string, b: number | string): void {
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
        console.log("error");
        return;
    }
    console.log(numA - numB);
}

function multiply(a: number | string, b: number | string): void {
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
                console.log("error");

        return;
    }
    console.log(numA * numB);
}

function divide(a: number | string, b: number | string): void {
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
        console.log("error");
        return;
    }
    if (numB === 0) {
        console.log("ko chia dc cho 0");
        return;
    }
    console.log(numA / numB);
}

add("102", "60");
subtract("50", 30);
multiply(2, "7");
divide("64", "5");
