export default class Address {
  constructor(hno,city,street){
  this.hno = hno;
  this.city = city;
  this.street = street;
  }

describe() {
  var description = "Address[hno =";
    description += this.hno;
    description += ", City Name = ";
    description += String(this.city);
    description += ",Street = ";
    description += String(this.street)
    
    description += "]\n"; //Hack, should not do it 

    return description;
}
}