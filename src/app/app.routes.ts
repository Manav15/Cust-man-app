import { Routes } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { NewFormComponent } from "./new-form/new-form.component";

export const APP_ROUTES : Routes =[
    {
        path : '',
        component : UserComponent
    },
    {
        path : 'users',
        component : UserComponent
    },
    {
        path : 'newcustomer',
        component : NewFormComponent
    },
    {
        path : "**",
        redirectTo : 'user',
        pathMatch : 'full'
    }

]