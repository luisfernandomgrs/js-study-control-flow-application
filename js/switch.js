
// Switch

let expression = 'c';

switch (expression) {
    case 'a':
        console.log("a")
        break;
    case 'b':
        console.log("b")
        break;
    default:
        console.log("default...")
        break;
}

function Calculate(nParamLeft = 0, nParamRight = 0, sOperator = "+") {
    let nReturn = 0;

    switch (sOperator) {
        case '+':
            nReturn = nParamLeft + nParamRight;
            break;
        case '-':
            nReturn = nParamLeft - nParamRight;
            break;
        case '*':
            nReturn = nParamLeft * nParamRight;
            break;
        case '/':
            nReturn = nParamLeft / nParamRight;
            break;
        case '%':
            nReturn = nParamLeft % nParamRight;
            break;
        case '**':
            nReturn = nParamLeft ** nParamRight;
            break;
        default:
            nReturn = 0;
            break;
    }

    console.log("Tipo de Expressão realizada: " + nParamLeft + " " + sOperator + " " + nParamRight);
    return nReturn;
}

console.log(Calculate(12,5));
console.log(Calculate(12,5,"-"));
console.log(Calculate(12,5,"*"));
console.log(Calculate(12,6,"/"));
console.log(Calculate(3,4,"**"));
console.log(Calculate(12,6,"%"));