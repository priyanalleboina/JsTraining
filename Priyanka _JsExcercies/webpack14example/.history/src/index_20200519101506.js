let Contacts = [] ;//Empty Array. This is supposed to hold Persons Objects
let scrollTimerId = -1;
//Q. Can you creat new function to take many contacts in single function
//input can be from json text

function addPersons (){

  //1. Build Persons List here
  //Ex: const persons = [{}, {}, {}, {} ]
  const contact = new Contact();

  //for loop to add every person in list
  contact.init();  
  //3.Add it to the list
  Contacts.push(contact);
}

//Fill this code to get given Person details
//Name, person Address and person address book

//Example: for given person name 'Modi'
//Name: Modi
//Age: 65
//Person Self Address: New Delhi
//Person Contact List (address Book): [Amit, Naidu, Kcr, Kaveri, Mamatha]
function getPersonDetails() {

  //1. get given person name

  //2. get given person details

  //3. get given person address book

  //4. update UI with this list
}


