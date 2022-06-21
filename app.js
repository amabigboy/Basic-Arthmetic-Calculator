let numOne = prompt('Input First Number');

let calcSymbol = prompt('Choose from this symbol  -  +  /  * ');

let numTwo = prompt('Input Second Number');

let result;

if (calcSymbol == '+' ) {
  result = Number(numOne) + Number(numTwo);
} else if (calcSymbol == '-' ) {
  result = Number(numOne) - Number(numTwo);
} else if (calcSymbol == '/' ) {
  result = Number(numOne) / Number(numTwo);
} else if (calcSymbol == '*' ) {
  result = Number(numOne) * Number(numTwo);
} else {
  result = "The symbol selected is not in these categories \n[ -, +, /, * ]";
}

alert(result);