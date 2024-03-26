
//store the location in an arry. Make sure the arry is not in alphabetical order.
let places : string[]=['Burj khalifa','Stonehenge','Big Ben','Fasial Masjid','Great wall of china'];

//print your arry in its orignal order
console.log('orignal ' + places );

//print your arry in alphabetical order without modifying the actual list.
console.log('copy ' +[...places].sort());

//show that your arry is still in its orignal order by printing it.
console.log('orignal ' + places);

//print your arry in reveres alpabetical order without changing the order of the orginal list.
console.log([...places].sort().reverse());

//show that your array is still in its orignal order by printing it again.
console.log('orignal' +places);

//Reverse the order of your list. print the array to show that its order has changed
console.log(places.reverse());

//Reverse the order of your list again.print the list to its back to its orginal order.
console.log('orignal' +places.reverse());

//sort your array so its stored in alphabetical order.print the array to show that its your order has been changed.
console.log(places.sort());

//sort to change your arrayso its stored inreverse alphabetical order.print the list to show that it order has changed.
console.log(places.sort().reverse());