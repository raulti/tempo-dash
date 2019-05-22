import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
    selector: 'app-validationforms-cmp',
})

export class ValidationFormsComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  validEmailRegister: boolean = false;
  validConfirmPasswordRegister: boolean = false;
  validPasswordRegister: boolean = false;

  validEmailLogin: boolean = false;
  validPasswordLogin: boolean = false;

  validTextType: boolean = false;
  validEmailType: boolean = false;
  validNumberType: boolean = false;
  validUrlType: boolean = false;
  pattern = "https?://.+";
  validSourceType: boolean = false;
  validDestinationType: boolean = false;

  matcher = new MyErrorStateMatcher();
 
  constructor() {}

   isFieldValid(form: FormGroup, field: string) {
     return !form.get(field).valid && form.get(field).touched;
   }

   displayFieldCss(form: FormGroup, field: string) {
     return {
       'has-error': this.isFieldValid(form, field),
       'has-feedback': this.isFieldValid(form, field)
     };
   }

   validateAllFormFields(formGroup: FormGroup) {
     Object.keys(formGroup.controls).forEach(field => {
       const control = formGroup.get(field);
       if (control instanceof FormControl) {
         control.markAsTouched({ onlySelf: true });
       } else if (control instanceof FormGroup) {
         this.validateAllFormFields(control);
       }
     });
   }

  emailValidationRegister(e){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(e).toLowerCase())) {
        this.validEmailRegister = true;
    } else {
      this.validEmailRegister = false;
    }
  }

  passwordValidationRegister(e){
      if (e.length > 5) {
          this.validPasswordRegister = true;
      }else{
        this.validPasswordRegister = false;
      }
  }

  confirmPasswordValidationRegister(e, register){
    if (register.controls['password'].value === e) {
        this.validConfirmPasswordRegister = true;
    }else{
      this.validConfirmPasswordRegister = false;
    }
  }

  emailValidationLogin(e){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(e).toLowerCase())) {
        this.validEmailLogin= true;
    } else {
      this.validEmailLogin = false;
    }
  }

  passwordValidationLogin(e){
      if (e.length > 5) {
          this.validPasswordLogin = true;
      }else{
        this.validPasswordLogin = false;
      }
  }

  textValidationType(e){
      if (e) {
          this.validTextType = true;
      }else{
        this.validTextType = false;
      }
  }

  emailValidationType(e){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(e).toLowerCase())) {
        this.validEmailType = true;
    } else {
      this.validEmailType = false;
    }
  }

  numberValidationType(e){
      if (e) {
          this.validNumberType = true;
      }else{
        this.validNumberType = false;
      }
  }

  urlValidationType(e){
    try {
      new URL(e);
      this.validUrlType = true;
    } catch (_) {
      this.validUrlType = false;
    }
  }

  sourceValidationType(e){
      if (e) {
          this.validSourceType = true;
      }else{
        this.validSourceType = false;
      }
  }
  
  confirmDestinationValidationType(e, type){
    if (type.controls['password'].value === e) {
        this.validDestinationType = true;
    }else{
      this.validDestinationType = false;
    }
  }

}
