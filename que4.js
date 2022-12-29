const prompt = require("prompt-sync")({sigint : true});

let arr=[5,6,7,8,9]

let arr2 = arr.map((value, i)=>{
    return value*value})

console.log(arr2)