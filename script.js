 display = document.getElementById('display');

function appendDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'WTF';
    }
}
delto.addEventListener("click", () => {
    textInput.value = textInput.value.slice(0, -1); 
  });
