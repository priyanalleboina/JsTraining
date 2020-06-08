import Address from './address'
export default class Contact {
  constructor(pid,name, age, hno,street,city){
    this.pid = Number(pid);
  this.name = name;
  this.age = Number(age);
  this.address = new Address(hno,street,city);
  this.friendsList = [];
  
  }

//Q. In address class have fields like House Number, street Name, City, State, ZipCode

describe() {
  var description = "==>Person Name is ";
    description += this.name;
    description += " and person age is ";
    description += String(this.age);
    description += " and address is ";
    description += this.address.describe();
    description += "\n"; //Hack, should not do it 

    return description;
}
}


// //fill code to add another contact here
// //but asynchronously
// Contact.prototype.addContact = function (friendContact) {
//   this.friendsList.push(friendContact);
// }

// //asynchronously return this person 
// //friends list using callback function
// Contact.prototype.getFriendsList = function () {
//   let friendsData = ' ';
//   for(friend of this.friendsList){
//     friendsData += 'Friends Names :  [' + friend.name + ' ' + friend.age +']';
//   }
//   return friendsData;
// }
   
  