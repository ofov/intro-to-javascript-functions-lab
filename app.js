function generateEmail(username, domain) {
    return `${username}@${domain}`
}

console.log('Exercise 1 Result:', generateEmail("sara", "company.com")) // sara@company.com
console.log('Exercise 1 Result:', generateEmail("ali", "example.com"))
console.log('Exercise 1 Result:', generateEmail("fatima", "school.edu"))

function greetUser(user, timeOfDay) {
    return `${timeOfDay}, ${user}!`
}

console.log('Exercise 2 Result:', greetUser("Sara", "morning")) // Good morning, Sara!
console.log('Exercise 2 Result:', greetUser("Ali", "afternoon")) // Good afternoon, Ali!
console.log('Exercise 2 Result:', greetUser("Fatima", "evening")) // Good evening, Fatima!

function calculateVAT(price, vatRate) {
    return price * vatRate / 100;
}

console.log('Exercise 3 Result:', calculateVAT(50, 10)) // 5
console.log('Exercise 3 Result:', calculateVAT(100, 10)) // 10
console.log('Exercise 3 Result:', calculateVAT(200, 5)) // 10

function checkStock(quantity) {
    if (quantity > 0) {
        return ("In Stock!")
    } else {
        return ("Out of Stock!")
    }
}
console.log('Exercise 4 Result:', checkStock(10)) // In stock
console.log('Exercise 4 Result:', checkStock(0))  // Out of stock
console.log('Exercise 4 Result:', checkStock(1))  // In stock
function maxOfTwoNumbers(numA, numB) {
    if (numA > numB) {
        return numA
    } else {
        return numB
    }
}



console.log('Exercise 5 Result:', maxOfTwoNumbers(3, 9)) // 9
console.log('Exercise 5 Result:', maxOfTwoNumbers(15, 4)) // 15
console.log('Exercise 5 Result:', maxOfTwoNumbers(7, 7)) // 7
function isCharAVowel(char) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        return true
    } else {
        return false
    }

}



console.log('Exercise 6 Result:', isCharAVowel("a")) // true
console.log('Exercise 6 Result:', isCharAVowel("e")) // true
console.log('Exercise 6 Result:', isCharAVowel("b")) // false
console.log('Exercise 6 Result:', isCharAVowel("y")) // false

function maxOfThree(numA, numB, numC) {
    if (numA >= numB && numA >= numC) {
        return numA

    } else if (numB >= numA && numB >= numC) {
        return numB

    } else if (numC >= numB && numC >= numA) {
        return numC
    }
}



console.log('Exercise 7 Result:', maxOfThree(5, 10, 8)) // 10
console.log('Exercise 7 Result:', maxOfThree(20, 5, 10)) // 20
console.log('Exercise 7 Result:', maxOfThree(3, 7, 15)) // 15
console.log('Exercise 7 Result:', maxOfThree(8, 8, 4)) // 8

function convertTemperature(temp, scale) {
    if (scale === "C") {
        return (temp * 9 / 5) + 32;
    } else if (scale === "F") {
        return (temp - 32) * 5 / 9;
    }
}
console.log('Exercise 8 Result:', convertTemperature(0, "C")) // 32
console.log('Exercise 8 Result:', convertTemperature(32, "C")) // 89.6
console.log('Exercise 8 Result:', convertTemperature(32, "F")) // 0
console.log('Exercise 8 Result:', convertTemperature(212, "F")) // 100

function basicCalculator(numA, numB, operator) {
    if (operator === "add") {
        return numA + numB;
    } else if (operator === "subtract") {
        return numA - numB;
    } else if (operator === "multiply") {
        return numA * numB;
    } else if (operator === "divide") {
        return numA / numB;
    }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "add")) // 15
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract")) // 5
console.log('Exercise 9 Result:', basicCalculator(10, 5, "multiply")) // 50
console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide")) // 2
