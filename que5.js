const prompt = require("prompt-sync")({sigint : true});

let arr = [1,2,3,4,5,6]

let arr2 = arr.reduce((v1, v2)=>{return v1*v2})
console.log(arr2)