import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RetrieveService } from '../services/retrieve.service';


@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})


export class ApplicationDetailsComponent implements OnInit {
  applicationDetails:any;
  id:string= "";
  gotData:boolean = false;
  constructor(private route: ActivatedRoute,private rs:RetrieveService,private fb:FormBuilder) { }

  applicationForm:FormGroup = this.fb.group({
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
    currentEmployerName : [''],
    workExpYear : [''],
    workExpMonth : [''],
    annualSalary : [''],
    designation : [''],
    empAddressLine1 : [''],
    empAddressLine2 : [''],
    empCity : [''],
    empState : [''],
    empPostalCode : [''],
  });

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id')!
    this.rs.getSingleApplication(this.id).subscribe(
      res=>{
        this.applicationDetails = res;
        for(const [key,value] of Object.entries(this.applicationDetails)){
          this.applicationForm.get(key)?.setValue(value);
          this.applicationForm.get(key)?.disable();
        }
        this.gotData=true;
        var dates = this.applicationDetails['workExp'].split("_");
        
        this.applicationForm.get('workExpYear')?.setValue(dates[0]);
        this.applicationForm.get('workExpYear')?.disable();

        this.applicationForm.get('workExpMonth')?.setValue(dates[1]);
        this.applicationForm.get('workExpMonth')?.disable();


      },
      error=>console.error("Failed to retreive Data! Error: "+error)
      
    )

    
    
  }

  


}
