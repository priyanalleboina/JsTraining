import axios from 'axios';
export default class AddressServer {
createContact(pid:number,name:string,age:number,hno: string,
    city: string,street: string):void{
      axios({
        method: 'get',
        url: 'http://localhost:4000',
    
      })
      .then((data:any)=>{
        console.log(data);
      })
    }
 

static getContacts(): any {
 
}
}