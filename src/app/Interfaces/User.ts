import { first } from "rxjs";

export interface User {
    userId:string,
    name:{
        firstname:string,
        lastname:string
    },
    email:string,
    phoneNum:string,
    city: string,
    permission: string,
 
}