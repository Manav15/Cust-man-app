import { Component , OnInit } from "@angular/core";
import {USER_DATA} from "../model/mock";
import { User } from "../model/user";

@Component({
    selector : 'app-user',
    templateUrl : './user.component.html',
    styleUrls : ['./user.component.css'] 
})

export class UserComponent implements OnInit{ 
    users : User[]; 

    ngOnInit() {
        this.users = USER_DATA;
    }

    onMoreInfo(usr: User){
        alert(`Mr. ${usr.lastName} lives at ${usr.Address}, ${usr.City}`);
    }
}