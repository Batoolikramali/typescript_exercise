//exersise 31

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let userName: string[]=['Tabish','Akbar','Ahemd','Muhmmad'];

if(userName.length === 0){

    console.log('we need to find some users!');
}
else{
      userName = []
    console.log('All users names has been removed' + userName.length);
}