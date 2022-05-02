function piCheck(histList){
  if (histList[i].operandOne === '3.14159') {
    histList[i].operandOne = Math.PI;
  }
  if (histList[i].operandTwo === '3.14159'){
    histList[i].operandTwo = Math.PI;
  }
}

function calculate(histList){
  piCheck(histList);

  for(let i=0; i< histList.length; i++){
    let operator = histList[i].operator;
    let result = histList[i].result;
    let opOne = Number(histList[i].operandOne);
    let opTwo = Number(histList[i].operandTwo);

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