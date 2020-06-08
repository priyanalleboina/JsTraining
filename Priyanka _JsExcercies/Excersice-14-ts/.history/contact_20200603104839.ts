// const Address = require('./address');
class Contact {
    name:string;
    age: number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
        // this.address = new Address(hno, street, colName);
    }

    describe() {
        let description = "contac Details";
        description += " Name is =";
        description += this.name;
        description += " Age is =";
        description += this.age;
        // description += this.address.describe();
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
// module.exports = Contact;