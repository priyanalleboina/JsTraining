import axios from 'axios';
export default class AdressServer {
    static createContact(pid: number, name: string, age: number, hno: string,
        colName: string, street: string): void {
        axios({
            method: 'get',
            url: 'http://localhost:4000/create?' +'pid='+pid+'&'+'name='+name+'&'+'age='+age+'&'+'hno='+hno+'&'+'street='+street+'&'+'colName='+colName
        })
            .then((data: any) => {
                console.log(data);
            });
 
    }
    static getContacts(): any {
 
    }
 
}