const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const operation = document.getElementById('operation')
const resultVal = document.getElementById('result')
let operations = []
var begin = null
try {
    begin = document.getElementById("begin")
    begin.innerHTML = "Begin calculator"
} catch(err) {
    begin = document.createElement("p")
    begin.innerHTML = "Begin calculator"
    const headerElement = document.querySelector("h1")
    headerElement.after(begin)
} finally {
    console.log("An Error Occurs")
}

class divideBy0Err extends Error {
    constructor(message) {
        super(message);
        this.name = "divideBy0Err";
    }
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const numA = Number(num1.value)
    const numB = Number(num2.value)
    let result = undefined
    switch (operation.value) {
        case '+':
            result = numA + numB
            break
        case '-':
            result = numA - numB
            break
        case '*':
            result = numA * numB
            break
        case '/':
            try {
                if (numB == 0) throw divideBy0Err;
                result = numA / numB
            } catch (divideBy0Err) {
                result = 'undefined value'
            } finally {
                break
            }
        default:
            throw 'Operation is Invalid'
            break
    }
    resultVal.innerHTML = `The Final Result is ${result}`
    operations.push({
        num1: numA,
        num2: numB,
        operation: operation.value,
        result: result
    })
})

function consoleLog() {
    console.log(`Number 1 is ${num1.value}`)
    console.log(`Number 2 is ${num2.value}`)
}

function consoleError() {
    console.error('Not Divisible by 0')
}

function consoleTable() {
    console.table(operations)
}

function consoleDir() {
    console.dir(document.head)
}

function consoleDirxml() {
    console.dirxml(document)
}

function consoleGroup() {
    const label = 'Operations'
    console.group(label)
    for (let i = 0; i < operations.length; i++) {
        const calc = operations[i]
        console.info(`${calc.num1} ${calc.operation} ${calc.num2} = ${calc.result}`)
    }
    console.groupEnd(label)
}

let sum, timeout
function consoleTime() {
    console.log('Adding Opearions')
    console.time()
    sum = 0
    function callback() {
        sum++
        console.log(sum)
        timeout = setTimeout(callback, 0)
    }
    timeout = setTimeout(callback, 0)
}

function consoleTimeEnd() {
    clearTimeout(timeout)
    console.log(`Do ${sum} Additions`)
    console.timeEnd()
}

function consoleTrace() {
    const func = () => {
        testLog()
        console.trace()
    }
    func()
}

function globalError() {
    throw 'A Global Error Occurs'
}

window.onerror = (errorMessage, url, lineNumber) => {
    console.log('An Error Occurs')
}
