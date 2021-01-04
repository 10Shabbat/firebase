
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-verify-phone',
  templateUrl: './verify-phone.component.html',
  styleUrls: ['./verify-phone.component.css']
})
export class VerifyPhoneComponent{
 /* implements OnInit  */
  //public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  

  constructor(public authService: AuthService) {
    
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebase);
    }
  }

  /* ngOnInit() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }  */

   /* onSubmit(formData) {
    const appVerifier = this.recaptchaVerifier;
    const phoneNumberString = formData.phone_number.toString(); */
   // this.authService.doPhoneLogin(appVerifier,phoneNumberString);
    
 // }  */
}