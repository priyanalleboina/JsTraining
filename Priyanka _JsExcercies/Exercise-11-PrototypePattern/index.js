var Persons = [] ;//Empty Array. This is supposed to hold Persons Objects

function addPerson (){
  //1. Get Person details from DOM
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var person = new Person();
  person.init(name, age);
 
  //3.Add it to the list
  Persons.push(person);
  
  //2. Create Persons Object

}

function getByAgeCondition() {
  //1. Get Age condition using html input ageCondition
  let name = document.getElementById('nameCondition').value;
  var newList = Persons;
   
  //  if(age != 0) {
  //   newList = newList.filter(function(person){
  //     return person.age <= age;
  //   });
 
  if(name.length != 0) {
       newList = newList.filter(function(person){
         return person.name.match( name);
       });
  //2. if Age is zero get all persons description

  //3. if age is some value, filter persons whose age is lower than given
  var personsList = "";
  for( person of newList) { //This is ES6 for loop
    personsList += person.describeWithHoroscope();
  }

  //4. update personsList
  var listElement = document.getElementById("personsList");
  listElement.innerHTML = personsList;
}
}