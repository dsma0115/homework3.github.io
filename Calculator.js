let calculations = [];
let results = [];

function calculate() {
    let x = parseFloat(prompt("Enter the first number (x):"));
    if (isNaN(x)) return; 

    let y = parseFloat(prompt("Enter the second number (y):"));
    if (isNaN(y)) return; 

    let operator = prompt("Enter an operator (+, -, *, /, %):");
    if (!['+', '-', '*', '/', '%'].includes(operator)) return;

    let result;
    switch (operator) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = y !== 0 ? x / y : "Error: Division by zero";
            break;
        case "%":
            result = x % y;
            break;
    }

    calculations.push({ x, operator, y, result });
    if (typeof result === "number") results.push(result);

    updateResultsTable();
}

function updateResultsTable() {
    let resultsTable = document.getElementById("resultsTable");
    resultsTable.innerHTML = "<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>";

    calculations.forEach(calc => {
        resultsTable.innerHTML += `<tr><td>${calc.x}</td><td>${calc.operator}</td><td>${calc.y}</td><td>${calc.result}</td></tr>`;
    });

    if (results.length > 0) {
        let min = Math.min(...results);
        let max = Math.max(...results);
        let total = results.reduce((a, b) => a + b, 0);
        let avg = total / results.length;

        document.getElementById("summaryTable").innerHTML = `
            <tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>
            <tr><td>${min}</td><td>${max}</td><td>${avg}</td><td>${total}</td></tr>`;
    }
}

document.getElementById("calculateButton").onclick = calculate;
