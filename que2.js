const prompt = require("prompt-sync")({sigint : true});

let arr = [1,2,3,4,5]

console.log("Enter the numbers to be added one by one & enter 0 if you want to end: ")
let a = 1;
while(a!=0){
    a = parseInt(prompt())
    if(a!=0){arr.push(a)}
    
}
console.log(arr)