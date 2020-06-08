function Contact() {
};
Contact.name = "";
//Add more properties like age, address, 
//friends list  -> this holds list of other contacts as his/her friends list

//Q. In address class have fields like House Number, street Name, City, State, ZipCode
Contact.prototype.init = function(name, age, address) {
  this.name = name;

}

//try using callback to return data
Contact.prototype.describe = function(cbk) {
  //Fill description
}
//fill code to add another contact here
//but asynchronously
Contact.prototype.addContact  = function() {

}

//asynchronously return this person 
//friends list using callback function
Contact.prototype.getFriends = function (cbk) {

}