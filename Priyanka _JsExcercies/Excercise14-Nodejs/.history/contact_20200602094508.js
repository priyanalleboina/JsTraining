export class contact {
    constructor(name ,age){
        this.name=name;
        this.age =age;
    }

    describe() {
        let description =  "contac Details";
        description+= " Name is =" +this.name + '</br>';
        description+= " Age is =" +this.age + '</br>'
        return  description;
    }
}