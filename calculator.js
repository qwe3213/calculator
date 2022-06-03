const calculate = document.querySelector('#calculate');
let operation = '';




function relpy_click(calculate) {
    if (calculate == 'c'){
        operation;
    } else if (calculate != '=') {
        operation += calculate;
    } else {
        let operand1 = '';
        let operand2 = '';
        let operator = '';
        for (let i = 0; i < operation.length; i++) {
            if ('0' <= operation[i] && operation[i] <= '9') {
                if (operator) {
                    operand2 += operation[i];
                } else {
                    operand1 += operation[i];
                }
            } else {
                if (operator) {
                    if (operator == '+') {
                        operand1 = Number(operand1) + Number(operand2);
                      
                    } else if (operator =='-') {
                        operand1 = Number(operand1) - Number(operand2);
                    } else if (operator =='*') {

                        operand1 =Number(operand1) * Number(operand2);
                    }

                    operand1 = String(operand1)
                    operand2 = '';
                    operator = operation[i];
                } else {
                    operator = operation[i];
                }
            }
        }
        if (operator == '+') {
            operand1 = Number(operand1) + Number(operand2);
        } else if (operator == '-') {
            operand1 = Number(operand1) - Number(operand2);
        } else if(operator =='*') {
            operand1= Number(operand1) * Number(operand2);
        } 
        console.log(operation + " = " + operand1);
        operation = '';
    }
    console.log(calculate);
}



