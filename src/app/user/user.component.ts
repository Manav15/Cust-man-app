import { Component } from "@angular/core";

@Component({
    selector : 'app-user',
    templateUrl : './user.component.html',
    styleUrls : ['./user.component.css'] 
})

export class UserComponent{
    user={
        firstName : 'Bill',
        lastName : 'Gates',
        dob : new Date('Dec 10 , 1997'),
        Address : '2/7,Wall Street',
        City : 'Texas',
        OrderTotal : 30000,
        image : './assets/Images/mid.jpg',
        votes : 1200
    }

    onMoreInfo(usr:any){
        alert(`Mr. ${usr.lastName} lives at ${usr.Address}, ${usr.City}`);
    }
}