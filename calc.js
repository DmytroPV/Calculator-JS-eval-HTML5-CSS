// Screen clear
function screenClear() {
    document.getElementById("result").value = ""
}

// Delete last symbol
function eventD() {
    const delet1 = document.getElementById("result").value
    const delet2 = delet1.replace(/.$/, '')
    document.getElementById("result").value = delet2    
}

// Display values
function display(value) {
    document.getElementById("result").value += value;
}

// Function calculate 1 percend % and return result
function percent() {
    const k = document.getElementById("result").value
    const z = k/100
    document.getElementById("result").value = z
    window.onerror = function () {
        08.
        alert("Помилка синтаксису. Введіть коректний математичний оператор (+, -, *, /)")
        09.
    }
}

// Function calculate and return result
function calculate() {
    const k = document.getElementById("result").value
    const z = eval(k)
    document.getElementById("result").value = z
    window.onerror = function () {
        08.
        alert("Помилка синтаксису. Введіть коректний математичний оператор (+, -, *, /)")
        09.
    }
}