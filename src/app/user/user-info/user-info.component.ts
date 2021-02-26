import { Component, Input } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
@Input() user :  User;

myDynamicClasses= {'my-border' : true, 'my-feature' : false}

onToggle(){
  this.myDynamicClasses['my-border']=!this.myDynamicClasses['my-border'];
  this.myDynamicClasses['my-feature']=!this.myDynamicClasses['my-feature'];
}
}
