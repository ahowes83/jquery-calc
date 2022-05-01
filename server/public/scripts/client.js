$(document).ready(onReady);
let workingValue = '';
let currentEquation = {
  operandOne: '',
  operandTwo: '',
  operator: ''
}
let error = $("#errorMessage");

function onReady() {
  console.log('Suis là');

  $(".number").click(function(){
    workingValue += $(this).attr("id");
    updateDisplay();
  });

  $(".operator").on('click', operate);

  $("#equals").on('click', equate);

  $("#backspace").on('click', function(){
    workingValue = workingValue.slice(0, (workingValue.length - 1));
  });

  $("#AC").on('click', clearAll);
}

function operate() {
  if (workingValue) {
    currentEquation.operandOne = workingValue;
    currentEquation.operator = $(this).attr("id");
    workingValue = '';
  } else {

    error.empty();
    error.append('Please enter an operand');
  }
}

function equate() {
  if (currentEquation.operandOne && currentEquation.operator && workingValue) {
    currentEquation.operandTwo = workingValue;
    workingValue = '';
  } else {
    error.empty();
    error.append('Please choose an operator first');
  }
}

function clearAll() {
  workingValue = '';
  currentEquation.operandOne = '';
  currentEquation.operandTwo = '';
  currentEquation.operator = '';
}

function updateDisplay() {
  $("#display").val(workingValue);
}