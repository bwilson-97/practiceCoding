import _ from "lodash";

// Write a short program that loops from 1 to 100.
// If the number is a multiple of 3, print "Fizz"
// If the number is a multiple of 5, print "Buzz"
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" 
// Otherwise print the number
// """

export function FizzBuzz() {
    for(let counter = 1; counter < 101; counter++) {
        let divisibleByThree = counter/3;
        let divisibleByFive = counter/5;

        let isThreeInteger = _.isInteger(divisibleByThree)
        let isFiveInteger = _.isInteger(divisibleByFive)

        if(isThreeInteger && isFiveInteger && divisibleByThree && divisibleByFive) {
            console.log("FizzBuzz")
        } else if( isThreeInteger && divisibleByThree) {
            console.log("Fizz")
        } else if(isFiveInteger && divisibleByFive) {
            console.log("Buzz")
        }
        else {
            console.log(counter)
        }
    }
}

FizzBuzz()

// Write a short program that prints the first 10 numbers of the Fibonacci series starting with 0.
// Print each number on a new line.
// Do this iterative and  recursive.

let startNumber1 = 0
let startNumber2 = 1

export function fibonacciSequence(startNumber1, startNumber2) {
    let numbersToUse = [ startNumber1, startNumber2 ]
    //print out first 10 numbers
    for(let i = 0; i < 11; i++ ) {
        let result = numbersToUse[i] + numbersToUse[i+1]
        numbersToUse.push(result)
    }
    console.log(numbersToUse)
}

fibonacciSequence(startNumber1, startNumber2)

export function fibonacciSequenceRecursive(startNumber1, startNumber2) {
    let array = [];
    for(let i = 0; i < 10; i++) {
        const result = doStuff(i)
        array.push(result)
    }
    
    console.log(array)
}

function doStuff(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        let result = doStuff(n-1) + doStuff(n-2)
        return result;
    }
}

fibonacciSequenceRecursive()

// Write a function that takes a message and returns True if there is a bad word in the list.

const bad_words = ["jerk", "butt head", "lame"]
const message = "That guy is a butt head."

export function findBadWord(message, bad_words) {
    const badWord = _.some(bad_words, bad_word => _.includes(message, bad_word));
    console.log('----------badWord----------', badWord);
}

findBadWord(message, bad_words)