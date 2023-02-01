console.log("*** for ***")

const n = Number(prompt("Enter a number"))

let sum = 0

for (let i =1; i<= n; i++){
    sum = sum + i
}
console.log("SUM:",sum);

///////////////////////////////

const primeNum = Number(prompt("Enter a number"))

let isPrime = true

if(primeNum < 2) {
    console.log("Number should be bigger than 1");
} else {
for (let i = 2; i < primeNum; i++){
    if(primeNum % 1 === 0){
        console.log(`${primeNum} is not a prime number`)
        isPrime = false
       }    
    }
}

    if(isPrime === true) {
        console.log(`${primeNum} is a prime number`)
    }
