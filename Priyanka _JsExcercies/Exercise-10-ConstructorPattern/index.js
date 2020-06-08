var Persons = [] ;//Empty Array. This is supposed to hold Persons Objects

function addPerson (){
  //1. Get Person details from DOM
  var nameElement = document.getElementById("name").value;
  var ageElement =document.getElementById("age").value;
  // listElement.innerHTML = personsList;

  //2. Create Persons Object
  var person = new Person(nameElement, ageElement);

  //3.Add it to the list
  Persons.push(person);

}

function getByAgeCondition() {
  //1. Get Age condition using html input ageCondition
  let age = Number(document.getElementById('ageCondition').value);
  

  //2. if Age is zero get all persons description
  let newList = Persons;
    if(age !=0){
    newList = newList.filter(function(x){
    return x.age <= age;
      });
  }

  //3. if age is some value, filter persons whose age is lower than given
  var personsList = "";
  for( person of newList) { //This is ES6 for loop
    personsList += person.describe();
  }

  //4. update personsList
  var listElement = document.getElementById("personsList");
  listElement.innerHTML = personsList;
}

// function display(num) {
//   return new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//      if(num%2 == 0){
//        resolve('even Number');
//      }
//      else{
//        reject('odd');
//      }
//    },1000);
//   });
//   }
//   var result = display(2);
// result.then((value)=>{
//   console.log('resolved promise',value);
// },
//  (value)=>{
//   console.log('rejected promise',value);
//  })
// .catch((error)=>{
//   console.log('exception',error);
// });