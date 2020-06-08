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
    getJson() {
        return {
            name:this.name,
            age: this.age
        }
    }
}
module.exports = Contact;