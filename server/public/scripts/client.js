$(document).ready(onReady);
let workingValue = '';
let currentEquation = {
  operandOne: '',
  operandTwo: '',
  operator: '',
  result: ''
}
let allData = [];
//let error = $("#errorMessage");

function onReady() {
  console.log('Suis là');

  $(".number").on('click', addDigit);

  $(".operator").on('click', operate);

  $("#history").on('click', '.reDo', reDo);

  $("#equals").on('click', equate);

  $("#backspace").on('click', backspace);

  $("#AC").on('click', clearAll);

  $("#pi").on('click', addPI);

  $("#dot").on('click', addDot);

  $("#clearHistory").on('click', clearHistory);
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

function clearEquation() {
  currentEquation.operandOne = '';
  currentEquation.operandTwo = '';
  currentEquation.operator = '';
}

function upload() {
  $.ajax({
    method: 'POST',
    url: '/calcHistory',
    data: currentEquation
}).then( function( response ){
    console.log( 'back from POST:', response );
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
    allData = response.allData;
    workingValue = (response.solution).toString();

    const el = $('#history');
    el.empty();
    for( let i=0; i< response.allData.length; i++ ){
        el.append( `<li><button data-Index="${i}" class="reDo"> ${response.allData[i].operandOne} ${response.allData[i].operator} ${response.allData[i].operandTwo} = ${ response.allData[i].result }</button></li>`);
    }
    updateDisplay();
    clearEquation();
}).catch( function( err ){
    console.log( err );
    alert( 'error getting results' );
});
}

function clearHistory(){
  $.ajax({
    method: 'DELETE',
    url: '/calcHistory'
  }).then(function (response){
    const el = $('#history');
    el.empty();
    clearAll();
  }).catch(function(err){
    console.log(err);
    alert('error clearing history');
  });
}

function reDo(){
  let index = $(this).data('index');
  currentEquation.operandOne = allData[index].operandOne;
  currentEquation.operator = allData[index].operator;
  workingValue = allData[index].operandTwo;
  equate();
}