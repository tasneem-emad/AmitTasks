function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let operator =  document.getElementById("operator").value;
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;
    if (operator =='+'){
        result = num1 + num2
    }
    else if (operator =='-'){
        result = num1 - num2
    }
    else if (operator =='*'){
        result = num1 * num2
    }
    else if (operator=='/'){
        if (num2 !== 0) {  // Check for division by zero
            result = num1 / num2;
        } else {
            result = 'Error: Division by zero';
        }
    }
    else {
        result = 'Invalid operator. Please use +, -, *, or /.';
    }
    document.getElementById('result').textContent="Result: " + result;
}

