class DomAccess{
    constructor() { }
   
    getAge() {
        var ageElement = document.getElementById('age');
        var age = 0;  //default is zero?
        if (!isNaN(ageElement.value)) //Any other way?
        age = Number(ageElement.value);
        return age;
    }
    getAgeCondition (){
        var ageConditionElement = document.getElementById('ageCondition');
        var ageCondition = Number(0);  //default is zero?
        if (!isNaN(ageConditionElement.value))
        ageCondition = Number(ageConditionElement.value);
        return ageCondition;
    }
    
    getName() {
        var nameElement = document.getElementById('name');
        var name = '';  //default is empty Name?
        if (typeof(nameElement.value) == 'string')
        name = String(nameElement.value);
        return name;
    }
    getAddress() {
        var addressElement = document.getElementById('address');
        var address = '';  //default is empty Name?
        if (typeof(addressElement.value) == 'string')
        address = String(addressElement.value);
        return address;
    }
    
    getSearchCriteria () {
        var searchCriteriaElement = document.getElementById('searchCriteria');
        var searchCriteria = '';  //default is empty Name?
        if (typeof(searchCriteriaElement.value) == 'string')
        searchCriteria = String(searchCriteriaElement.value);
        return searchCriteria;
    }
    
    updatePersonsList(newText) {
        var personsListElement = document.getElementById('personsList');
        personsListElement.innerText = newText;
    }
      
    
}//Using IIFE (immediately invoking function express as a way to create abstraction)
 const personDOM = new DomAccess()
  export default personDOM;