//exersise 3

let cases:string ="batool";

console.log(cases.toLowerCase());  //lower case

console.log(cases.toUpperCase());  //upper case

console.log( cases.replace(/\b\w/g,(char)=>char.toLowerCase()));  //titlecase