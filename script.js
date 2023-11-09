const numbers = document.querySelectorAll('.numbers');
const screenContent = document.querySelector('.screen-content');

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const devide = function(a, b){
    return a / b;
}

const multiply = function(a, b) {
    return a * b;
};

const readNumber = function() {
    if (screenContent.innerHTML.includes('.')){
        return parseFloat(screenContent.innerHTML);
    } else {
        return parseInt(screenContent.innerHTML);
    }
}

const calculate = function(sum){
    let answer;
    switch (sum.operation) {
        case '+':
            answer = add(sum.firstNumber, sum.secondNumber);
            break;
        case '-':
            answer = subtract(sum.firstNumber, sum.secondNumber);
            break;
        case '/':
            answer = devide(sum.firstNumber, sum.secondNumber)
            break;
        case '*':
            answer = multiply(sum.firstNumber, sum.secondNumber)
            break;
    }

    screenContent.innerHTML = answer;
}

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (screenContent.innerHTML === '0'){
            screenContent.innerHTML = number.value
        } else {
            screenContent.innerHTML += number.value;
        }
    });
});

document.querySelector('#clear').addEventListener('click', () => {
    if (screenContent.innerHTML !== '0'){
        if (screenContent.innerHTML.length === 1){
            screenContent.innerHTML = '0';
        } else {
            screenContent.innerHTML = screenContent.innerHTML.slice(0, -1);
        }
    }
});

let sum = {};
document.querySelector('#clear-screen').addEventListener('click', () => {
    screenContent.innerHTML = '0';
    sum = {};
});

document.querySelector('#sign-control').addEventListener('click', () => {
    if (screenContent.innerHTML !== '0'){
        screenContent.innerHTML = parseInt(screenContent.innerHTML) * -1;
    }
});

document.querySelectorAll('.operations').forEach( operation => {
    operation.addEventListener('click', () => {
        if (sum.hasOwnProperty('firstNumber') && sum.hasOwnProperty('operation')){
            sum.secondNumber = readNumber();
            calculate(sum);
            sum = {};
        }
        sum.firstNumber = readNumber();
        sum.operation = operation.value;
        screenContent.innerHTML = '0';
    });
});

document.querySelector('#equals').addEventListener('click', () => {
    if (sum.hasOwnProperty('firstNumber') && sum.hasOwnProperty('operation')){
        sum.secondNumber = readNumber();
        calculate(sum);
        sum = {};
    }
})