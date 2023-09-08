import _ from 'lodash';
import PromptSync from 'prompt-sync';

//Create a function that will take the parameter of farenheit and output celcius
const farenheit = 95

export function transformFarenheitToCelcius(farenheit) {
    const celcius = (farenheit - 32)*(5/9)

    return celcius;
}

// transformFarenheitToCelcius(farenheit)

// Create a function that will play a game of Rock Paper Scissors
const userChoice = 'rock'

export function rockPaperScissors(userChoice) {
    const choices = ['rock', 'paper', 'scissors']
    const computerDecision = Math.floor(Math.random() * 3);
    const computerChoice = choices[computerDecision]
    console.log('----------computerChoice----------', computerChoice);

    if (userChoice === computerChoice) {
        console.log("Its a tie");
        return "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log("You Win!");
        return "You win!";
    } else {
        console.log("You lose!");
        return "You lose!";
    }
}

// rockPaperScissors(userChoice)

// Create a function that moves all capital letters to the front of a word.
let startWord = 'WhAt'

export function capitalLettersAtTheFront(startWord) {
    const [capitalLetters, lowercaseLetters] = _.partition(startWord, char => char >= 'A' && char <= 'Z');
    console.log(capitalLetters.join('') + lowercaseLetters.join(''))
}

// capitalLettersAtTheFront(startWord);

// Create a function that takes a string, checks if it has the same number of x’s and o’s and returns either true or false.
let string = 'XXOOOXXXxxoooabxoxooox'

export function numberOfXAndO(string) {
    const lowercaseString = _.toLower(string)
    const arrLowercaseString = lowercaseString.split('');

    let x = 0;
    let o = 0;
    
    for (let index = 0; index < arrLowercaseString.length; index++) {
        if(arrLowercaseString[index] === 'x') {
            x = x + 1
        } else if(arrLowercaseString[index] === 'o') {
            o = o + 1
        }
        else{

        }
    }

    if(x === o) {
        console.log('----------true--------');
    } else {
        console.log('----------false----------');
    }
}

// numberOfXAndO(string)

// Create a function that will reverse a String

const string1 = 'hello';

export function reverseString(string1) {
    const reverseString = string1.split('').reverse().join('');
    console.log(reverseString)
}

reverseString(string1)

// Create a function that says if the user number input is odd or even

function numberOddOrEven() {
    let userInput = PromptSync("Please input a number");
    let userNumber = parseFloat(userInput);
    
    if(isNaN(userNumber)) {
      console.log("Please input a valid number");
    }
  
    if(number % 2 == 0) {
      console.log('number is even')
    } else {
      console.log('number is odd')
    }
  }
  
  numberOddOrEven();