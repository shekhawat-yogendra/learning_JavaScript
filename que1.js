const prompt = require("prompt-sync")({sigint : true});

let arr = [1,2,3,4,5]

let n = parseInt(prompt("How many nos do you want to add: "))
console.log("Enter the numbers to be added one by one: ")

for(let i=0; i<n; i++){
    let a = parseInt(prompt())
    arr.push(a)
    console.log(arr)
}