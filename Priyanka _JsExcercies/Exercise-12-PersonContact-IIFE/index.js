[10:11 AM] Phaniratna Namani
    

importpersonfrom'./person';
importdomAccessfrom'./domAccess';
letPersons = [] ;//Empty Array. This is supposed to hold Persons Objects
exportfunctionaddPerson (){
//1. Get Person details from DOM
//used domAccess.js file methods
//2. Create Persons Object
letperson1 = newperson(domAccess.getName(),domAccess.getAge(),domAccess.getAddress());
//3.Add it to the list
Persons.push(person1);
}
exportfunctiongetByAgeCondition() {
setTimeout(getAgeCondition,2000);
}
exportfunctiongetAgeCondition() {
//1. Get Age condition using html input ageCondition
letageCondition = domAccess.getAgeCondition();
//2. if Age is zero get all persons description
lettempList = Persons;
if (ageCondition != 0) {
tempList = tempList.filter(function(person) {
returnperson.age <= ageCondition;
    });
console.log(tempList);
  }
//3. if age is some value, filter persons whose age is lower than given
letpersonsList = "";
for(varxoftempList) {
//This is ES6 for loop
personsList += x.describe();
  }
 
//4. update personsList
setTimeout(function(){
domAccess.updatePersonsList(personsList);
  },0);
//var listElement = personDOM.updatePersonsList(personsList);
}
//Please fill code
exportfunctiongetBySearchCondition() {
letsearchCondition= domAccess.getSearchCriteria();
console.log(searchCondition);
letnewList = Persons;
if(searchCondition.length != 0) {
newList = Persons.filter(function(person){
//console.log(person.name);
returnperson.name.match( searchCondition);
       });
    }
//console.log(newList); 
letpersonsList = "";
for(varxofnewList) { //This is ES6 for loop

personsList += x.describe();

      }
//4. update personsList
letlistElement = domAccess.updatePersonsList(personsList);
  }


​[10:16 AM] Priyanka Nalleboina
    can you share index.js
​[10:16 AM] Phaniratna Namani
    

importpersonfrom'./person';
importdomAccessfrom'./domAccess';
letPersons = [] ;//Empty Array. This is supposed to hold Persons Objects
exportfunctionaddPerson (){
//1. Get Person details from DOM
//used domAccess.js file methods
//2. Create Persons Object
letperson1 = newperson(domAccess.getName(),domAccess.getAge(),domAccess.getAddress());
//3.Add it to the list
Persons.push(person1);
}
exportfunctiongetByAgeCondition() {
setTimeout(getAgeCondition,2000);
}
exportfunctiongetAgeCondition() {
//1. Get Age condition using html input ageCondition
letageCondition = domAccess.getAgeCondition();
//2. if Age is zero get all persons description
lettempList = Persons;
if (ageCondition != 0) {
tempList = tempList.filter(function(person) {
returnperson.age <= ageCondition;
    });
console.log(tempList);
  }
//3. if age is some value, filter persons whose age is lower than given
letpersonsList = "";
for(varxoftempList) {
//This is ES6 for loop
personsList += x.describe();
  }
 
//4. update personsList
setTimeout(function(){
domAccess.updatePersonsList(personsList);
  },0);
//var listElement = personDOM.updatePersonsList(personsList);
}
//Please fill code
exportfunctiongetBySearchCondition() {
letsearchCondition= domAccess.getSearchCriteria();
console.log(searchCondition);
letnewList = Persons;
if(searchCondition.length != 0) {
newList = Persons.filter(function(person){
//console.log(person.name);
returnperson.name.match( searchCondition);
       });
    }
//console.log(newList); 
letpersonsList = "";
for(varxofnewList) { //This is ES6 for loop

personsList += x.describe();

      }
//4. update personsList
letlistElement = domAccess.updatePersonsList(personsList);
  }


