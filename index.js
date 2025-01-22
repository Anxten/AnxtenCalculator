const display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function appendToPercent() {
    display.value = display.value / 100;
}

function appendToRoot() {
    display.value = Math.sqrt(display.value);
}

function appendToPower(value) {
    display.value = Math.pow(display.value, 2);
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
        if (isNaN(display.value)) {
            display.value = "Error";
        }
    }
    catch (error) {
        display.value = "Error";
    }
}