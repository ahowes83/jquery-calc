const express = require('express');
const router = express.Router();
let history = [];

router.get( '/history', (req, res)=>{
  console.log( '/calc GET' );
  calculate();
  res.send( history );
})

function piCheck(){
  if (history[i].operandOne === '3.14159') {
    history[i].operandOne = Math.PI;
  }
  if (history[i].operandTwo === '3.14159'){
    history[i].operandTwo = Math.PI;
  }
}

function calculate(){
  piCheck();

  for(let i=0; i< history.length; i++){
    let operator = history[i].operator;
    let result = history[i].result;
    let opOne = Number(history[i].operandOne);
    let opTwo = Number(history[i].operandTwo);

    switch (operator) {
      case '*':
        result = opOne * opTwo;
        break;
      case '/':
        result = opOne / opTwo;
        break;
      case '+':
        result = opOne + opTwo;
        break;
      case '-':
        result = opOne - opTwo;
        break;
      case '^':
        result = opOne ** opTwo;
        break;
      default:
        console.log('That\'s a weird operator');
    }
  }
}

router.post('/history', (req, res)=>{
  console.log('/calc POST:', req.body);
  history.push(req.body);
  res.sendStatus(200);
});



module.exports = router;