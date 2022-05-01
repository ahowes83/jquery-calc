$(document).ready(onReady);
let workingValue = '';
let currentEquation = {
  operandOne: '',
  operandTwo: '',
  operator: ''
}
//let error = $("#errorMessage");

function onReady() {
  console.log('Suis là');

  $(".number").on('click', addDigit);

  $(".operator").on('click', operate);

  $("#equals").on('click', equate);

  $("#backspace").on('click', function(){
    workingValue = workingValue.slice(0, workingValue.length - 1);
    updateDisplay();
  });

  $("#AC").on('click', clearAll);

  $("#pi").on('click', addPI);

  $("#dot").on('click', addDot);

}

function addDot() {
  if (!workingValue.includes('.')) {
    workingValue += '.';
    updateDisplay();
  }
}

function addPI() {
  workingValue = 'Math.PI';
  updateDisplay();
}

function addDigit(){
  workingValue += $(this).attr("id");
  updateDisplay();
}

function operate() {
  if (workingValue) {
    currentEquation.operandOne = workingValue;
    currentEquation.operator = $(this).attr("id");
    workingValue = '';
  } else {
   // error.empty();
   // error.append('Please enter an operand');
    alert('hey quit it')
  }
}

function equate() {
  if (currentEquation.operandOne && currentEquation.operator && workingValue) {
    currentEquation.operandTwo = workingValue;
    workingValue = '';
  } else {
    //error.empty();
  //  error.append('Please choose an operator first');
    alert('don\'t do that' )
  }
}

function clearAll() {
  workingValue = '';
  currentEquation.operandOne = '';
  currentEquation.operandTwo = '';
  currentEquation.operator = '';
  updateDisplay();
}

function updateDisplay() {
  $("#display").val(workingValue);
}