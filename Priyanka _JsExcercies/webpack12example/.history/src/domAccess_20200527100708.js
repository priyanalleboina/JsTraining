class domAccess{
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
        var nameElement = document.getElementById(NAME);
        var name = '';  //default is empty Name?
        if (typeof(nameElement.value) == 'string')
        name = String(nameElement.value);
        return name;
    }
    getAddress() {
        var addressElement = document.getElementById(ADDRESS);
        var address = '';  //default is empty Name?
        if (typeof(addressElement.value) == 'string')
        address = String(addressElement.value);
        return address;
    }
    
    getSearchCriteria () {
        var searchCriteriaElement = document.getElementById(SEARCH_CRITERIA);
        var searchCriteria = '';  //default is empty Name?
        if (typeof(searchCriteriaElement.value) == 'string')
        searchCriteria = String(searchCriteriaElement.value);
        return searchCriteria;
    }
    
    updatePersonsList(newText) {
        var personsListElement = document.getElementById(PERSONS_LIST);
        personsListElement.innerText = newText;
    }
      
    
}//Using IIFE (immediately invoking function express as a way to create abstraction)
 const domaccess = new domAccess()
  export default domaccess