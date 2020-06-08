 class Contact {
    constructor(name ,age){
        this.name=name;
        this.age =age;
    }

    describe() {
        let description =  "contac Details";
        description+= " Name is =";
        description += this.name ;
        description+= " Age is =";
        description += this.age;
        return  description;
    }
}
module.exports = Contact;