const btnAdd = document.getElementById("btnAdd");
const btnSubtract = document.getElementById("btnSubtract");
const btnMultiply = document.getElementById("btnMultiply");
const btnDivide = document.getElementById("btnDivide");
const btnPower = document.getElementById("btnPower");
const btnSqrt = document.getElementById("btnSqrt");
const btnFactorial = document.getElementById("btnFactorial");
const calculateBtn = document.getElementById("calculate");
let currentOperator = "";
btnAdd?.addEventListener("click", () => (currentOperator = "+"));
btnSubtract?.addEventListener("click", () => (currentOperator = "-"));
btnMultiply?.addEventListener("click", () => (currentOperator = "*"));
btnDivide?.addEventListener("click", () => (currentOperator = "/"));
btnPower?.addEventListener("click", () => (currentOperator = "^"));
btnSqrt?.addEventListener("click", () => (currentOperator = "√"));
btnFactorial?.addEventListener("click", () => (currentOperator = "!"));
calculateBtn?.addEventListener("click", () => {
    const xInput = document.getElementById("input1");
    const yInput = document.getElementById("input2");
    const x = Number(xInput.value);
    const y = Number(yInput.value);
    if (isNaN(x) || isNaN(y)) {
        alert("Invalid input");
        return;
    }
    if (currentOperator === "!") {
        alert(`${x}! = ${factorial(x)}`);
        return;
    }
    if (currentOperator === "√") {
        alert(`√(${x}, ${y}) = ${sqrt(x, y)}`);
        return;
    }
    switch (currentOperator) {
        case "+":
            alert(`${x} + ${y} = ${x + y}`);
            break;
        case "-":
            alert(`${x} - ${y} = ${x - y}`);
            break;
        case "*":
            alert(`${x} × ${y} = ${x * y}`);
            break;
        case "/":
            alert(`${x} ÷ ${y} = ${x / y}`);
            break;
        case "^":
            alert(`${x} ^ ${y} = ${power(x, y)}`);
            break;
    }
});
function power(base, exponent) {
    return base ** exponent;
}
function sqrt(base, root) {
    if (root === 0)
        return NaN;
    return base ** (1 / root);
}
function factorial(n) {
    if (n < 0)
        return NaN;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
export {};
//# sourceMappingURL=Bai9.js.map