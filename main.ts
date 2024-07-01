import inquirer from "inquirer";

async  function main(){
const answer = await inquirer.prompt ([
    {message: "Enter the first number:",type: "number", name: "firstNumber"},

    {message:"Enter the Second Number (if needed): ",type:"number", name: "secondNumber"},
 
    {message:"Select the one operator to perform operation",
        type:"list",
        name:"operator",
        choices:["Addition","Subtraction","Multiplication","Divison","Exponentiation",
            "Sin","Cosine","Tangent","Logarithm","SquareRoot"],

    },
])

let result;

// using Switch cases
switch (answer.operator){
    case "Addtion":
        result =answer.firstNumber +(answer.secondNumber ||0);
        break;

    case "Subtraction":
    result =answer.firstNumber -(answer.secondNumber ||0);
    break;

    case "Multiplication":
        result =answer.firstNumber *(answer.secondNumber ||1);
        break;

    case "Divison":
        if(answer.secondNumber ===0 ){
            console.log("cannot devide by zero");
            return;
        }
        result =answer.firstNumber  /(answer.secondNumber ||1);
        break;

        case "Exponentiation":
            result =Math.pow(answer.firstNumber ,answer.secondNumber ||1);
            break;
            
            case "Sin":
            result =Math.sin(answer.firstNumber );
            break;
            
            case "Cosine":
            result =Math.cos(answer.firstNumber);
            break;
            
            case "Tangent":
            result =Math.tan (answer.firstNumber);
            break;
            
            case "Logarithm":
            result =Math.pow(answer.firstNumber ,answer.secondNumber ||1);
            break;
            
            case "SquareRoot":
            result =Math.sqrt(answer.firstNumber );
            break;

            default :
            console.log("Please choose a valid operator")
            return;

}

console.log(`result ${result}`)
console.log("The End!");
}
main()