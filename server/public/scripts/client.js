$(document).ready(onReady);
let workingValue = '';
let currentEquation = {
  operandOne: '',
  operandTwo: '',
  operator: '',
  result: ''
}
//let error = $("#errorMessage");

function onReady() {
  console.log('Suis là');

  $(".number").on('click', addDigit);

  $(".operator").on('click', operate);

  $("#equals").on('click', equate);

  $("#backspace").on('click', backspace);

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
  workingValue = '3.14159'; // Interpret this on server to mean 'Math.PI'
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
    upload();
    workingValue = '';
  } else {
    //error.empty();
  //  error.append('Please choose an operator first');
    alert('don\'t do that' )
  }
}

function backspace() {
  workingValue = workingValue.slice(0, workingValue.length - 1);
  updateDisplay();
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

function upload() {
  $.ajax({
    method: 'POST', // POST is for Create
    url: '/calcHistory',
    data: currentEquation
}).then( function( response ){
    console.log( 'back from POST:', response );
    //run getResults to update the DOM
    getResults();
}).catch( function( err ){
    console.log( err );
    alert( 'error adding result' );
})
}

function getResults(){
  $.ajax({
    method: 'GET',
    url: '/calcHistory'
}).then( function( response ){
    console.log( response );

    const el = $('#history');
    el.empty();
    for( let i=0; i< response.length; i++ ){
        el.append( `<li>${ response[i].operandOne } ${ response[i].operator } ${ response[i].operandTwo } = ${ response[i].result }</li>`);
    }
}).catch( function( err ){
    console.log( err );
    alert( 'error getting results' );
});
}
