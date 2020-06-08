class Address {
    constructor(hno, colName, street) {
        this.hno = hno;
        this.colName = colName;
        this.street = street;
    }
    describe() {
        let description = "Adreess";
        description += "House Number =";
        description += this.hno;
        description += "Clony Name =";
        description += this.colName;
        description += "Street =";
        description += this.street;
        return description;
    }
    getJson() {
        return {
            hno: this.hno,
            street: this.street,
            colName: this.colName
        }
    }
};

module.exports = Address;