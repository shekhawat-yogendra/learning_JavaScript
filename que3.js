const prompt = require("prompt-sync")({sigint : true});

let arr = [22,10,40,54,3,90,45,1200,678]

let arr2 = arr.filter(value=> value%10 ==0)
console.log(arr2)