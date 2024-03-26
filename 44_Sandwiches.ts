//exersise 44

function make_sandwich(item:string[]){

  console.log("Making your sandwich with");

  item.forEach(element => console.log("-" + element));

  console.log("Enjoy your sandwich");
}


make_sandwich(["cheese","hams","sauces"])

make_sandwich(["lettuce","hams"])

make_sandwich(["lettuce","ham", "cheese"])