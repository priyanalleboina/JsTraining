import AddressServer from './addressServer';
export function addContactInfo() {
    const pid: any = document.getElementById('pid');
    const name: any = document.getElementById('name');
    const age: any = document.getElementById('age');
    const hno: any = document.getElementById('hno');
    const street: any = document.getElementById('street');
    const colName: any = document.getElementById('colName');

    AddressServer.createContact(Number(pid.value), name.value, Number(age.value), hno.value, street.value, colName.value);
}

export function getContactsList(){
    AddressServer.getContacts().then((data: any) => {
        console.log(data);
    });
}