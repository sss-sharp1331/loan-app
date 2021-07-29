import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl} from "@angular/forms";
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
    firstName: ['',[Validators.required,Validators.maxLength(255)]],
    addressLine1 : ['',[Validators.required,Validators.maxLength(255)]],
    middleName:  ['',Validators.maxLength(255)],
    addressLine2: ['',Validators.maxLength(255)],
    lastName : ['',[Validators.required,Validators.maxLength(255)]],
    city : ['',[Validators.required,Validators.maxLength(255)]],
    dateOfBirth : ['',[Validators.required]],
    state : ['',[Validators.required,Validators.maxLength(255)]],
    maritalStatus : ['',[Validators.required]],
    postalCode : ['',[Validators.required,Validators.pattern("^[0-9]{5}$")]],
    ssn : ['',[Validators.required]],
    homeNo : ['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
    amount : ['',[Validators.required,Validators.pattern("^[0-9]+(\.[0-9])?$")]],
    officeNo : ['',Validators.pattern("^[0-9]{10}$")],
    purpose : ['',[Validators.required]],
    mobileNo : ['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
    description : [''],
    email : ['',[Validators.required,Validators.email]],
    currentEmployerName : ['',[Validators.required,Validators.maxLength(255)]],
    workExpYear : ['',[Validators.required,Validators.pattern("^[0-9]*$")]],
    workExpMonth : ['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.max(12)]],
    annualSalary : ['',[Validators.required,Validators.pattern("^[0-9]+(\.[0-9])?$")]],
    designation : ['',Validators.maxLength(255)],
    empAddressLine1 : ['',[Validators.required,Validators.maxLength(255)]],
    empAddressLine2 : ['',Validators.maxLength(255)],
    empCity : ['',[Validators.required,Validators.maxLength(255)]],
    empState : ['',[Validators.required,Validators.maxLength(255)]],
    empPostalCode : ['',[Validators.required,Validators.pattern("^[0-9]{5}$")]],
    

  });

  onSubmit(){
    Object.keys(this.applicationForm.controls).forEach(key => {
      console.log(key)
      if(key!="workExpYear" && key!="workExpMonth"){
        this.userData[key] = this.applicationForm.get(key)?.value
      }else{
        this.userData.workExp =  this.userData.workExp+this.applicationForm.get(key)?.value;
        if(key=="workExpYear") this.userData.workExp+="_"
      }
    });

    this.ss.register(this.userData).subscribe(
      response => console.log("Success!"+response),
      error => console.error("Error!",error)
    )
  }

}
