export default class Address {
  hno: string;
  city: string;
  street: string;
  constructor(hno: string,city: string,street: string){
  this.hno = hno;
  this.city = city;
  this.street = street;
  }

describe() {
  let description:string = "Address[hno =";
    description += this.hno;
    description += ", City Name = ";
    description += String(this.city);
    description += ",Street = ";
    description += String(this.street)
    
    description += "]\n"; //Hack, should not do it 

    return description;
}
}