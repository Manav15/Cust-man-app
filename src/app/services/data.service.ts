import { Injectable } from "@angular/core";
import { USER_DATA } from "../model/mock";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService{

    constructor(private httpClient : HttpClient){}
    
    getUserData(){
        return USER_DATA;
    }

    //Remote Server Get Call
    getUserDataFromAPI(){
        return this.httpClient.get("./assets/data/user-data.json")

    }

}