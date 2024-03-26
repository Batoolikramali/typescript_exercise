//exersise 16

let  Guest_List:string[] =['Kamran Tessori', 'Daniyal Nagori', 'Wassem Badami', 'Iqra ul Hassam' ];

//for(let i=0; i<Guest_List.length; i++){

//console.log('dear Mr.'  + Guest_List[i] + ',\n\n IT is our pleasure to invite you in our party. \n\n Thank you!');
    
//}


let absentGuest :string ="Daniyal Nagori";

let newGuest :string ="zia khan";

Guest_List [1] = newGuest ;

// for(let i=0; i<Guest_List.length; i++){

//     console.log('dear Mr.'  + Guest_List[i] + ',\n\n IT is our pleasure to invite you in our party. \n\n Thank you!');
    
// }

console.log(` Mr. ${absentGuest} is not coming to the party.`);

console.log('\n Good News! We find big tables so we are inviting more guests.');

Guest_List.unshift('Nawaz SHarif');

Guest_List.splice(2 , 0 ,"sir Mubashir" );

Guest_List.push('sir Auns');

for(let i=0; i<Guest_List.length; i++){

    console.log('dear Mr.'  + Guest_List[i] + ',\n\n IT is our pleasure to invite you in our party. \n\n Thank you!');
    
}

console.log(`sorry we can not arrange big table, only two person will be invited for dinner.`);

while(Guest_List.length > 2){

    let removeGuest =Guest_List.pop();

    console.log(` Sorry Mr. ${removeGuest}, you are not invited for dinner.`);

}

for(let i=0; i<Guest_List.length; i++){

    console.log('dear Mr.'  + Guest_List[i] + ',\n\n you are stilled invited.\n\n Thank you!\n\n');
    
}

Guest_List.splice(0,2);

console.log(Guest_List);