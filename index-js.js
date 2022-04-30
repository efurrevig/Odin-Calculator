function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function power(a,b) {
    return Math.pow(a, b);
}

function operate(operator, a, b) {
    if (operator === 'add') {
        return add(a,b);
    } else if (operator === 'subtract') {
        return subtract(a,b);
    } else if (operator === 'multiply') {
        return multiply(a,b);
    } else if (operator === 'divide') {
        return divide(a,b);
    } else if (operator === 'exponent') {
        return power(a, b);
    } else {
        console.log('operate error');
    }

}

function clearDisplay() {
    display.textContent = '';
    firstNum = 0;
    secondNum = 0;
    operator = '';
}

function resetValues() {
    firstNum = 0;
    secondNum = 0;
    operator = '';
}

let firstNum = 0;
let secondNum = 0;
let operator = '';

//number buttons
const numbers = document.querySelectorAll("button.number");
const display = document.getElementById('display');

numbers.forEach(number => number.addEventListener('click', () => {
    if (operator != '') {
        display.textContent = '';
    }
    const value = number.value;
    display.textContent += value;
}));

//operator buttons
const operation = document.querySelectorAll("button.operator");

operation.forEach(operation => operation.addEventListener('click', () => {
    if (operator != '') {
        return;
    }
    const value = operation.textContent;
    operator = operation.value;
    firstNum = parseInt(display.textContent, 10);
    display.textContent = value;
    })
);

//equals buttons
const equals = document.querySelector("button.equals")

equals.addEventListener('click', () => {
    secondNum = parseInt(display.textContent, 10);
    let answer = operate(operator, firstNum, secondNum);
    display.textContent = answer;
    resetValues();
})

/* if (display.textContent === '') {
    firstNum = number.value;
} else {
    secondNum = number.value;
} */