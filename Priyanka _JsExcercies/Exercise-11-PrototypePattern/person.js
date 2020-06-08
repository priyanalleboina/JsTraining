function Person() {
};
Person.name = "";
Person.age = "";
Person.prototype.init = function(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.describe = function() {
  var description = "<==>Person Name is ";
  description += this.name;
  description += " and person age is ";
  description += String(this.age);
  return description;
}

Person.prototype.describeWithHoroscope = function() {
  var description = this.describe();
  description += " Prediction: " + getHoroscope(this.name, this.age);
  return description;
}
