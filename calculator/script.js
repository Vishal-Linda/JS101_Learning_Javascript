let currentInput = '';

function appendToResult(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('result').value = currentInput;
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentInput = '';
    }
}

function clearResult() {
    currentInput = '';
    document.getElementById('result').value = '';
}
