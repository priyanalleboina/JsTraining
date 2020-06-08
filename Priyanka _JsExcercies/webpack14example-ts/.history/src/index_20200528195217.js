import Contact from './contact';

var ContactsArray = [];//Empty Array. This is supposed to hold Persons Objects
let scrollTimerId = -1;
//Q. Can you creat new function to take many contacts in single function
//input can be from json text

export function addPersons() {
  const contactList = [
    { pid: 10, 'name': 'Ramu', 'age': 34, 'hno': '123-5', 'street': 'Kranthi Nagar', 'city': 'Hyd' },
    { pid: 11, 'name': 'Vani', 'age': 31, 'hno': '123-5', 'street': 'Hyd', 'city': 'Wgl' },
    { pid: 12, 'name': 'Madhu', 'age': 35, 'hno': '123-5', 'street': 'Wgl', 'city': 'Hyd' },
    { pid: 13, 'name': 'Latha', 'age': 36, 'hno': '23-5', 'street': 'Hyd', 'city': 'Hyd' }];

  //for loop to add every person in list
  // const addressBooks =[{'pid':10,'name':'Modi'},{'pid':10,'name':'Jassu'}];
  // const addressBooks = [{ pid: 10, friends: [11, 14] },
  // {
  //   pid: 11, friends: [12, 13]
  // }
  // ];

  for (let contactInfo of contactList) {
    const contact1 = new Contact(
    contactInfo.pid, contactInfo.name, contactInfo.age, contactInfo.hno,
      contactInfo.street, contactInfo.city);
    //3.Add it to the list
    ContactsArray.push(contact1);
  }
  let ele = document.getElementById('sel');
  for (let contact2 of ContactsArray) {
    ele.innerHTML = ele.innerHTML + '<option value="' + contact2.pid + '">' + contact2.name + '</option>';

  }

  // for (const friendsList of addressBooks) {
  //   const pid = friendsList.pid;
  //   getContactPromise(pid).then((currentContact) => {
  //     createFriendsList(currentContact, friendsList.friends);
  //   })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
}
// function createFriendsList(currentContact,friendsList) {
//   for(const friendId of friendsList) {
//     getContactPromise(friendId)
//     .then((friendContact) => {
//       currentContact.addContact(friendContact);
//     })
//     .catch((error) =>{
//       console.log('Contact Info is not available ' +error);
//     });
//   }
// }
// function getContactPromise(pid){
//   return new Promise((resolve, reject)=>{
//     for (const contact of Contacts) {
//       if (contact.pid === pid) {
//         resolve(contact);
//         return;
//       }
//     }
//     reject();
//   });
// }
// function getContactAsync(pid, cbk) {
//   //return the result should be using  callback and timeout 
//   setTimeout(() => {
//     for (const contact of Contacts) {
//       if (contact.pid === pid) {
//         cbk(contact);
//       }
//     }
//     cbk(null);
//   }, 0);
// }

// function getContact(pid) {
//   //return the result should be using  callback and timeout 
//   for (const contact of Contacts) {
//     if (contact.pid === pid) {
//       return contact;
//     }
//   }
//   return null;
// }

// //Asyn


export function getPersonDetails() {
  let pid = document.getElementById("pidCondition").value;
  if (pid.length != 0) {
 ContactsArray = ContactsArray.filter(function(data) {
      return data.address.street.match(pid);
    });
    console.log(ContactsArray);
  }
  let result = '';
  for (const list of ContactsArray) {
    result += list.describe();
  }
  let listElement = document.getElementById("personsDetails");
  listElement.innerHTML = result;

  // getContactAsync(pidCondition, (contact) => {
  //   let currentContact = null;
  //   currentContact = contact;
  //   if (currentContact == null) {
  //     return;
  //   } 
  //   let personsList = ' ';
  //   if (currentContact != null) {
  //     personsList += currentContact.describe();
  //     personsList += currentContact.getFriendsList();
  //   }
  //   let listElement = document.getElementById("personsDetails");
  //   listElement.innerHTML = personsList;

  // });

}

export function show(ele) {
  // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
  var msg = document.getElementById('msg');
  msg.innerHTML = 'Selected Peroson: <b>' + ele.options[ele.selectedIndex].text + '</b> </br>' +
    'ID: <b><input type = text name = pid value =  ' + ele.value + '>';
}

// class Contact{
//   constructor(name,age) {
//     this.name = name;
//     this.age = age;
//   }
//   describe(){
//     return '==>' + this.name + '' + this.age;
//   }
// }



