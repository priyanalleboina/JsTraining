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
    AddressServer.getContacts().then((resp: any) => {
        console.log(resp.data.data);
        let listData = resp.data.data;
        for(const list of  listData){
            const pid:any=document.getElementById('pid');
          pid.innerHTML =list.pid;
          
        }
    });
}