import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

@Injectable({
    providedIn: 'root',
})
export class SubmitApplicationValidators{
    maritalStatus : string[];

    constructor(){
        this.maritalStatus = ["Single","Married","Separated","Divorced","Widowed"]
    }


  maritalStatusValidator() : ValidatorFn {
    return (control : AbstractControl) : ValidationErrors | null => {
      
      return {maritalStatusError:control.value in this.maritalStatus};
    }
  }
}