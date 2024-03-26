//exersise 41
// exersise 42
//exersise 43
//Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array

let magician:string []=['Harry Portter','Hermions Granger','Ron Weasley','Albus Dumbledore'];

function copyArry(copy:string[]){

    return[...copy]
}

function make_great(magicianarry :string[]){

    for (let i=0; i<magicianarry.length; i++){
          magicianarry[i] = "the great "  + magicianarry[i]
    }
}


function show_magicians(magicians: string[]){

    magicians.forEach(element =>{

        console.log(element);
    })
}

let copyMagician =copyArry(magician);

make_great(copyMagician);

console.log("\n This is my original array");

show_magicians(magician);

console.log("\n This is my modified copy of the array");

show_magicians(copyMagician);