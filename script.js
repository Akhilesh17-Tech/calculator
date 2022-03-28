var buttons = document.getElementsByClassName("button");

var display = document.getElementById("display");

var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value) {
  return (
    value == "+" || value == "-" || value == "*" || value == "/" || value == "%"
  );
}
// var a = isOperator('+');
// console.log(a); // function will return boolean value is any value matches with above values it will return true else false

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // console.log(this.id); this.id means whatever we have clicked it will fetch id according to click.
    var value = this.getAttribute("data-value"); // it will fetch data-value which is defined by us.
    var text = display.textContent.trim(); // trim will remove whitespaces from both sides

    if (isOperator(value)) {
      operator = value;
      operand1 = parseFloat(text);
      display.textContent = "";
    } else if (value == "ac") {
      display.textContent = "";
    } else if (value == "sign") {
      operand1 = parseFloat(text);
      operand1 = -1 * operand1;
      display.textContent = operand1;
    } else if (value == ".") {
      if (!text.includes(".")) {
        display.textContent = text + ".";
      }
    } else if (value == "=") {
      operand2 = parseFloat(text);
      var result;
      if (operator == "%") {
        result = parseFloat(operand1 * operand2) / 100;
      } else {
        result = eval(operand1 + operator + operand2);
      }
      if (result) {
        display.textContent = result;
        operand1 = result;
        operand2 = null;
        operator = null;
      }
    } else {
      display.textContent += value;
    }
  });
}
