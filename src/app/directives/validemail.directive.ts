import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[validemail]',
  providers :[
    {
    provide:NG_VALIDATORS,
    useExisting:ValidemailDirective,
    multi:true
    }
  ]
})
export class ValidemailDirective implements Validator {
  validate(control:AbstractControl): ValidationErrors {
    const email= control.value;
    if(email.toLowerCase().trim().endsWith('@gmail.com')){
      return {
        emailDomain: {
          parsedEmail:email,
          forbidden:'@gmail.com'
        }
      }
    }
    
  }

  constructor() { }

}
