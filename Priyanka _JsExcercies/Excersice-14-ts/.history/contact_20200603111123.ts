const Address = require('./address');
//import Address from './address';
class Contact {
    pid: number;
    name:string;
    age:number;
    hno:string;
    street:string;
    colName:string;
    address:Address;
    constructor(pid:number, name:string, age:number, hno:string, street:string, colName:string) {
        this.pid = pid;
        this.name = name;
        this.age = age;
        this.address = new Address(hno, street, colName);
    }

    describe() {
        let description = "contac Details";
        description += " Name is =";
        description += this.name;
        description += " Age is =";
        description += this.age;
        description += this.address.describe();
        return description;
    }
    getJson() {
        return {
            pid: this.pid,
            name: this.name,
            age: this.age,
            address: this.address.getJson()

        }
    }
}
module.exports = Contact;