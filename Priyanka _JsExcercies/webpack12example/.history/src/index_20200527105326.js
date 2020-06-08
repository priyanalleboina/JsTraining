
import Person from './person';
import personDOM from './domAccess';
var Persons = [] ;//Empty Array. This is supposed to hold Persons Objects

export function addPerson (){
  //1. Get Person details from DOM
  //used domAccess.js file methods
  //2. Create Persons Object
  var name = document.getElementById('name').value;
  var person = new Person(personDOM.getName(), personDOM.getAge(), personDOM.getAddress());

  //3.Add it to the list
  Persons.push(person);

}

export function getByAgeCondition() {
  //1. Get Age condition using html input ageCondition
  var ageCondition = personDOM.getAgeCondition();
  //2. if Age is zero get all persons description
  var tempList = Persons;
  if (ageCondition != 0) {
    tempList = tempList.filter(function(person) {
      return person.age <= ageCondition;
    });
  }
  //3. if age is some value, filter persons whose age is lower than given
  var personsList = "";
  for( person of tempList) { //This is ES6 for loop
    personsList += person.describe();
  }

  //4. update personsList
  var listElement = personDOM.updatePersonsList(personsList);
}

//Please fill code
export function getBySearchCondition() {
  var searchvalue = personDOM.getSearchCriteria();
  //2. if Age is zero get all persons description
  var tempList = Persons;
  if(searchvalue.length != 0) {
    tempList = tempList.filter(function(person){
      return person.name.match(searchvalue) || person.address.match(searchvalue);
    });
  }
  //3. if age is some value, filter persons whose age is lower than given
  var personsList = "";
  for( person of tempList) { //This is ES6 for loop
    personsList += person.describe();
    // name = '';
    // adress = '';
  }

  //4. update personsList
  var listElement = personDOM.updatePersonsList(personsList);
}