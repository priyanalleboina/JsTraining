function Person(name, age) {
  //create Person properties
  this.name= name;
  this.age= Number(age);
  this.describe = function() {
    var description = 'name ='+ this.name + ' ' + 'age ='+this.age + '</br>';
    //write code here
    return description;
  }
};