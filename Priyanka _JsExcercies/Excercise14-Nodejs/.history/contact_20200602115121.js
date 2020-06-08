 class Contact {
    constructor(pid,name ,age, address){
        this.pid =pid;
        this.name=name;
        this.age =age;
        this.address = new Address(hno,street,colName);
    }

    describe() {
        let description =  "contac Details";
        description+= " Name is =";
        description += this.name ;
        description+= " Age is =";
        description += this.age;
        description += address.describe();
        return  description;
    }
    getJson() {
        return {
            name:this.name,
            age: this.age
        }
    }
}
module.exports = Contact;