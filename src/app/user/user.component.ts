import { Component , OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {USER_DATA} from "../model/mock";
import { User } from "../model/user";
//import { DataService } from "../services/data.service";

@Component({
    selector : 'app-user',
    templateUrl : './user.component.html',
    styleUrls : ['./user.component.css'] 
})

export class UserComponent implements OnInit{ 
    users : User[]; 

    onAdd(){
        this.router.navigate(['/newcustomer']);
    }

    ngOnInit() {
        this.users = USER_DATA;
    }

    constructor(private router : Router){}

    /*ngOnInit() {
        //this.users = USER_DATA;
        //this.users=this.dataService.getUserData();
        this.dataService.getUserDataFromAPI()
            .subscribe(response => {
                console.log(response);
                this.users = response['userdata'];
        })
    }
*/

}