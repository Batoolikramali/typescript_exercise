// exersise 28

let age: number=17;

// If the person is less than 2 years old, print a message that the person is a baby.

if(age < 2){

    console.log("Person is a baby");
}

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

 else if(age  >=2 && 4 ){

    console.log("Person is a toddler");
}

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

else if ( age >=4 && 13){

    console.log("Person is a kid");
}

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

else if ( age <=13 && 20){

    console.log("Person is a teenager");
}

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

else if ( age <=20 && 65){

    console.log("Person is an adult");
}

//If the person is age 65 or older, print a message that the person is an elder.

else {

    console.log("Person is an elder");
}