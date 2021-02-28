import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder ,Validators} from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  firstname = new FormControl('',[
    Validators.required
  ]);
  lastname = new FormControl('',[
    Validators.required
  ]);
  gender = new FormControl('',[
    Validators.required
  ]);
  email = new FormControl('',[
    Validators.required
  ]);
  address = new FormControl('',[
    Validators.required
  ]);
  city = new FormControl('',[
    Validators.required
  ]);
  state = new FormControl('',[
    Validators.required
  ]);

  updateForm : FormGroup;
  

  constructor(private fb :FormBuilder,private router : Router) {
    this.updateForm = this.fb.group({
      firstname : this.firstname,
      lastname : this.lastname,
      gender : this.gender,
      email : this.email,
      address : this.address,
      city : this.city,
      state : this.state
    })
   }

   onUpdate(){
     this.router.navigate(['/users']);
      console.log("Update");
   }

   onCancel(){
    this.router.navigate(['/newcustomer']);
    console.log("Cancel");
   }

   onDelete(){
    this.router.navigate(['/users']);
    console.log("Delete");
   }

  ngOnInit(): void {
  }

}
