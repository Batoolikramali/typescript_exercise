//exersise 24

//equality test 1
console.log("Equality test  with string: ", "Apple" === "Apple");

//Inequality test 2
console.log("Inequality test  with string: ", ( "Apple" as string) != "orange");

// test lower case funcation
console.log("Lower case function test:" , "HELLOW" .toLowerCase() === "hellow");

//numerical test inovleing equal test
console.log("Equality test  with Number: ", 26 === 26);

//numerical test inovleing inequal test
console.log("Inequality test  with Number: ", (26 as number) != 35 );

//greater than test
console.log("geater than test: ", 10 >5);

// less than test
console.log("geater than test: ", 5 < 10);

//greater than or equal to
console.log("Greater than and equal to test :", 10 >= 10);

//less than or equal to test
console.log("Less than or equal to test:", 5 <= 10);

//Tests using "and" and "or" operator
console.log("And operator test" , 5===5 && 10 > 5 );

//Tests using "and" and "or" operator
console.log("Or operator test" , 5===5 || false );

//test an whether an iteam is in an arry
let vegetables :string[]=['cabbage','Tomato','Ladyfinger'];
console.log('Test "cabbage" in the array', vegetables.includes("cabbage") ) ;

//Test whether an iteam is not in an arry 
console.log('testing "onion" is not an array:', vegetables.includes("onion"));