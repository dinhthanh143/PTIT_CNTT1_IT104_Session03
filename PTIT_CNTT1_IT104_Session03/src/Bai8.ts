function operate(a: number | string, b: number | string): void {
    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNaN(numB)) {
        console.log("invalid input");
        return;
    }

    console.log(`Tong: ${numA + numB}`);
    console.log(`Hieu: ${numA - numB}`);
    console.log(`Tich: ${numA * numB}`);
    console.log(`Thuong: ${numB !== 0 ? numA / numB : "Khong chia dc cho 0"}`);
}

operate("10x",3)