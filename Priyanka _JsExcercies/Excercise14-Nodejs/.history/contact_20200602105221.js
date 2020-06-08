 class Contact {
    constructor(name ,age){
        this.name=name;
        this.age =age;
    }

    describe() {
        let description =  "contac Details";
        description+= " Name is =" +this.name;
        description+= " Age is =" +this.age ;
        return  description;
    }
}
module.exports = Contact;