import axios from 'axios';
export default class AdressServer {
    static createContact(pid: number, name: string, age: number, hno: string,
        street: string, city: string): void {
        axios({
            method: 'get',
            url: 'http://localhost:4000/create?' +'pid ='+pid +'&'+'name ='+name+'&'+'age='+age+'&'+'hno ='+hno+'&'+'street='+street+'&'+'city='+city
        })
            .then((data: any) => {
                console.log(data);
            });
 
    }
    static getContacts(): any {
 
    }
 
}