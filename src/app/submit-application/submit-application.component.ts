import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl} from "@angular/forms";
import { SubmitService } from '../services/submit-service.service';
import { SubmitApplicationValidators } from "./submit-application.validators";

@Component({
  selector: 'app-submit-application',
  templateUrl: './submit-application.component.html',
  styleUrls: ['./submit-application.component.css']
})
export class SubmitApplicationComponent {
  userData : {[id: string]:string};
  

  constructor(private fb : FormBuilder, private ss :SubmitService, private valids: SubmitApplicationValidators) { 
    this.userData = {"workExp":""};
  }

  applicationForm = this.fb.group({
    firstName: ['',[Validators.required,Validators.maxLength(255)]],
    addressLine1 : ['',[Validators.required,Validators.maxLength(255)]],
    middleName:  ['',Validators.maxLength(255)],
    addressLine2: ['',Validators.maxLength(255)],
    lastName : ['',[Validators.required,Validators.maxLength(255)]],
    city : ['',[Validators.required,Validators.maxLength(255)]],
    dateOfBirth : ['',[Validators.required]],
    state : ['',[Validators.required,Validators.maxLength(255)]],
    maritalStatus : ['',[Validators.required]],
    postalCode : ['',[Validators.required]],
    ssn : ['',[Validators.required]],
    homeNo : ['',[Validators.required]],
    amount : ['',[Validators.required]],
    officeNo : [''],
    purpose : ['',[Validators.required]],
    mobileNo : ['',[Validators.required]],
    description : [''],
    email : ['',[Validators.required]],
    currEmployerName : ['',[Validators.required]],
    workExpYear : [''],
    workExpMonth : [''],
    annualSalary : ['',[Validators.required]],
    designation : [''],
    empAddressLine1 : ['',[Validators.required]],
    empAddressLine2 : [''],
    empCity : ['',[Validators.required]],
    empState : ['',[Validators.required]],
    empPostalCode : ['',[Validators.required]]
    

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
