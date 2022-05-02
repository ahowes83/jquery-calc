const express = require('express');
const router = express.Router();
let history = [];
let newAnswer = [];

function piCheck(equation){
  if (equation.operandOne === '3.14159') {
    equation.operandOne = Math.PI;
  }
  if (equation.operandTwo === '3.14159'){
    equation.operandTwo = Math.PI;
  }
}

function calculate(equationIn){
  let equation = {
    ...equationIn
  }

  piCheck(equation);

  let operator = equation.operator;
  let opOne = Number(equation.operandOne);
  let opTwo = Number(equation.operandTwo);
  console.log(opOne, opTwo, operator);
  switch (operator) {
    case '*':
      equation.result = opOne * opTwo;
      break;
    case '/':
      equation.result = opOne / opTwo;
      break;
    case '+':
      equation.result = opOne + opTwo;
      break;
    case '-':
      equation.result = opOne - opTwo;
      break;
    case '^':
      equation.result = opOne ** opTwo;
      break;
    default:
      console.log('That\'s a weird operator');
  }
  newAnswer = equation.result;
  return equation;
}

router.get( '/', (req, res)=>{
  console.log( '/calc GET' );
  res.send( {
    solution: newAnswer,
    allData: history
  });
});



router.post('/', (req, res)=>{
  console.log('/calc POST:', req.body);
  let postCalc = calculate(req.body);
  history.push(postCalc);
  res.sendStatus(200);
});



module.exports = router;