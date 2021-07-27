import { Component, OnInit } from '@angular/core';
import { FormBuilder} from "@angular/forms";
import { SubmitService } from '../services/submit-service.service';


@Component({
  selector: 'app-submit-application',
  templateUrl: './submit-application.component.html',
  styleUrls: ['./submit-application.component.css']
})
export class SubmitApplicationComponent {
  userData : {[id: string]:string};
  constructor(private fb : FormBuilder, private ss :SubmitService) { 
    this.userData = {"workExp":""};
  }

  applicationForm = this.fb.group({
    firstName: [''],
    addressLine1 : [''],
    middleName:  [''],
    addressLine2: [''],
    lastName : [''],
    city : [''],
    dateOfBirth : [''],
    state : [''],
    maritalStatus : [''],
    postalCode : [''],
    ssn : [''],
    homeNo : [''],
    amount : [''],
    officeNo : [''],
    purpose : [''],
    mobileNo : [''],
    description : [''],
    email : [''],
    currEmployerName : [''],
    workExpYear : [''],
    workExpMonth : [''],
    annualSalary : [''],
    designation : [''],
    empAddressLine1 : [''],
    empAddressLine2 : [''],
    empCity : [''],
    empState : [''],
    empPostalCode : ['']
    

  });

  onSubmit(){
    Object.keys(this.applicationForm.controls).forEach(key => {
      console.log(key)
      if(key!="workExpYear" && key!="workExpMonth"){
        this.userData[key] = this.applicationForm.get(key)?.value
      }else{
        this.userData.workExp =  this.userData.workExp+this.applicationForm.get(key)?.value;
      }
    });


    this.ss.register(this.userData).subscribe(
      response => console.log("Success!"+response),
      error => console.error("Error!",error)
    )
  }
}
