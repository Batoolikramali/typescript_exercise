//exersise 30

// Hello Admin: Make a array of five or more usernames, including the name 'admin'.

const userName:string[]=['Admin','Salman','Ali','Tabish','Nasir']

// • If the username is 'admin', print a special greeting, such as userName such as Hello admin, would you like to see a status report?

for(let i=0; i<userName.length; i++){

    if(userName[i] ==="Admin"){

        console.log('Hello Admin,would you like to see a status report?');
    }
    else{
        console.log(`Hello ${userName[i]}, thank you for logging again`);
    }
}

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again